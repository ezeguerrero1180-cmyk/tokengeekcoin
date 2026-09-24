import React from 'react';
import { Article } from '../types/article';
import { SiteImage } from './SiteImage';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (slug: string) => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex justify-center p-4">
      <div
        className="w-full max-w-2xl my-auto border-3 border-[var(--mg-purple)] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden"
        style={{ background: 'var(--mg-ink)', color: 'var(--mg-white)' }}
      >
        {/* Header */}
        <div
          className="border-b-4 border-[var(--mg-orange)] px-6 py-4 flex items-center justify-between"
          style={{ background: 'var(--mg-panel)' }}
        >
          <div className="flex items-center gap-2.5">
            <Bookmark className="w-5 h-5 text-[var(--mg-acid)]" />
            <h3
              className="text-2xl font-black uppercase italic tracking-tight"
              style={{ fontFamily: 'var(--mg-display)' }}
            >
              Noticias Guardadas ({savedArticles.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 border border-white/20 text-stone-300 hover:text-white hover:border-[var(--mg-acid)] cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto flex-1 divide-y divide-white/10">
          {savedArticles.length === 0 ? (
            <div className="text-center py-12">
              <Bookmark className="w-10 h-10 mx-auto mb-3 text-white/30" />
              <p
                className="text-2xl font-black uppercase italic tracking-tight mb-2"
                style={{ fontFamily: 'var(--mg-display)', color: 'var(--mg-acid)' }}
              >
                No tienes noticias guardadas
              </p>
              <p className="font-sans text-xs text-stone-400 max-w-xs mx-auto">
                Haz clic en "GUARDAR" en cualquier noticia para leerla después.
              </p>
            </div>
          ) : (
            savedArticles.map((article) => (
              <div
                key={article.slug}
                className="py-4 first:pt-0 flex gap-4 items-center justify-between group"
              >
                <div
                  className="flex gap-4 items-center flex-1 cursor-pointer"
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                >
                  <div className="w-20 h-14 shrink-0 overflow-hidden border-2 border-white/20">
                    <SiteImage
                      src={article.image}
                      alt={article.title}
                      category={article.category}
                      aspectRatio="video"
                    />
                  </div>
                  <div>
                    <span
                      className="font-sans text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 inline-block mb-1"
                      style={{ background: 'var(--mg-orange)', color: 'var(--mg-ink)' }}
                    >
                      {article.category}
                    </span>
                    <h4
                      className="text-lg font-black uppercase leading-tight group-hover:text-[var(--mg-acid)] transition-colors line-clamp-1"
                      style={{ fontFamily: 'var(--mg-display)' }}
                    >
                      {article.title}
                    </h4>
                    <p className="font-sans text-[11px] text-stone-400 font-bold">
                      {article.date} · {article.minutes} min
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="p-2 border border-white/30 text-white hover:border-[var(--mg-acid)] hover:text-[var(--mg-acid)] cursor-pointer transition-colors"
                    title="Leer noticia"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(article.slug)}
                    className="p-2 border border-white/20 text-stone-400 hover:text-red-400 hover:border-red-400 cursor-pointer transition-colors"
                    title="Eliminar de guardados"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div
          className="border-t-2 border-white/10 px-6 py-3 flex justify-end"
          style={{ background: 'var(--mg-panel)' }}
        >
          <button
            onClick={onClose}
            className="classic-button cursor-pointer text-xs py-2 px-4"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
