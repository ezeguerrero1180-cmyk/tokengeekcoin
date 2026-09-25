import React, { useEffect, useRef } from 'react';

interface AdSenseUnitProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

export const AdSenseUnit: React.FC<AdSenseUnitProps> = ({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  style,
  label = 'PUBLICIDAD',
}) => {
  const adRef = useRef<HTMLModElement | null>(null);
  const pushedRef = useRef<boolean>(false);

  useEffect(() => {
    // Only push once per component mount
    if (pushedRef.current) return;

    try {
      if (typeof window !== 'undefined') {
        const adsbygoogle = (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle || [];
        adsbygoogle.push({});
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle = adsbygoogle;
        pushedRef.current = true;
      }
    } catch {
      // Ignore adsbygoogle errors (e.g. ad blockers or duplicate pushes)
    }
  }, []);

  return (
    <aside
      className={`adsense-container w-full max-w-5xl mx-auto my-6 p-3 bg-[#110e1a] border border-[#2b2540] rounded text-center overflow-hidden ${className}`}
      aria-label="Espacio publicitario"
    >
      {label && (
        <span className="block text-[10px] font-mono tracking-widest uppercase text-stone-400 mb-2 font-bold select-none">
          — {label} —
        </span>
      )}
      <div className="flex justify-center items-center min-h-[90px] w-full overflow-hidden">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: 'block',
            minHeight: '90px',
            width: '100%',
            ...style,
          }}
          data-ad-client="ca-pub-2403075217116144"
          {...(slot ? { 'data-ad-slot': slot } : {})}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </aside>
  );
};
