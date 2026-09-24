import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="brand inverse">
        <b>T.</b>
        <span>TOKENGEEKCOIN</span>
      </div>
      <p>Medio independiente de Ezequiel Guerrero · Jujuy, Argentina · © 2026</p>
      <div>
        <a href="#noticias">Noticias</a>
        <a href="#territorios">Territorios</a>
        <a href="#portales">Portales</a>
        <a href="#sobre-mi">Sobre mí</a>
      </div>
    </footer>
  );
};
