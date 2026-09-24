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
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  isBookmarked = false,
  onToggleBookmark,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

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

  if (!article) return null;

  const isToday = isTodayArticle(article);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-0 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="article article-page w-full max-w-4xl min-h-screen sm:min-h-0 sm:my-6 border-3 border-[var(--mg-purple)] shadow-2xl flex flex-col relative"
        style={{ background: 'var(--mg-ink)', color: 'var(--mg-white)' }}
      >
        {/* Sticky Action Toolbar in Magazine Geek style */}
        <div
          className="sticky top-0 z-30 px-4 py-3 flex items-center justify-between gap-2 border-b-4 border-[var(--mg-orange)]"
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
                background: isSpeaking ? 'var(--mg-acid)' : 'transparent',
                color: isSpeaking ? 'var(--mg-ink)' : 'var(--mg-white)',
                borderColor: isSpeaking ? 'var(--mg-acid)' : '#ffffff40',
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-sans font-bold uppercase tracking-wider border transition-all cursor-pointer"
              title={isSpeaking ? 'Detener lectura' : 'Escuchar noticia'}
            >
              {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">
                {isSpeaking ? 'Pausar audio' : 'Escuchar'}
              </span>
            </button>

            {/* Font size switcher */}
            <div className="flex items-center border border-white/30 text-xs font-sans font-bold">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 ${fontSize === 'normal' ? 'bg-[var(--mg-acid)] text-[var(--mg-ink)]' : 'text-white'}`}
                title="Texto normal"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 border-x border-white/30 ${fontSize === 'large' ? 'bg-[var(--mg-acid)] text-[var(--mg-ink)]' : 'text-white'}`}
                title="Texto grande"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2 py-1 ${fontSize === 'xl' ? 'bg-[var(--mg-acid)] text-[var(--mg-ink)]' : 'text-white'}`}
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
                  background: isBookmarked ? 'var(--mg-acid)' : 'transparent',
                  color: isBookmarked ? 'var(--mg-ink)' : 'var(--mg-white)',
                }}
                className="p-1.5 border border-white/30 transition-all cursor-pointer"
                title={isBookmarked ? 'Quitar de guardados' : 'Guardar'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
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
        <header className="p-6 md:p-10 border-b-6 border-[var(--mg-orange)] relative overflow-hidden"
          style={{ background: 'linear-gradient(120deg, var(--mg-ink) 0 68%, var(--mg-purple) 68%)' }}>
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
                  background: 'var(--mg-acid)',
                  color: 'var(--mg-ink)',
                  fontFamily: 'var(--mg-mono)',
                  fontWeight: 900,
                  fontSize: '0.7rem',
                  padding: '5px 10px',
                  transform: 'skew(-8deg)',
                  boxShadow: '3px 3px 0 var(--mg-purple)',
                }}
              >
                ★ PUBLICADA HOY
              </span>
            )}
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tight mb-4"
            style={{
              fontFamily: 'var(--mg-display)',
              lineHeight: 0.85,
              textShadow: '3px 3px 0 var(--mg-purple-dark)',
            }}
          >
            {article.title}
          </h1>

          <p
            className="dek text-base sm:text-lg md:text-xl font-serif leading-relaxed mb-6"
            style={{
              borderLeft: '8px solid var(--mg-acid)',
              paddingLeft: '18px',
              color: 'var(--mg-white)',
            }}
          >
            {article.dek}
          </p>

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

        {/* Hero Image */}
        <div className="relative border-b-6 border-[var(--mg-purple)]">
          <SiteImage
            src={article.image}
            alt={article.imageAlt || article.title}
            category={article.category}
            aspectRatio="video"
            priority={true}
          />
          {article.imageAlt && (
            <div
              className="p-2 text-[11px] font-sans border-t border-white/10"
              style={{ background: 'var(--mg-panel)', color: 'var(--mg-muted)' }}
            >
              Foto: {article.imageAlt}
            </div>
          )}
        </div>

        {/* Article Body Content */}
        <div className="p-6 md:p-10 space-y-8 max-w-3xl mx-auto w-full prose">
          {/* Main Paragraphs */}
          <div className={`font-serif space-y-5 text-stone-100 ${bodyFontSizeClass}`}>
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
                      <p className="font-serif text-sm sm:text-base text-stone-200 leading-relaxed mb-4">
                        {Array.isArray(feat.body) ? feat.body.join(' ') : feat.body}
                      </p>
                      {feat.facts && (
                        <div
                          className="feature-facts p-3 text-xs font-sans font-bold"
                          style={{
                            background: 'var(--mg-acid)',
                            color: 'var(--mg-ink)',
                            transform: 'skew(-4deg)',
                          }}
                        >
                          {Array.isArray(feat.facts) ? (
                            <ul className="space-y-1">
                              {feat.facts.map((fact: string, fIdx: number) => (
                                <li key={fIdx}>• {fact}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{feat.facts}</p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Official Source Reference */}
          {((article.sources && article.sources.length > 0) || article.sourceUrl) && (
            <div
              className="article-sources p-6 border-3 border-[var(--mg-purple)] mt-8"
              style={{ background: 'var(--mg-panel)' }}
            >
              <p className="text-xs font-sans font-bold uppercase tracking-wider text-stone-400 mb-2">
                Fuentes oficiales verificadas:
              </p>
              <div className="space-y-1">
                {article.sources && article.sources.map((src, sIdx) => (
                  <a
                    key={sIdx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-[var(--mg-acid)] hover:underline mr-4"
                  >
                    <span>{src.name || src.url}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
                {article.sourceUrl && !article.sources && (
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-sm font-bold text-[var(--mg-acid)] hover:underline"
                  >
                    <span>{article.sourceName || article.sourceUrl}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          )}

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
