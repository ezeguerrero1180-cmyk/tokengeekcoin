import React, { useState } from 'react';
import { Article } from '../types/article';
import { X, Plus, Image as ImageIcon, Sparkles } from 'lucide-react';
import { CATEGORY_FALLBACK_IMAGES } from '../utils/articleUtils';

interface NewArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveArticle?: (article: Article) => void;
  onSave?: (article: Article) => void;
}

const CATEGORIES = [
  'GAMING',
  'TECNOLOGÍA + IA',
  'FINANZAS + CRIPTO',
  'CÓMICS + SERIES',
];

export const NewArticleModal: React.FC<NewArticleModalProps> = ({
  isOpen,
  onClose,
  onSaveArticle,
  onSave,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [dek, setDek] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [minutes, setMinutes] = useState(5);
  const [bodyText, setBodyText] = useState('');
  const [bulletsText, setBulletsText] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !dek.trim()) {
      alert('Por favor ingresa al menos un título y una bajada para la noticia.');
      return;
    }

    const todayDate = '24 SEP 2026';
    const slug = `${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}/${title
      .toLowerCase()
      .slice(0, 40)
      .replace(/[^a-z0-9]+/g, '-')}-${Date.now().toString().slice(-4)}`;

    const paragraphs = bodyText
      .split('\n\n')
      .map((p) => p.trim())
      .filter(Boolean);

    const bullets = bulletsText
      .split('\n')
      .map((b) => b.replace(/^[•\-\*]\s*/, '').trim())
      .filter(Boolean);

    const fallbackImg = CATEGORY_FALLBACK_IMAGES[category] || CATEGORY_FALLBACK_IMAGES['DEFAULT'];

    const newArticle: Article = {
      slug,
      category,
      title: title.trim(),
      dek: dek.trim(),
      date: todayDate,
      minutes: Number(minutes) || 5,
      image: imageUrl.trim() || fallbackImg,
      imageAlt: imageAlt.trim() || title.trim(),
      body:
        paragraphs.length > 0
          ? paragraphs
          : [
              dek.trim(),
              'Esta noticia fue redactada y publicada directamente en la edición de hoy de TokenGeekCoin por Ezequiel Guerrero.',
            ],
      bullets: bullets.length > 0 ? bullets : undefined,
    };

    if (onSaveArticle) onSaveArticle(newArticle);
    else if (onSave) onSave(newArticle);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl my-auto border-3 border-[var(--mg-purple)] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        style={{ background: 'var(--mg-ink)', color: 'var(--mg-white)' }}
      >
        {/* Header */}
        <div
          className="border-b-4 border-[var(--mg-orange)] px-6 py-4 flex items-center justify-between"
          style={{ background: 'var(--mg-panel)' }}
        >
          <div>
            <span
              className="font-sans text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider inline-block mb-1"
              style={{ background: 'var(--mg-acid)', color: 'var(--mg-ink)' }}
            >
              ★ PORTADA DE HOY (24 SEP 2026)
            </span>
            <h3
              className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight"
              style={{ fontFamily: 'var(--mg-display)' }}
            >
              Publicar Noticia de Hoy
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border border-white/20 text-stone-300 hover:text-white hover:border-[var(--mg-acid)] cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-4 font-sans">
          <div>
            <label className="block font-sans text-xs font-bold uppercase tracking-wider text-[var(--mg-acid)] mb-1">
              Categoría
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className="p-2 font-sans text-xs font-bold text-center border transition-all cursor-pointer uppercase"
                  style={{
                    background: category === cat ? 'var(--mg-acid)' : 'var(--mg-panel)',
                    color: category === cat ? 'var(--mg-ink)' : 'var(--mg-white)',
                    borderColor: category === cat ? 'var(--mg-acid)' : '#ffffff30',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
              Titular de la noticia *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Nuevo bombazo en la Gamescom 2026..."
              className="w-full p-2.5 bg-[#15111c] border-2 border-white/20 focus:border-[var(--mg-acid)] text-white text-sm font-sans outline-none"
            />
          </div>

          <div>
            <label className="block font-sans text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
              Bajada / Resumen (Aparece en la portada) *
            </label>
            <textarea
              required
              rows={2}
              value={dek}
              onChange={(e) => setDek(e.target.value)}
              placeholder="Breve resumen del impacto de la noticia..."
              className="w-full p-2.5 bg-[#15111c] border-2 border-white/20 focus:border-[var(--mg-acid)] text-white text-sm font-serif outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block font-sans text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                URL de imagen (Opcional)
              </label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://images.unsplash.com/... o /articles/..."
                className="w-full p-2 bg-[#15111c] border-2 border-white/20 focus:border-[var(--mg-acid)] text-white text-xs font-sans outline-none"
              />
            </div>
            <div>
              <label className="block font-sans text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
                Minutos de lectura
              </label>
              <input
                type="number"
                min="1"
                max="60"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-full p-2 bg-[#15111c] border-2 border-white/20 focus:border-[var(--mg-acid)] text-white text-xs font-sans outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
              Cuerpo de la noticia (Párrafos separados con doble salto de línea)
            </label>
            <textarea
              rows={5}
              value={bodyText}
              onChange={(e) => setBodyText(e.target.value)}
              placeholder="Escribe el desarrollo completo del artículo..."
              className="w-full p-2.5 bg-[#15111c] border-2 border-white/20 focus:border-[var(--mg-acid)] text-white text-sm font-serif outline-none"
            />
          </div>

          <div>
            <label className="block font-sans text-xs font-bold uppercase tracking-wider text-stone-300 mb-1">
              Puntos clave (Un punto por línea)
            </label>
            <textarea
              rows={3}
              value={bulletsText}
              onChange={(e) => setBulletsText(e.target.value)}
              placeholder="• Detalle 1&#10;• Detalle 2&#10;• Detalle 3"
              className="w-full p-2 bg-[#15111c] border-2 border-white/20 focus:border-[var(--mg-acid)] text-white text-xs font-sans outline-none"
            />
          </div>

          <div
            className="p-3 border-t-2 border-white/10 flex items-center justify-between pt-4"
            style={{ background: 'var(--mg-panel)' }}
          >
            <button
              type="button"
              onClick={onClose}
              className="font-sans text-xs text-stone-400 hover:text-white px-3 py-2 cursor-pointer uppercase font-bold tracking-wider"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="classic-button cursor-pointer text-xs py-2.5 px-5"
              style={{
                background: 'var(--mg-acid)',
                color: 'var(--mg-ink)',
                boxShadow: '4px 4px 0 var(--mg-orange)',
              }}
            >
              ★ Publicar en Portada Hoy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
