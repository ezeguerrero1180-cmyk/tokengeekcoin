import React from 'react';

export interface HeaderProps {
  onNavigate?: (view: 'home' | 'ofertas' | 'comparadores', hash?: string) => void;
  currentView?: 'home' | 'ofertas' | 'comparadores';
}

export function MobileMenu({ onNavigate, currentView }: HeaderProps) {
  const handleLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    view: 'home' | 'ofertas' | 'comparadores',
    hash?: string
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(view, hash);
      // Close details
      const details = (e.currentTarget.closest('details') as HTMLDetailsElement);
      if (details) details.open = false;
    }
  };

  return (
    <details className="mobile-menu">
      <summary aria-label="Abrir menú de navegación">
        <span>Menú</span>
        <b aria-hidden="true">☰</b>
      </summary>
      <div>
        <a
          href="/#noticias"
          onClick={(e) => handleLink(e, 'home', '#noticias')}
          className={currentView === 'home' ? 'active' : ''}
        >
          Noticias
        </a>
        <a
          className={`hot ${currentView === 'ofertas' ? 'active' : ''}`}
          href="/ofertas"
          onClick={(e) => handleLink(e, 'ofertas')}
        >
          Ofertas Geek
        </a>
        <a
          href="/comparadores"
          className={currentView === 'comparadores' ? 'active' : ''}
          onClick={(e) => handleLink(e, 'comparadores')}
        >
          Comparadores
        </a>
        <a
          href="/#sobre-mi"
          onClick={(e) => handleLink(e, 'home', '#sobre-mi')}
        >
          Sobre mí
        </a>
      </div>
    </details>
  );
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView = 'home' }) => {
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
    <header className="classic-header" id="inicio">
      <a
        className="classic-brand cursor-pointer"
        href="/"
        onClick={(e) => handleLink(e, 'home', '#inicio')}
        aria-label="TokenGeekCoin inicio"
      >
        <span className="classic-brand-mark">T.</span>
        <span>
          TOKEN
          <br />
          GEEK
          <br />
          COIN
          <small>.COM</small>
        </span>
      </a>
      <nav aria-label="Navegación principal">
        <a
          href="/#noticias"
          onClick={(e) => handleLink(e, 'home', '#noticias')}
          style={{
            color: currentView === 'home' ? 'var(--mg-acid, #d9ff3f)' : undefined,
          }}
        >
          Noticias
        </a>
        <a
          className="hot"
          href="/ofertas"
          onClick={(e) => handleLink(e, 'ofertas')}
          style={{
            color: currentView === 'ofertas' ? 'var(--mg-acid, #d9ff3f)' : undefined,
            fontWeight: 900,
          }}
        >
          Ofertas Geek
        </a>
        <a
          href="/comparadores"
          onClick={(e) => handleLink(e, 'comparadores')}
          style={{
            color: currentView === 'comparadores' ? 'var(--mg-acid, #d9ff3f)' : undefined,
            fontWeight: 900,
          }}
        >
          Comparadores
        </a>
        <a
          href="/#sobre-mi"
          onClick={(e) => handleLink(e, 'home', '#sobre-mi')}
        >
          Sobre mí
        </a>
      </nav>
      <MobileMenu onNavigate={onNavigate} currentView={currentView} />
    </header>
  );
};
