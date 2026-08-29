const nexoReferralUrl = "https://nexo.com/ref/qzvezbtobs?src=android-link";

type NexoPromoProps = {
  placement: "home" | "article";
};

export default function NexoPromo({ placement }: NexoPromoProps) {
  return (
    <aside className={`nexo-promo nexo-promo-${placement}`} aria-label="Enlace de referido de Nexo">
      <div className="nexo-promo-copy">
        <p className="kicker">// ESPACIO DESTACADO · ENLACE DE REFERIDO</p>
        <span className="nexo-promo-rank">PLATAFORMA N.º 1 DE TOKENGEEKCOIN</span>
        <h2>Entrá al mundo cripto con <i>Nexo.</i></h2>
        <p>Accedé a Nexo desde el enlace de TokenGeekCoin o escaneá el código QR con tu celular.</p>
        <a href={nexoReferralUrl} target="_blank" rel="sponsored nofollow noreferrer">
          IR A NEXO <span aria-hidden="true">↗</span>
        </a>
        <small>Enlace de referido: TokenGeekCoin puede recibir un beneficio si te registrás. Los criptoactivos implican riesgos; revisá condiciones, disponibilidad local y costos antes de operar.</small>
      </div>
      <a className="nexo-promo-qr" href={nexoReferralUrl} target="_blank" rel="sponsored nofollow noreferrer" aria-label="Abrir Nexo mediante el enlace de referido">
        <img src="/partners/nexo-referral-qr.jpeg" alt="Código QR del enlace de referido de Nexo de TokenGeekCoin" width="586" height="548" loading="lazy" />
        <span>NEXO.COM/REF ↗</span>
      </a>
    </aside>
  );
}

