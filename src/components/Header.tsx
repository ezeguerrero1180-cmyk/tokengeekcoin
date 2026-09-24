import React from 'react';

export function MobileMenu() {
  return (
    <details className="mobile-menu">
      <summary aria-label="Abrir menú de navegación">
        <span>Menú</span>
        <b aria-hidden="true">☰</b>
      </summary>
      <div>
        <a href="#noticias">Noticias</a>
        <a className="hot" href="#territorios">Ofertas Geek</a>
        <a href="#portales">Comparadores</a>
        <a href="#sobre-mi">Sobre mí</a>
      </div>
    </details>
  );
}

export const Header: React.FC = () => {
  return (
    <header className="classic-header" id="inicio">
      <a className="classic-brand" href="#inicio" aria-label="TokenGeekCoin inicio">
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
        <a href="#noticias">Noticias</a>
        <a className="hot" href="#territorios">Ofertas Geek</a>
        <a href="#portales">Comparadores</a>
        <a href="#sobre-mi">Sobre mí</a>
      </nav>
      <MobileMenu />
    </header>
  );
};
