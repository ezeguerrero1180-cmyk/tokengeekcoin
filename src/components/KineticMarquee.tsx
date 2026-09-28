import React from 'react';

interface KineticMarqueeProps {
  onExploreOfertas?: () => void;
}

export const KineticMarquee: React.FC<KineticMarqueeProps> = ({ onExploreOfertas }) => {
  const items = [
    { text: 'TOKEN GEEK COIN', highlight: true, star: '✹' },
    { text: 'NOTICIAS DE HOY EN VIVO', highlight: false, star: '✦' },
    { text: 'GAMING & CONSOLAS', highlight: false, star: '★' },
    { text: 'INTELIGENCIA ARTIFICIAL & TECH', highlight: true, star: '✹' },
    { text: 'OFERTAS GEEK DEL DÍA', highlight: false, star: '✦' },
    { text: 'FINANZAS & CRIPTO SIN HUMO', highlight: true, star: '★' },
    { text: 'CÓMICS, SERIES & CULTURA POP', highlight: false, star: '✹' },
    { text: 'ANÁLISIS DIRECTOS Y SIN RELLENO', highlight: false, star: '✦' },
  ];

  return (
    <div
      className="tgc-marquee-wrap select-none cursor-default"
      aria-hidden="true"
    >
      <div className="tgc-marquee-track">
        {items.map((item, idx) => (
          <span key={`m1-${idx}`} className="tgc-marquee-item">
            <span className={item.highlight ? 'text-[var(--mg-acid)] font-black' : 'text-stone-100 font-bold'}>
              {item.text}
            </span>
            <span className="star">{item.star}</span>
          </span>
        ))}
      </div>
      <div className="tgc-marquee-track" aria-hidden="true">
        {items.map((item, idx) => (
          <span key={`m2-${idx}`} className="tgc-marquee-item">
            <span className={item.highlight ? 'text-[var(--mg-acid)] font-black' : 'text-stone-100 font-bold'}>
              {item.text}
            </span>
            <span className="star">{item.star}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
