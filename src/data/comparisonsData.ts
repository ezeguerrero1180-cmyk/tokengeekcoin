export const AMAZON_REFERRAL_TAG = 'eztec3-20';

export interface ComparisonCriterion {
  name: string;
  a: string;
  b: string;
  winner?: 'a' | 'b' | 'tie';
}

export interface ComparisonProduct {
  badge: string;
  name: string;
  keyPoints: string[];
  amazonUrl: string;
}

export interface ComparisonItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  productA: ComparisonProduct;
  productB: ComparisonProduct;
  criteria: ComparisonCriterion[];
  verdict: {
    title: string;
    forA: string;
    forB: string;
    finalThoughts: string;
  };
}

export const COMPARISONS_DATA: ComparisonItem[] = [
  {
    id: 'steam-deck-oled-vs-rog-ally-x',
    category: 'CONSOLAS PORTÁTILES',
    title: 'Steam Deck OLED vs. ASUS ROG Ally X',
    summary: 'La batalla definitiva por el trono del gaming portátil en 2026: ¿la optimización y pantalla perfecta de Valve o la fuerza bruta y batería colosal de ASUS con Windows 11?',
    productA: {
      badge: 'MEJOR EXPERIENCIA DE USO',
      name: 'Steam Deck OLED',
      keyPoints: [
        'Pantalla OLED HDR de 90Hz con negros infinitos',
        'SteamOS: suspensión instantánea y cero configuración molesta',
        'Ergonomía superior con trackpads hápticos dedicados',
        'Relación precio-calidad insuperable en la categoría',
      ],
      amazonUrl: `https://www.amazon.com/s?k=Valve+Steam+Deck+OLED&tag=${AMAZON_REFERRAL_TAG}`,
    },
    productB: {
      badge: 'MÁXIMA POTENCIA BRUTA',
      name: 'ASUS ROG Ally X',
      keyPoints: [
        'Batería gigante de 80Wh (el doble que la competencia)',
        '24GB de memoria RAM LPDDR5X a 7500 MT/s',
        'Compatibilidad nativa con Game Pass, Epic, EA y Ubisoft',
        'Panel 1080p a 120Hz con VRR (FreeSync Premium)',
      ],
      amazonUrl: `https://www.amazon.com/s?k=ASUS+ROG+Ally+X&tag=${AMAZON_REFERRAL_TAG}`,
    },
    criteria: [
      {
        name: 'Pantalla',
        a: '7.4" OLED HDR (1280x800) a 90Hz, 1000 nits pico',
        b: '7.0" IPS FHD (1920x1080) a 120Hz con VRR',
        winner: 'a',
      },
      {
        name: 'Autonomía de Batería',
        a: '50 Wh (~3 a 8 horas según carga gráfica)',
        b: '80 Wh (~4 a 10 horas, récord en PC portátiles)',
        winner: 'b',
      },
      {
        name: 'Memoria RAM',
        a: '16 GB LPDDR5 (6400 MT/s)',
        b: '24 GB LPDDR5X (7500 MT/s ultra-rápida)',
        winner: 'b',
      },
      {
        name: 'Sistema Operativo',
        a: 'SteamOS 3.5 (Linux optimizado para consolas)',
        b: 'Windows 11 Home (Mayor catálogo pero interfaz de escritorio)',
        winner: 'a',
      },
      {
        name: 'Controles Hápticos',
        a: 'Doble trackpad con retroalimentación háptica HD',
        b: 'Sin trackpads, joystick convencionales asimétricos',
        winner: 'a',
      },
    ],
    verdict: {
      title: 'Veredicto del Analista',
      forA: 'Ideal si buscas una experiencia auténtica de consola: enciendes y juegas de inmediato sin pelear con drivers de Windows ni actualizaciones lentas.',
      forB: 'Imprescindible si juegas títulos con anticheat estricto de Xbox Game Pass, Fortnite, EA Sports FC o exiges la mayor potencia gráfica disponible en la mano.',
      finalThoughts: 'Si tu biblioteca principal está en Steam, el Deck OLED ofrece la experiencia más redonda y placentera. Si quieres un mini PC gamer de viaje sin límites, el Ally X es la bestia a comprar.',
    },
  },
  {
    id: 'ledger-nano-x-vs-trezor-safe-3',
    category: 'SEGURIDAD & CRIPTO',
    title: 'Ledger Nano X vs. Trezor Safe 3',
    summary: 'Dos filosofías de seguridad digital frente a frente: ¿la portabilidad inalámbrica de Ledger con chip cerrado o la transparencia auditada de código abierto con Secure Element de Trezor?',
    productA: {
      badge: 'MOVILIDAD TOTAL',
      name: 'Ledger Nano X',
      keyPoints: [
        'Batería y Bluetooth integrados para operar desde el móvil',
        'App Ledger Live con staking, swapping y compra integrada',
        'Soporte para más de 5.500 monedas y tokens',
        'Diseño compacto y discreto en acero inoxidable',
      ],
      amazonUrl: `https://www.amazon.com/s?k=Ledger+Nano+X+Hardware+Wallet&tag=${AMAZON_REFERRAL_TAG}`,
    },
    productB: {
      badge: 'CÓDIGO ABIERTO PURISTA',
      name: 'Trezor Safe 3',
      keyPoints: [
        'Chip Secure Element EAL6+ con firmware Open Source',
        'Trezor Suite: interfaz de privacidad con CoinJoin nativo',
        'Fácil respaldo con estándar Shamir Backup (SLIP39)',
        'Sin baterías internas: mayor longevidad física',
      ],
      amazonUrl: `https://www.amazon.com/s?k=Trezor+Safe+3+Hardware+Wallet&tag=${AMAZON_REFERRAL_TAG}`,
    },
    criteria: [
      {
        name: 'Arquitectura de Código',
        a: 'Firmware propietario auditado con chip Secure Element CC EAL5+',
        b: 'Firmware 100% de código abierto verificado + chip Secure Element EAL6+',
        winner: 'b',
      },
      {
        name: 'Conectividad',
        a: 'Bluetooth inalámbrico + USB-C para iOS y Android',
        b: 'Solo cable USB-C (evita cualquier vector inalámbrico)',
        winner: 'a',
      },
      {
        name: 'Batería y Vida Útil',
        a: 'Batería de 100 mAh recargable (requiere mantenimiento periódico)',
        b: 'Sin batería, se alimenta directo por USB (dura décadas guardado)',
        winner: 'b',
      },
      {
        name: 'Privacidad Avanzada',
        a: 'Soporte estándar de nodos y red Tor vía Ledger Live',
        b: 'CoinJoin integrado para mezclar transacciones Bitcoin en Trezor Suite',
        winner: 'b',
      },
    ],
    verdict: {
      title: 'Veredicto de Custodia Fría',
      forA: 'Para usuarios que operan a diario en DeFi o necesitan autorizar transferencias desde el smartphone de viaje sin cables.',
      forB: 'Para puristas de Bitcoin y ahorro a largo plazo (HODL) que prefieren código transparente y dispositivos que puedan guardarse años en una caja fuerte sin degradarse.',
      finalThoughts: 'Ambos dispositivos ofrecen seguridad militar frente a hackeos de software. La elección depende de si valoras la comodidad del Bluetooth o la filosofía incondicional del software libre.',
    },
  },
];
