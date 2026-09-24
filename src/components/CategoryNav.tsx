import React from 'react';
import { CategoryFilterType } from '../types/article';
import { Flame, Sparkles } from 'lucide-react';

interface CategoryNavProps {
  activeFilter: CategoryFilterType;
  onSelectFilter: (filter: CategoryFilterType) => void;
  todayCount: number;
}

const CATEGORIES: { id: CategoryFilterType; label: string; highlight?: boolean }[] = [
  { id: 'TODAS', label: 'Portada (Hoy Primero)' },
  { id: 'SOLO_HOY', label: 'Solo Noticias de Hoy', highlight: true },
  { id: 'GAMING', label: 'Gaming' },
  { id: 'TECNOLOGÍA + IA', label: 'Tecnología + IA' },
  { id: 'FINANZAS + CRIPTO', label: 'Finanzas + Cripto' },
  { id: 'CÓMICS + SERIES', label: 'Cómics + Series' },
];

export const CategoryNav: React.FC<CategoryNavProps> = ({
  activeFilter,
  onSelectFilter,
  todayCount,
}) => {
  return (
    <div className="border-b border-stone-200 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center gap-1 overflow-x-auto py-2.5 scrollbar-none" aria-label="Filtros de noticias">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => onSelectFilter(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-xs'
                    : cat.highlight
                    ? 'bg-amber-100 text-amber-950 hover:bg-amber-200 border border-amber-300'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/60'
                }`}
              >
                {cat.id === 'SOLO_HOY' && <Flame className={`w-3.5 h-3.5 ${isActive ? 'text-[#d8ff3e]' : 'text-amber-600'}`} />}
                {cat.id === 'TODAS' && <Sparkles className="w-3 h-3 text-[#d8ff3e]" />}
                <span>{cat.label}</span>
                {cat.id === 'SOLO_HOY' && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-sans font-bold ${
                    isActive ? 'bg-[#d8ff3e] text-stone-950' : 'bg-amber-300 text-stone-900'
                  }`}>
                    {todayCount}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
