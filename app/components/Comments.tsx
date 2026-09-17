"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type Comment = {
  id: number;
  author_name: string;
  body: string;
  created_at: string;
};

type ApiResponse = {
  comments?: Comment[];
  comment?: Comment;
  error?: string;
};

type CommentsProps = {
  articleSlug: string;
  prompt: string;
  placeholder?: string;
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function formatDate(value: string) {
  const normalized = value.includes("T") ? value : `${value.replace(" ", "T")}Z`;
  const date = new Date(normalized);
  if (Number.isNaN(date.getTime())) return "Recién publicado";
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default function Comments({ articleSlug, prompt, placeholder = "¿Qué te pareció la nota?" }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [formState, setFormState] = useState<"editing" | "submitting" | "success">("editing");
  const [formKey, setFormKey] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadComments() {
      try {
        const response = await fetch(`/api/comments?slug=${encodeURIComponent(articleSlug)}`, { signal: controller.signal });
        const data = (await response.json()) as ApiResponse;
        if (!response.ok) throw new Error(data.error || "No pudimos cargar los comentarios.");
        setComments(data.comments ?? []);
      } catch (loadError) {
        if (controller.signal.aborted) return;
        setError(loadError instanceof Error ? loadError.message : "No pudimos cargar los comentarios.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadComments();
    return () => controller.abort();
  }, [articleSlug]);

  async function submitComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("submitting");
    setError("");
    setSuccess("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          slug: articleSlug,
          name: data.get("authorName"),
          body: data.get("body"),
          website: data.get("website"),
        }),
      });
      const result = (await response.json()) as ApiResponse;
      if (!response.ok || !result.comment) {
        throw new Error(result.error || "No pudimos publicar el comentario.");
      }

      setComments((current) => [result.comment as Comment, ...current]);
      form.reset();
      setSuccess("¡Gracias! Tu comentario ya está publicado.");
      setFormState("success");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "No pudimos publicar el comentario.");
      setFormState("editing");
    }
  }

  function writeAnotherComment() {
    setSuccess("");
    setError("");
    setFormKey((current) => current + 1);
    setFormState("editing");
  }

  return (
    <section className="comments-section" aria-labelledby={`comments-title-${articleSlug}`}>
      <div className="comments-heading">
        <div>
          <p className="kicker">// CONVERSACIÓN ABIERTA</p>
          <h2 id={`comments-title-${articleSlug}`}>Dejá tu <i>comentario.</i></h2>
        </div>
        <p>{prompt}</p>
      </div>

      <div className="comments-layout">
        {formState === "success" ? (
          <div className="comment-thanks" role="status" aria-live="polite">
            <strong>¡Gracias por tu comentario!</strong>
            <p>Ya quedó publicado. Cuando quieras, podés dejar otro.</p>
            <button type="button" onClick={writeAnotherComment}>DEJAR OTRO COMENTARIO ↗</button>
          </div>
        ) : (
        <form key={formKey} className="comment-form" onSubmit={submitComment}>
          <label htmlFor={`comment-name-${articleSlug}`}>TU NOMBRE</label>
          <input id={`comment-name-${articleSlug}`} name="authorName" type="text" minLength={2} maxLength={50} autoComplete="name" placeholder="Ej.: Eze Guerrero" required />

          <label htmlFor={`comment-body-${articleSlug}`}>TU COMENTARIO</label>
          <textarea id={`comment-body-${articleSlug}`} name="body" minLength={3} maxLength={750} rows={6} placeholder={placeholder} required />

          <label className="comment-honeypot" aria-hidden="true">
            Sitio web
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>

          <div className="comment-form-footer">
            <small>Máximo 750 caracteres. Publicá con respeto.</small>
            <button type="submit" disabled={formState === "submitting"}>{formState === "submitting" ? "PUBLICANDO…" : "PUBLICAR COMENTARIO ↗"}</button>
          </div>
          {error && <p className="comment-message error" role="alert">{error}</p>}
          {success && <p className="comment-message success" role="status">{success}</p>}
        </form>
        )}

        <div className="comments-feed" aria-live="polite">
          <div className="comments-count"><span>{String(comments.length).padStart(2, "0")}</span><p>{comments.length === 1 ? "COMENTARIO" : "COMENTARIOS"}</p></div>
          {loading ? (
            <p className="comments-empty">Cargando conversación…</p>
          ) : comments.length === 0 ? (
            <div className="comments-empty"><strong>SÉ EL PRIMERO</strong><p>Esta conversación todavía no comenzó.</p></div>
          ) : (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <span className="comment-avatar" aria-hidden="true">{initials(comment.author_name)}</span>
                  <div>
                    <div className="comment-meta"><strong>{comment.author_name}</strong><time dateTime={comment.created_at}>{formatDate(comment.created_at)}</time></div>
                    <p>{comment.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
