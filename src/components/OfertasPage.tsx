import React, { useState } from 'react';
import { OFFERS_DATA, OfferItem, AMAZON_REFERRAL_TAG } from '../data/offersData';
import { AdSenseUnit } from './AdSenseUnit';

interface OfertasPageProps {
  onBackToHome?: () => void;
}

export const OfertasPage: React.FC<OfertasPageProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODO');

  const categories = ['TODO', 'HARDWARE', 'GAMING', 'FINANZAS', 'PERIFÉRICOS'];

  const filteredOffers: OfferItem[] =
    selectedCategory === 'TODO'
      ? OFFERS_DATA
      : OFFERS_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="page territory-page">
      {/* Intro Header estilo Magazine Geek */}
      <section className="page-intro offer-intro">
        <p className="eyebrow">SELECCIÓN EDITORIAL · PRECIOS Y HARDWARE RECOMENDADO</p>
        <h1>
          Ofertas <em>Geek.</em>
        </h1>
        <p>
          Selección periódica de componentes, consolas, pantallas y herramientas de custodia digital
          con la mejor relación rendimiento/precio, disponibles con envío internacional y puerta a
          puerta garantizado.
        </p>
        <div className="amazon-associate">
          <strong>Aviso de Afiliación Transparente:</strong> Como parte del Programa de Afiliados de
          Amazon, TokenGeekCoin genera ingresos por compras adscritas que cumplen los requisitos
          aplicables a través del identificador <code>{AMAZON_REFERRAL_TAG}</code>. Esto financia
          nuestro contenido de forma 100% independiente sin ningún sobrecosto para ti.
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        {/* Banner destacado de envío a Argentina / Internacional */}
        <aside className="amazon-shipping-note" aria-label="Información de envíos">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '2rem', lineHeight: 1 }}>📦</span>
            <div>
              <strong style={{ display: 'block', fontSize: '1.05rem', marginBottom: '6px', color: 'var(--mg-acid, #d9ff3f)' }}>
                Guía de Envíos Internacionales y a Argentina
              </strong>
              <p style={{ margin: 0, fontSize: '0.92rem', opacity: 0.95, lineHeight: 1.6 }}>
                Muchos de estos artículos cuentan con la tarifa plana o envío internacional oficial de
                Amazon. El sistema calcula en tiempo real los costos de importación y flete al
                momento del <em>checkout</em>, con entrega directa en tu domicilio (puerta a puerta)
                por couriers privados (DHL/FedEx/UPS), sin trámites de aduana engorrosos ni cobros
                imprevistos a la llegada.
              </p>
            </div>
          </div>
        </aside>

        {/* Espacio publicitario AdSense */}
        <AdSenseUnit label="PUBLICIDAD — OFERTAS PATROCINADAS" className="my-8" />

        {/* Barra de Filtros */}
        <div className="filter-row" style={{ marginTop: '36px', marginBottom: '32px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="tag cursor-pointer"
              style={{
                background: selectedCategory === cat ? 'var(--mg-acid, #d9ff3f)' : 'var(--mg-white, #fff)',
                color: 'var(--mg-ink, #0c0a12)',
                border: '3px solid var(--mg-ink, #0c0a12)',
                padding: '10px 18px',
                fontWeight: 900,
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
                boxShadow: selectedCategory === cat ? '4px 4px 0 var(--mg-orange, #ff6645)' : 'none',
                transform: selectedCategory === cat ? 'translate(-2px, -2px)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla de Ofertas */}
        <div
          className="offer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredOffers.map((item) => (
            <article className="offer-card" key={item.id} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <div className="product-icon" style={{ fontSize: '1.2rem', padding: '12px' }}>
                  {item.icon}
                </div>
                <span className="tag" style={{ margin: 0 }}>
                  {item.tag}
                </span>
              </div>

              <h2 style={{ fontSize: '1.7rem', lineHeight: 1.05, margin: '0 0 12px', fontWeight: 900 }}>
                {item.name}
              </h2>

              <p style={{ fontSize: '0.94rem', lineHeight: 1.55, margin: '0 0 16px', color: '#444' }}>
                {item.copy}
              </p>

              <div style={{ margin: 'auto 0 16px', paddingTop: '12px', borderTop: '1px dashed #ccc' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#666', display: 'block', marginBottom: '8px' }}>
                  Aspectos Clave:
                </span>
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.82rem', lineHeight: 1.5, color: '#333' }}>
                  {item.specs.map((spec, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>{spec}</li>
                  ))}
                </ul>
              </div>

              {item.shippingNote && (
                <div style={{ fontSize: '0.72rem', color: '#555', background: '#f5f3ec', padding: '6px 10px', borderLeft: '4px solid var(--mg-orange, #ff6645)', marginBottom: '16px' }}>
                  ✓ {item.shippingNote}
                </div>
              )}

              <a
                className="amazon-offer-link cursor-pointer"
                href={item.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver oferta en Amazon ↗
              </a>
            </article>
          ))}
        </div>

        {/* Sección de Confianza / Metodología de Selección */}
        <section className="trust" style={{ marginTop: '70px' }}>
          <p className="eyebrow" style={{ color: 'var(--mg-acid, #d9ff3f)' }}>TRANSPARENCIA Y CRITERIO</p>
          <h2 style={{ margin: '8px 0 24px' }}>CÓMO ELEGIMOS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '28px' }}>
            <div>
              <strong style={{ display: 'block', color: 'var(--mg-acid, #d9ff3f)', fontSize: '1.2rem', marginBottom: '8px' }}>
                01. Rigor Técnico
              </strong>
              <p>
                No publicamos promociones vacías. Cada producto recomendado cuenta con benchmarks
                independientes, control de temperaturas y durabilidad probada en la vida real.
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--mg-acid, #d9ff3f)', fontSize: '1.2rem', marginBottom: '8px' }}>
                02. Envíos Internacionales
              </strong>
              <p>
                Priorizamos productos que cuentan con el servicio oficial de envíos puerta a puerta
                hacia Argentina y América Latina, con impuestos calculados en el checkout.
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', color: 'var(--mg-acid, #d9ff3f)', fontSize: '1.2rem', marginBottom: '8px' }}>
                03. Código de Afiliado {AMAZON_REFERRAL_TAG}
              </strong>
              <p>
                El precio que pagas en Amazon es exactamente el mismo que si ingresas directamente.
                Amazon nos retribuye un porcentaje mínimo que permite sostener esta redacción libre.
              </p>
            </div>
          </div>
        </section>

        {/* Espacio publicitario inferior AdSense */}
        <AdSenseUnit label="PUBLICIDAD RECOMENDADA" className="my-10" />

        {onBackToHome && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={onBackToHome}
              className="classic-button cursor-pointer"
              style={{ padding: '16px 28px', fontSize: '0.82rem' }}
            >
              ← Volver a la portada de TokenGeekCoin
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
