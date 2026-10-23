import React, { useState, useEffect } from 'react';
import { Article } from '../types/article';
import { SiteImage } from './SiteImage';
import {
  X,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Calendar,
  Clock,
  ExternalLink,
  Check,
  ChevronLeft,
} from 'lucide-react';
import { isTodayArticle } from '../utils/articleUtils';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (article: Article) => void;
  allArticles?: Article[];
  onSelectArticle?: (article: Article) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  isBookmarked = false,
  onToggleBookmark,
  allArticles = [],
  onSelectArticle,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    if (scrollHeight <= clientHeight) {
      setReadingProgress(100);
      return;
    }
    const progress = Math.min(100, Math.max(0, (scrollTop / (scrollHeight - clientHeight)) * 100));
    setReadingProgress(progress);
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      setReadingProgress(0);
    }
  }, [article?.slug]);

  // Stop speech when unmounted or article changes
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [article]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [article]);

  const relatedArticles = React.useMemo(() => {
    if (!allArticles || allArticles.length === 0 || !article) return [];
    const sameCat = allArticles.filter((a) => a.slug !== article.slug && a.category === article.category);
    const others = allArticles.filter((a) => a.slug !== article.slug && a.category !== article.category);
    return [...sameCat, ...others].slice(0, 3);
  }, [allArticles, article]);

  if (!article) return null;

  const isToday = isTodayArticle(article);

  const shareUrl = `https://www.tokengeekcoin.com/articulo/${article.slug}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.dek,
          url: shareUrl,
        });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('La síntesis de voz no está soportada en tu navegador.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = `${article.title}. ${article.dek}. ${article.body.join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'es-ES';
      utterance.rate = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const bodyFontSizeClass = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-relaxed',
    xl: 'text-xl leading-relaxed',
  }[fontSize];

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200"
    >
      <div
        className="article article-page w-full max-w-4xl min-h-screen sm:min-h-0 sm:my-6 border-3 border-[var(--mg-purple)] shadow-2xl flex flex-col relative"
        style={{ background: 'var(--mg-ink)', color: 'var(--mg-white)' }}
      >
        {/* Reading Progress Indicator Bar */}
        <div className="sticky top-0 left-0 right-0 h-1.5 w-full bg-[#120822] z-40 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[var(--mg-acid)] via-[var(--mg-orange)] to-[#00f2ff] transition-all duration-100 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>

        {/* Sticky Action Toolbar in Magazine Geek style */}
        <div
          className="sticky top-1.5 z-30 px-4 py-3 flex items-center justify-between gap-2 border-b-4 border-[var(--mg-orange)]"
          style={{ background: 'var(--mg-panel)' }}
        >
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-sans font-bold uppercase tracking-wider text-white hover:text-[var(--mg-acid)] px-2.5 py-1.5 border border-white/20 hover:border-[var(--mg-acid)] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Volver a Portada</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Audio narrator button */}
            <button
              onClick={handleToggleSpeech}
              style={{
                background: isSpeaking ? '#1e1438' : 'transparent',
                color: isSpeaking ? 'var(--mg-acid)' : 'var(--mg-white)',
                borderColor: isSpeaking ? 'var(--mg-acid)' : 'rgba(255,255,255,0.3)',
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-bold uppercase tracking-wider border transition-all cursor-pointer"
              title={isSpeaking ? 'Detener lectura' : 'Escuchar noticia'}
            >
              {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-[var(--mg-acid)]" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">
                {isSpeaking ? 'Pausar audio' : 'Escuchar'}
              </span>
            </button>

            {/* Font size switcher */}
            <div className="flex items-center border border-white/30 text-xs font-sans font-bold bg-[#0d0915]">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2.5 py-1 transition-colors ${fontSize === 'normal' ? 'bg-[#1e1438] text-[var(--mg-acid)] font-black ring-1 ring-[var(--mg-acid)]' : 'text-white hover:text-stone-300'}`}
                title="Texto normal"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2.5 py-1 border-x border-white/30 transition-colors ${fontSize === 'large' ? 'bg-[#1e1438] text-[var(--mg-acid)] font-black ring-1 ring-[var(--mg-acid)]' : 'text-white hover:text-stone-300'}`}
                title="Texto grande"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2.5 py-1 transition-colors ${fontSize === 'xl' ? 'bg-[#1e1438] text-[var(--mg-acid)] font-black ring-1 ring-[var(--mg-acid)]' : 'text-white hover:text-stone-300'}`}
                title="Texto extra grande"
              >
                A++
              </button>
            </div>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-1.5 border border-white/30 text-white hover:text-[var(--mg-acid)] hover:border-[var(--mg-acid)] transition-all cursor-pointer"
              title="Copiar enlace"
            >
              {copied ? <Check className="w-4 h-4 text-[var(--mg-acid)]" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Bookmark button */}
            {onToggleBookmark && (
              <button
                onClick={() => onToggleBookmark(article)}
                style={{
                  background: isBookmarked ? '#1e1438' : 'transparent',
                  color: isBookmarked ? 'var(--mg-acid)' : 'var(--mg-white)',
                  borderColor: isBookmarked ? 'var(--mg-acid)' : 'rgba(255,255,255,0.3)',
                }}
                className="p-1.5 border transition-all cursor-pointer"
                title={isBookmarked ? 'Quitar de guardados' : 'Guardar'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-[var(--mg-acid)]' : ''}`} />
              </button>
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 border border-white/30 text-white hover:bg-[var(--mg-orange)] hover:text-[var(--mg-ink)] transition-colors cursor-pointer ml-1"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Header (Magazine Geek Style) */}
        <header
          className="p-6 md:p-10 border-b-6 border-[var(--mg-orange)] relative overflow-hidden"
          style={{ background: 'linear-gradient(120deg, var(--mg-ink) 0 68%, var(--mg-purple) 68%)' }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="eyebrow"
              style={{
                display: 'inline-block',
                padding: '6px 12px',
                background: 'var(--mg-orange)',
                color: 'var(--mg-ink)',
                transform: 'skew(-8deg)',
                fontFamily: 'var(--mg-mono)',
                fontWeight: 900,
                fontSize: '0.72rem',
                letterSpacing: '0.12em',
              }}
            >
              {article.category}
            </span>

            {isToday && (
              <span
                style={{
                  background: '#130c24',
                  color: 'var(--mg-acid)',
                  border: '2px solid var(--mg-acid)',
                  fontFamily: 'var(--mg-mono)',
                  fontWeight: 900,
                  fontSize: '0.7rem',
                  padding: '4px 10px',
                  transform: 'skew(-8deg)',
                  boxShadow: '3px 3px 0 var(--mg-purple)',
                }}
              >
                ★ PUBLICADA HOY
              </span>
            )}
          </div>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-white"
            style={{
              fontFamily: 'var(--mg-display), Impact, "Arial Black", sans-serif',
              lineHeight: 1.12,
              fontStyle: 'normal',
              textShadow: '2px 2px 0 #1b0f38',
              letterSpacing: '0.01em',
              wordBreak: 'normal',
              overflowWrap: 'break-word',
            }}
          >
            {article.title}
          </h1>

          <p
            className="dek text-base sm:text-lg md:text-xl font-sans leading-relaxed mb-6"
            style={{
              borderLeft: '8px solid var(--mg-acid)',
              paddingLeft: '18px',
              color: 'var(--mg-white)',
            }}
          >
            {article.dek}
          </p>

          {article.personalAngle && (
            <div
              className="p-3 mb-6 text-sm font-sans italic border-l-4 border-[var(--mg-orange)] bg-[#17102b] text-[#ded7ef]"
            >
              💬 <strong>Nota del editor:</strong> {article.personalAngle}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 text-xs font-sans" style={{ color: 'var(--mg-acid)' }}>
            <span className="flex items-center gap-1.5 font-bold">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5 font-bold">
              <Clock className="w-3.5 h-3.5" />
              {article.minutes} minutos de lectura
            </span>
            <span>·</span>
            <span className="text-stone-300 font-bold">Por Ezequiel Guerrero (Jujuy)</span>
          </div>
        </header>

        {/* Hero Image principal debajo del titular */}
        <div className="relative border-b-6 border-[var(--mg-purple)] bg-[#0d0914]">
          <SiteImage
            src={article.image}
            alt={article.imageAlt || article.title}
            category={article.category}
            aspectRatio="video"
            priority={true}
          />
          {article.imageAlt && (
            <div
              className="p-2.5 text-[11px] font-sans border-t border-white/10 flex items-center justify-between"
              style={{ background: 'var(--mg-panel)', color: 'var(--mg-muted)' }}
            >
              <span>Foto: {article.imageAlt}</span>
              {article.imageCredit && (
                <span className="text-[10px] text-stone-400 font-mono">{article.imageCredit}</span>
              )}
            </div>
          )}
        </div>

        {/* Article Body Content */}
        <div className="p-6 md:p-10 space-y-8 max-w-3xl mx-auto w-full prose">
          {/* Main Paragraphs */}
          <div className={`font-sans space-y-5 text-stone-100 ${bodyFontSizeClass}`}>
            {article.body.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key bullets / takeaways if present */}
          {article.bullets && article.bullets.length > 0 && (
            <section
              className="p-6 border-l-8 border-[var(--mg-acid)]"
              style={{ background: 'var(--mg-panel)' }}
            >
              <p className="eyebrow text-xs font-sans font-black uppercase tracking-widest text-[var(--mg-acid)] mb-3">
                Puntos Clave del Análisis
              </p>
              <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-stone-200">
                {article.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[var(--mg-acid)] font-black">▶</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Deep-dive features if present */}
          {article.features && article.features.length > 0 && (
            <div className="space-y-6 pt-4">
              <h3
                className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight"
                style={{ fontFamily: 'var(--mg-display)', color: 'var(--mg-acid)' }}
              >
                Detalles en Profundidad
              </h3>

              <div className="space-y-6">
                {article.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="article-feature border-3 border-white/30"
                    style={{
                      background: 'var(--mg-panel)',
                      boxShadow: idx % 2 === 0 ? '8px 8px 0 var(--mg-purple)' : '8px 8px 0 var(--mg-orange)',
                    }}
                  >
                    {feat.image && (
                      <SiteImage
                        src={feat.image}
                        alt={feat.imageAlt || feat.alt || feat.title}
                        category={article.category}
                        aspectRatio="video"
                      />
                    )}
                    <div className="p-6">
                      <h4
                        className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2"
                        style={{ fontFamily: 'var(--mg-display)' }}
                      >
                        {feat.title}
                      </h4>
                      <p className="font-sans text-sm sm:text-base text-stone-200 leading-relaxed mb-4">
                        {Array.isArray(feat.body) ? feat.body.join(' ') : feat.body}
                      </p>
                      {feat.facts && (
                        <div
                          className="feature-facts p-4 text-xs font-sans border-l-4 border-[var(--mg-acid)]"
                          style={{
                            background: '#0d0819',
                            color: '#ede9fe',
                          }}
                        >
                          <div className="text-[var(--mg-acid)] uppercase tracking-wider text-[11px] mb-2 font-mono font-black flex items-center gap-1.5">
                            <span className="opacity-70">//</span>
                            <span>DATOS CLAVE</span>
                          </div>
                          {Array.isArray(feat.facts) ? (
                            <ul className="space-y-1.5 text-stone-200">
                              {feat.facts.map((fact: string, fIdx: number) => (
                                <li key={fIdx} className="leading-relaxed text-stone-200 flex items-start gap-2">
                                  <span className="text-[var(--mg-acid)] font-bold select-none">›</span>
                                  <span>{fact}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-stone-200 leading-relaxed">{feat.facts}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Social Share & Virality Module */}
          <div
            className="p-5 my-8 border-2 border-[var(--mg-acid)]"
            style={{ background: '#120b22' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[var(--mg-acid)] text-xs font-mono font-bold uppercase tracking-wider block mb-1">
                  // DIFUSIÓN GEEK
                </span>
                <h4 className="text-white font-bold text-base sm:text-lg">
                  ¿Te gustó este análisis? Compártelo y apoya el proyecto:
                </h4>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}&via=TokenGeekCoin`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#1da1f2]/20 hover:bg-[#1da1f2]/40 text-[#1da1f2] border border-[#1da1f2]/40 text-xs font-bold font-sans rounded transition-all cursor-pointer flex items-center gap-1.5"
                  title="Compartir en X"
                >
                  <span>𝕏 / Twitter</span>
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${article.title} - Lee más en: ${shareUrl}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#25d366]/20 hover:bg-[#25d366]/40 text-[#25d366] border border-[#25d366]/40 text-xs font-bold font-sans rounded transition-all cursor-pointer flex items-center gap-1.5"
                  title="Compartir en WhatsApp"
                >
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#0088cc]/20 hover:bg-[#0088cc]/40 text-[#0088cc] border border-[#0088cc]/40 text-xs font-bold font-sans rounded transition-all cursor-pointer flex items-center gap-1.5"
                  title="Compartir en Telegram"
                >
                  <span>Telegram</span>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#0a66c2]/20 hover:bg-[#0a66c2]/40 text-[#0a66c2] border border-[#0a66c2]/40 text-xs font-bold font-sans rounded transition-all cursor-pointer flex items-center gap-1.5"
                  title="Compartir en LinkedIn"
                >
                  <span>LinkedIn</span>
                </a>
                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-bold font-sans rounded transition-all cursor-pointer flex items-center gap-1.5"
                  title="Copiar enlace"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[var(--mg-acid)]" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
                </button>
              </div>
            </div>
          </div>


          {/* Related Stories / Continuous Reading Loop */}
          {relatedArticles.length > 0 && (
            <div className="my-10 pt-8 border-t-3 border-[var(--mg-purple)]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[var(--mg-acid)] text-xs font-mono font-bold uppercase tracking-wider block">
                    // SIGUE EXPLORANDO
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display">
                    Noticias Relacionadas
                  </h3>
                </div>
                <span className="text-xs text-stone-400 font-sans hidden sm:inline">
                  Artículos seleccionados para ti
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.slug}
                    onClick={() => onSelectArticle && onSelectArticle(rel)}
                    className="p-3 bg-[#110920] border border-white/15 hover:border-[var(--mg-acid)] cursor-pointer group flex flex-col justify-between transition-all hover:-translate-y-1"
                  >
                    <div>
                      {rel.image && (
                        <div className="aspect-video overflow-hidden mb-2.5 bg-black">
                          <img
                            src={rel.image}
                            alt={rel.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <span className="text-[10px] font-mono font-bold text-[var(--mg-orange)] uppercase block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-bold text-white group-hover:text-[var(--mg-acid)] line-clamp-2 leading-snug">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-[11px] text-[var(--mg-acid)] font-bold mt-3 inline-flex items-center gap-1">
                      Leer análisis →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Newsletter / Push Community Callout */}
          <div className="my-8 p-6 bg-gradient-to-r from-[#1c0f38] to-[#120a24] border-2 border-[var(--mg-orange)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="px-2 py-0.5 bg-[var(--mg-orange)] text-black font-black text-[10px] uppercase tracking-wider font-mono">
                COMUNIDAD TOKEN GEEK
              </span>
              <h4 className="text-lg font-black text-white mt-1.5 font-display">
                No te pierdas ninguna primicia geek ni análisis sin humo
              </h4>
              <p className="text-xs text-stone-300 mt-1 font-sans">
                Únete a nuestros canales de difusión y recibe las novedades de hardware, IA, gaming y finanzas al instante.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://www.youtube.com/@eztec3/videos?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#ff0000] hover:bg-[#cc0000] text-white text-xs font-bold uppercase tracking-wider rounded font-sans transition-colors cursor-pointer"
              >
                YouTube ↗
              </a>
              <a
                href="https://www.linkedin.com/in/eze-guerrero-06585142b/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#0a66c2] hover:bg-[#084e96] text-white text-xs font-bold uppercase tracking-wider rounded font-sans transition-colors cursor-pointer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Author signature footer */}
          <div
            className="pt-8 mt-10 border-t-4 border-[var(--mg-purple)] flex flex-wrap items-center justify-between gap-4 font-sans text-xs"
            style={{ color: 'var(--mg-muted)' }}
          >
            <div>
              <p className="text-white font-bold">TOKEN GEEK COIN · EDICIÓN EDITORIAL</p>
              <p>Escrito por Ezequiel Guerrero desde San Salvador de Jujuy</p>
            </div>
            <button
              onClick={onClose}
              className="classic-button cursor-pointer text-xs py-2 px-4"
            >
              Volver a Portada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
