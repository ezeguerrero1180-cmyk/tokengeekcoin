import React from 'react';
import { COMPARISONS_DATA, AMAZON_REFERRAL_TAG } from '../data/comparisonsData';

interface ComparadoresPageProps {
  onBackToHome?: () => void;
}

export const ComparadoresPage: React.FC<ComparadoresPageProps> = ({ onBackToHome }) => {
  return (
    <div
      className="page territory-page"
      style={{
        background: '#09070e',
        color: '#fffdf8',
        minHeight: '100vh',
      }}
    >
      {/* Intro Header */}
      <section
        className="page-intro"
        style={{
          background: 'linear-gradient(110deg, #0f0a1c 0%, #1a102f 72%, #261347 100%)',
          borderBottom: '8px solid var(--mg-orange, #ff6645)',
          color: '#ffffff',
        }}
      >
        <p className="eyebrow" style={{ color: 'var(--mg-acid, #d9ff3f)' }}>
          ANÁLISIS TÉCNICOS CARA A CARA · VEREDICTOS HONESTOS
        </p>
        <h1 style={{ color: '#ffffff' }}>
          Comparadores <em style={{ color: 'var(--mg-acid, #d9ff3f)' }}>Geek.</em>
        </h1>
        <p style={{ color: '#d8d2e8', fontSize: '1.08rem', maxWidth: '850px', lineHeight: 1.65 }}>
          Enfrentamos de manera directa hardware, consolas de videojuegos y soluciones de seguridad
          financiera. Sin rodeos ni patrocinios sesgados: especificaciones reales, pruebas de rendimiento
          y enlaces con envío internacional puerta a puerta.
        </p>
        <div
          className="amazon-associate"
          style={{
            background: '#150f24',
            border: '2px solid var(--mg-acid, #d9ff3f)',
            color: '#fffdf8',
            maxWidth: '820px',
            marginTop: '20px',
            padding: '14px 18px',
          }}
        >
          <strong style={{ color: 'var(--mg-acid, #d9ff3f)' }}>
            Aviso de Transparencia de Afiliados:
          </strong>{' '}
          Los botones de compra contienen el tag de referido <code>{AMAZON_REFERRAL_TAG}</code>.
          Comprar a través de estos enlaces apoya nuestro trabajo editorial independiente sin ningún
          costo extra para ti.
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        {/* Banner de Envíos */}
        <aside
          className="amazon-shipping-note"
          aria-label="Información de envíos"
          style={{
            background: '#130d22',
            borderLeft: '8px solid var(--mg-orange, #ff6645)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
            color: '#f0ecf8',
            padding: '24px 28px',
            margin: '40px auto 30px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '2.2rem', lineHeight: 1 }}>✈️</span>
            <div>
              <strong
                style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  marginBottom: '6px',
                  color: 'var(--mg-acid, #d9ff3f)',
                  letterSpacing: '0.04em',
                }}
              >
                Envíos Puerta a Puerta con Amazon Global y Tarifa Plana
              </strong>
              <p style={{ margin: 0, fontSize: '0.94rem', color: '#ded7ec', lineHeight: 1.65 }}>
                Todos los productos comparados se pueden ordenar con envío directo a domicilio
                hacia Argentina y el resto de la región mediante Amazon Global. Los impuestos y tasas
                aduaneras se liquidan automáticamente al pagar (checkout), evitando trámites en la
                aduana local ni cobros sorpresa al recibirlo.
              </p>
            </div>
          </div>
        </aside>

        {/* Lista de Comparadores con Fondo Oscuro de Alto Contraste */}
        <div style={{ display: 'grid', gap: '64px', marginTop: '40px' }}>
          {COMPARISONS_DATA.map((comp) => (
            <section
              key={comp.id}
              className="comparison"
              id={comp.id}
              style={{
                background: '#110c1e',
                border: '3px solid #372856',
                boxShadow: '10px 10px 0 var(--mg-purple, #8c68ff)',
                color: '#ffffff',
                overflow: 'hidden',
              }}
            >
              {/* Encabezado de la comparación */}
              <div
                className="comparison-head"
                style={{
                  background: 'linear-gradient(105deg, #1f143a 0%, #2b1852 100%)',
                  borderBottom: '5px solid var(--mg-orange, #ff6645)',
                  padding: '32px',
                }}
              >
                <div>
                  <span
                    className="eyebrow"
                    style={{
                      background: 'var(--mg-orange, #ff6645)',
                      color: '#0c0a12',
                      display: 'inline-block',
                      marginBottom: '12px',
                      padding: '6px 12px',
                      fontWeight: 900,
                      fontSize: '0.72rem',
                    }}
                  >
                    {comp.category}
                  </span>
                  <h2
                    style={{
                      margin: '0 0 12px',
                      color: '#ffffff',
                      fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                      lineHeight: 1,
                      fontWeight: 900,
                      textTransform: 'uppercase',
                    }}
                  >
                    {comp.title}
                  </h2>
                  <p
                    style={{
                      margin: 0,
                      color: '#ded8ef',
                      maxWidth: '850px',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {comp.summary}
                  </p>
                </div>
              </div>

              {/* Tarjetas resumen de los dos contendientes (Fondo Negro / Dark) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '2px',
                  background: '#2b1e47',
                  borderBottom: '3px solid #2b1e47',
                }}
              >
                {/* Contendiente A */}
                <div style={{ padding: '26px', background: '#161026', color: '#ffffff' }}>
                  <span
                    className="tag"
                    style={{
                      background: 'var(--mg-acid, #d9ff3f)',
                      color: '#0c0a12',
                      display: 'inline-block',
                      marginBottom: '12px',
                      fontWeight: 900,
                      padding: '6px 10px',
                      border: '2px solid #0c0a12',
                    }}
                  >
                    {comp.productA.badge}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      margin: '0 0 14px',
                      fontWeight: 900,
                      color: '#ffffff',
                    }}
                  >
                    {comp.productA.name}
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '20px',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: '#d6d0e8',
                    }}
                  >
                    {comp.productA.keyPoints.map((pt, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contendiente B */}
                <div style={{ padding: '26px', background: '#161026', color: '#ffffff' }}>
                  <span
                    className="tag"
                    style={{
                      background: 'var(--mg-orange, #ff6645)',
                      color: '#ffffff',
                      display: 'inline-block',
                      marginBottom: '12px',
                      fontWeight: 900,
                      padding: '6px 10px',
                      border: '2px solid #0c0a12',
                    }}
                  >
                    {comp.productB.badge}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      margin: '0 0 14px',
                      fontWeight: 900,
                      color: '#ffffff',
                    }}
                  >
                    {comp.productB.name}
                  </h3>
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: '20px',
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: '#d6d0e8',
                    }}
                  >
                    {comp.productB.keyPoints.map((pt, i) => (
                      <li key={i} style={{ marginBottom: '6px' }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cabecera de la tabla */}
              <div
                className="compare-row head"
                style={{
                  background: 'var(--mg-acid, #d9ff3f)',
                  color: '#0c0a12',
                  display: 'grid',
                  gridTemplateColumns: '0.8fr 1fr 1fr',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontSize: '0.78rem',
                  borderBottom: '3px solid #0c0a12',
                }}
              >
                <div style={{ padding: '16px 20px', borderRight: '2px solid #0c0a12', color: '#0c0a12' }}>
                  Criterio Técnico
                </div>
                <div style={{ padding: '16px 20px', borderRight: '2px solid #0c0a12', color: '#0c0a12' }}>
                  {comp.productA.name}
                </div>
                <div style={{ padding: '16px 20px', color: '#0c0a12' }}>
                  {comp.productB.name}
                </div>
              </div>

              {/* Filas de la tabla (Fondo Oscuro y Letras Claras Visibles) */}
              {comp.criteria.map((crit, idx) => (
                <div
                  className="compare-row"
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '0.8fr 1fr 1fr',
                    background: idx % 2 === 0 ? '#110c1e' : '#171128',
                    borderBottom: '1px solid #2b1e47',
                    color: '#ffffff',
                  }}
                >
                  {/* Nombre del criterio */}
                  <div
                    style={{
                      padding: '16px 20px',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                      color: 'var(--mg-acid, #d9ff3f)',
                      borderRight: '1px solid #2b1e47',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {crit.name}
                  </div>

                  {/* Valor A */}
                  <div
                    style={{
                      padding: '16px 20px',
                      fontSize: '0.88rem',
                      lineHeight: 1.5,
                      color: '#f0ecf8',
                      borderRight: '1px solid #2b1e47',
                      background: crit.winner === 'a' ? '#182718' : 'transparent',
                    }}
                  >
                    <span>{crit.a}</span>
                    {crit.winner === 'a' && (
                      <span
                        style={{
                          display: 'inline-block',
                          marginLeft: '8px',
                          color: '#d9ff3f',
                          background: '#1d3d12',
                          border: '1px solid #4a8026',
                          fontSize: '0.68rem',
                          fontWeight: 900,
                          padding: '2px 7px',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        ✓ VENTAJOSA
                      </span>
                    )}
                  </div>

                  {/* Valor B */}
                  <div
                    style={{
                      padding: '16px 20px',
                      fontSize: '0.88rem',
                      lineHeight: 1.5,
                      color: '#f0ecf8',
                      background: crit.winner === 'b' ? '#182718' : 'transparent',
                    }}
                  >
                    <span>{crit.b}</span>
                    {crit.winner === 'b' && (
                      <span
                        style={{
                          display: 'inline-block',
                          marginLeft: '8px',
                          color: '#d9ff3f',
                          background: '#1d3d12',
                          border: '1px solid #4a8026',
                          fontSize: '0.68rem',
                          fontWeight: 900,
                          padding: '2px 7px',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase',
                        }}
                      >
                        ✓ VENTAJOSA
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Botones de acción directa a Amazon con tag de referido */}
              <div
                className="compare-actions"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '16px',
                  padding: '24px',
                  background: '#0d0818',
                  borderTop: '2px solid #2b1e47',
                }}
              >
                <a
                  className="amazon-offer-link cursor-pointer"
                  href={comp.productA.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    margin: 0,
                    background: '#0c0a12',
                    border: '3px solid var(--mg-acid, #d9ff3f)',
                    boxShadow: '5px 5px 0 var(--mg-acid, #d9ff3f)',
                    color: '#ffffff',
                    fontWeight: 900,
                    padding: '16px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  }}
                >
                  Ver {comp.productA.name} en Amazon ↗
                </a>
                <a
                  className="amazon-offer-link cursor-pointer"
                  href={comp.productB.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    margin: 0,
                    background: '#0c0a12',
                    border: '3px solid var(--mg-orange, #ff6645)',
                    boxShadow: '5px 5px 0 var(--mg-orange, #ff6645)',
                    color: '#ffffff',
                    fontWeight: 900,
                    padding: '16px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                  }}
                >
                  Ver {comp.productB.name} en Amazon ↗
                </a>
              </div>

              {/* Veredicto de compra (Fondo Negro / Oscuro) */}
              <div
                style={{
                  padding: '30px',
                  background: '#130e22',
                  borderTop: '3px solid #ff6645',
                  color: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '1.5rem' }}>⚖️</span>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: '1.35rem',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      color: 'var(--mg-acid, #d9ff3f)',
                    }}
                  >
                    {comp.verdict.title}
                  </h4>
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '20px',
                  }}
                >
                  <div
                    style={{
                      padding: '20px',
                      background: '#1a132c',
                      borderLeft: '4px solid var(--mg-purple, #8c68ff)',
                      borderTop: '1px solid #2f204d',
                    }}
                  >
                    <strong
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                        color: 'var(--mg-acid, #d9ff3f)',
                      }}
                    >
                      ¿Para quién es {comp.productA.name}?
                    </strong>
                    <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6, color: '#ded7ef' }}>
                      {comp.verdict.forA}
                    </p>
                  </div>
                  <div
                    style={{
                      padding: '20px',
                      background: '#1a132c',
                      borderLeft: '4px solid var(--mg-orange, #ff6645)',
                      borderTop: '1px solid #2f204d',
                    }}
                  >
                    <strong
                      style={{
                        display: 'block',
                        fontSize: '0.88rem',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                        color: 'var(--mg-orange, #ff6645)',
                      }}
                    >
                      ¿Para quién es {comp.productB.name}?
                    </strong>
                    <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6, color: '#ded7ef' }}>
                      {comp.verdict.forB}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    margin: '18px 0 0',
                    fontSize: '0.85rem',
                    color: '#bcb5d1',
                    fontStyle: 'italic',
                  }}
                >
                  💡 {comp.verdict.finalThoughts}
                </p>
              </div>
            </section>
          ))}
        </div>

        {onBackToHome && (
          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <button
              onClick={onBackToHome}
              className="classic-button cursor-pointer"
              style={{
                padding: '16px 32px',
                fontSize: '0.85rem',
                background: 'var(--mg-acid, #d9ff3f)',
                color: '#0c0a12',
                border: '2px solid #0c0a12',
                boxShadow: '5px 5px 0 var(--mg-orange, #ff6645)',
                fontWeight: 900,
              }}
            >
              ← Volver a la portada de TokenGeekCoin
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
