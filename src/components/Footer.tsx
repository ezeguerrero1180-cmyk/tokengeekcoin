import React from 'react';

interface FooterProps {
  onNavigate?: (view: 'home' | 'ofertas' | 'comparadores', hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    view: 'home' | 'ofertas' | 'comparadores',
    hash?: string
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(view, hash);
    }
  };

  return (
    <footer>
      <div
        className="brand inverse cursor-pointer"
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate('home', '#inicio');
          }
        }}
      >
        <b>T.</b>
        <span>TOKENGEEKCOIN</span>
      </div>
      <p>Medio independiente de Ezequiel Guerrero · Jujuy, Argentina · © 2026</p>
      <div>
        <a href="/#noticias" onClick={(e) => handleLink(e, 'home', '#noticias')}>
          Noticias
        </a>
        <a href="/ofertas" onClick={(e) => handleLink(e, 'ofertas')}>
          Ofertas Geek
        </a>
        <a href="/comparadores" onClick={(e) => handleLink(e, 'comparadores')}>
          Comparadores
        </a>
        <a href="/#mi-universo" onClick={(e) => handleLink(e, 'home', '#mi-universo')}>
          Mi Universo
        </a>
        <a href="/#sobre-mi" onClick={(e) => handleLink(e, 'home', '#sobre-mi')}>
          Sobre mí
        </a>
      </div>
    </footer>
  );
};
