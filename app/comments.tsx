"use client";

import { FormEvent, useEffect, useState } from "react";

type Comment = { id: number; author_name: string; body: string; created_at: string };
type FormState = "editing" | "sending" | "success" | "error";

export default function Comments({ slug }: { slug: string }) {
  const [items, setItems] = useState<Comment[]>([]);
  const [formState, setFormState] = useState<FormState>("editing");
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    fetch(`/api/comments?slug=${encodeURIComponent(slug)}`)
      .then((response) => response.json())
      .then((data) => setItems(data.comments || []));
  }, [slug]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    const form = event.currentTarget;
    const fields = new FormData(form);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ slug, name: fields.get("name"), body: fields.get("body"), website: fields.get("website") }),
      });
      const data = await response.json();
      if (!response.ok || !data.comment) throw new Error("No se pudo publicar.");

      setItems((current) => [data.comment, ...current]);
      form.reset();
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  function writeAnother() {
    setFormKey((current) => current + 1);
    setFormState("editing");
  }

  return <section className="comments">
    <p className="eyebrow">CONVERSACIÓN ABIERTA</p>
    <h2>Dejá tu comentario.</h2>
    {formState === "success" ? (
      <div className="comment-thanks" role="status" aria-live="polite">
        <strong>¡Gracias por tu comentario!</strong>
        <p>Ya quedó publicado. Cuando quieras, podés dejar otro.</p>
        <button className="button" type="button" onClick={writeAnother}>Dejar otro comentario</button>
      </div>
    ) : (
      <form key={formKey} onSubmit={submit}>
        <label>Tu nombre<input name="name" required maxLength={60} /></label>
        <label>Tu comentario<textarea name="body" required maxLength={750} /></label>
        <label className="honeypot">Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
        <button className="button" type="submit" disabled={formState === "sending"}>{formState === "sending" ? "Publicando…" : "Publicar comentario"}</button>
        {formState === "error" && <p className="comment-message error" role="alert">No pudimos publicar el comentario. Revisá el nombre y el texto e intentá de nuevo.</p>}
      </form>
    )}
    <div className="comment-list"><b>{items.length.toString().padStart(2, "0")} COMENTARIOS</b>{items.map((comment) => <article key={comment.id}><strong>{comment.author_name}</strong><time>{new Date(comment.created_at).toLocaleDateString("es-AR")}</time><p>{comment.body}</p></article>)}</div>
  </section>;
}
