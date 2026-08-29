export default function AdSlot({ compact = false }: { compact?: boolean }) {
  return (
    <aside className={`ad-slot${compact ? " ad-slot-compact" : ""}`} aria-label="Espacio publicitario">
      <span>PUBLICIDAD</span>
      <div>
        <strong>Tu marca puede aparecer acá.</strong>
        <p>Gaming, tecnología, finanzas y cultura geek frente a una comunidad en crecimiento.</p>
      </div>
      <a href="mailto:hola@tokengeekcoin.com?subject=Publicidad%20en%20TokenGeekCoin">ANUNCIAR EN TOKENGEEKCOIN ↗</a>
    </aside>
  );
}

