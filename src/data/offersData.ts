export const AMAZON_REFERRAL_TAG = 'tokengeekcoin-20';

export interface OfferItem {
  id: string;
  category: string;
  icon: string;
  tag: string;
  name: string;
  copy: string;
  specs: string[];
  shippingNote?: string;
  amazonUrl: string;
}

export const OFFERS_DATA: OfferItem[] = [
  {
    id: 'rtx-4070-super',
    category: 'HARDWARE',
    icon: '⚡',
    tag: 'GPU / GAMING',
    name: 'NVIDIA GeForce RTX 4070 Super 12GB',
    copy: 'La tarjeta gráfica con mejor balance entre precio, consumo y potencia bruta para 1440p y 4K con DLSS 3.5 en 2026.',
    specs: [
      '12GB GDDR6X con bus de 192-bit',
      'Arquitectura Ada Lovelace + DLSS 3.5 Frame Gen',
      'Consumo contenido de 220W TGP',
      'Salidas HDMI 2.1a y DisplayPort 1.4a',
    ],
    shippingNote: 'Tarifa plana de envío internacional disponible con cálculo de tasas prepagadas en Amazon.',
    amazonUrl: `https://www.amazon.com/dp/B0CS6XMSHZ?tag=${AMAZON_REFERRAL_TAG}`,
  },
  {
    id: 'ryzen-7-7800x3d',
    category: 'HARDWARE',
    icon: '🧠',
    tag: 'PROCESADOR TOP',
    name: 'AMD Ryzen 7 7800X3D',
    copy: 'El procesador indiscutido para gaming puro gracias a sus 96MB de 3D V-Cache masiva y bajísimo consumo energético.',
    specs: [
      '8 núcleos / 16 hilos a 5.0 GHz Max Boost',
      '96MB de L3 V-Cache ultra-rápida',
      'Plataforma AM5 con PCIe 5.0 y DDR5',
      'TDP contenido de 120W (fácil de refrigerar)',
    ],
    shippingNote: 'Envío puerta a puerta por couriers oficiales de Amazon sin sorpresas aduaneras.',
    amazonUrl: `https://www.amazon.com/dp/B0BTZB7F88?tag=${AMAZON_REFERRAL_TAG}`,
  },
  {
    id: 'steam-deck-oled',
    category: 'GAMING',
    icon: '🎮',
    tag: 'CONSOLA PORTÁTIL',
    name: 'Valve Steam Deck OLED 512GB',
    copy: 'Pantalla OLED HDR de 90Hz deslumbrante, batería optimizada y acceso total a tu biblioteca de Steam sin bloqueos.',
    specs: [
      'Pantalla OLED HDR 7.4" a 90Hz',
      'APU Zen 2 de 6nm + RDNA 2 de 16GB LPDDR5',
      'Batería extendida de 50Wh (3-12 horas)',
      'Wi-Fi 6E de baja latencia',
    ],
    shippingNote: 'Caja original sellada con embalaje protector internacional.',
    amazonUrl: `https://www.amazon.com/dp/B0CN71XW77?tag=${AMAZON_REFERRAL_TAG}`,
  },
  {
    id: 'ledger-nano-x',
    category: 'FINANZAS',
    icon: '🔐',
    tag: 'HARDWARE WALLET',
    name: 'Ledger Nano X Hardware Wallet',
    copy: 'Custodia fría para Bitcoin, Ethereum y miles de tokens. Bluetooth integrado con chip Secure Element CC EAL5+.',
    specs: [
      'Chip de seguridad certificado CC EAL5+',
      'Conexión Bluetooth con iOS y Android',
      'Capacidad para hasta 100 aplicaciones simultáneas',
      'Respaldo de clave semilla BIP39 de 24 palabras',
    ],
    shippingNote: 'Embalaje anti-manipulación oficial verificado por el fabricante.',
    amazonUrl: `https://www.amazon.com/dp/B07M61KDMW?tag=${AMAZON_REFERRAL_TAG}`,
  },
  {
    id: 'logitech-g-pro-x-superlight-2',
    category: 'PERIFÉRICOS',
    icon: '🖱️',
    tag: 'MOUSE ESPORTS',
    name: 'Logitech G PRO X SUPERLIGHT 2',
    copy: 'Switches híbridos óptico-mecánicos LIGHTFORCE y sensor HERO 2 de 32.000 DPI con solo 60 gramos de peso.',
    specs: [
      'Sensor HERO 2 de hasta 32.000 DPI y 500+ IPS',
      'Tasa de sondeo inalámbrica de 4000Hz (0.25ms)',
      'Batería de 95 horas continuas con USB-C',
      'Peso pluma de apenas 60 gramos',
    ],
    shippingNote: 'Envío internacional elegible para tarifa reducida de Amazon.',
    amazonUrl: `https://www.amazon.com/dp/B07NY3D8KK?tag=${AMAZON_REFERRAL_TAG}`,
  },
  {
    id: 'trezor-safe-3',
    category: 'FINANZAS',
    icon: '🛡️',
    tag: 'CUSTODIA BITCOIN',
    name: 'Trezor Safe 3 Hardware Wallet',
    copy: 'La nueva generación de Trezor con chip Secure Element EAL6+ y diseño transparente de código abierto para máxima confianza.',
    specs: [
      'Chip Secure Element EAL6+ de nivel bancario',
      'Pantalla OLED monocromática de dos botones',
      'Firmware 100% de código abierto verificado',
      'Soporte nativo para Bitcoin, ETH y miles de redes',
    ],
    shippingNote: 'Sello holográfico inviolable garantizado de fábrica.',
    amazonUrl: `https://www.amazon.com/dp/B0CL5N5B7K?tag=${AMAZON_REFERRAL_TAG}`,
  },
];
