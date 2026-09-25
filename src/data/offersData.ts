export interface OfferItem {
  id: string;
  name: string;
  category: 'TODO' | 'HARDWARE' | 'GAMING' | 'FINANZAS' | 'PERIFÉRICOS';
  tag: string;
  icon: string;
  copy: string;
  specs: string[];
  amazonUrl: string;
  shippingNote?: string;
}

export const AMAZON_REFERRAL_TAG = 'eztec3-20';

export const OFFERS_DATA: OfferItem[] = [
  {
    id: 'gigabyte-b650-eagle-ax',
    name: 'GIGABYTE B650 Eagle AX (Socket AM5)',
    category: 'HARDWARE',
    tag: 'RECOMENDADO AM5',
    icon: 'MBD',
    copy: 'La placa base de referencia para armar PC con Ryzen 7000 y 9000 sin pagar de más. VRM de 12+2+2 fases digitales, PCIe 5.0 M.2, Wi-Fi 6E integrado, disipadores térmicos de gran masa y BIOS Flashback.',
    specs: ['Socket AMD AM5 / DDR5', 'Triple M.2 (1x PCIe 5.0 x4)', 'Wi-Fi 6E + Realtek 2.5GbE LAN', 'Soporta Ryzen 7000/8000/9000'],
    amazonUrl: `https://www.amazon.com/dp/B0CSK7WLZB?tag=${AMAZON_REFERRAL_TAG}`,
    shippingNote: 'Envío internacional elegible a Argentina puerta a puerta',
  },
  {
    id: 'playstation-5-slim',
    name: 'PlayStation 5 Slim Standard Edition (1TB SSD)',
    category: 'GAMING',
    tag: 'CONSOLA TOP',
    icon: 'PS5',
    copy: 'El nuevo chasis Slim un 30% más compacto con lector de discos Ultra HD Blu-ray, almacenamiento ampliado a 1TB SSD ultra rápido y audio 3D Tempest. Compatible con los mayores exclusivos de la generación.',
    specs: ['1TB Almacenamiento SSD Custom', 'Lector de discos 4K UHD Blu-ray', 'DualSense con feedback háptico', 'Trazado de rayos y hasta 120 FPS'],
    amazonUrl: `https://www.amazon.com/s?k=PlayStation+5+Slim+Console&tag=${AMAZON_REFERRAL_TAG}`,
    shippingNote: 'Envío internacional con cálculo de impuestos anticipado',
  },
  {
    id: 'xbox-series-x',
    name: 'Xbox Series X 1TB Console',
    category: 'GAMING',
    tag: 'MÁXIMA POTENCIA',
    icon: 'XBX',
    copy: 'La consola más potente del mercado: 12 teraflops de procesamiento gráfico con arquitectura RDNA 2, Quick Resume para saltar entre partidas al instante y compatibilidad total con Xbox Game Pass Ultimate.',
    specs: ['12 Teraflops GPU AMD RDNA 2', '1TB NVMe SSD de alta velocidad', 'Quick Resume & Smart Delivery', '4K real hasta 120 FPS'],
    amazonUrl: `https://www.amazon.com/s?k=Xbox+Series+X+Console&tag=${AMAZON_REFERRAL_TAG}`,
    shippingNote: 'Tarifa plana de envío elegible en Amazon',
  },
  {
    id: 'samsung-990-pro-2tb',
    name: 'Samsung 990 PRO 2TB NVMe PCIe 4.0 M.2 SSD',
    category: 'HARDWARE',
    tag: 'VELOCIDAD PRO',
    icon: 'SSD',
    copy: 'El NVMe PCIe 4.0 definitivo para entusiastas, creadores y consolas PS5. Velocidades de lectura secuencial de hasta 7.450 MB/s y escritura de 6.900 MB/s con controlador térmico optimizado.',
    specs: ['Hasta 7.450 MB/s lectura secuencial', 'Controlador Samsung Pascal in-house', 'Compatible 100% con PS5 y PC', 'Garantía 5 años / 1200 TBW'],
    amazonUrl: `https://www.amazon.com/s?k=Samsung+990+PRO+2TB+PCIe+4.0&tag=${AMAZON_REFERRAL_TAG}`,
    shippingNote: 'Envío puerta a puerta sin aranceles de sorpresa',
  },
  {
    id: 'corsair-rm750e-gold',
    name: 'Corsair RM750e 750W 80+ Gold Modular (ATX 3.0)',
    category: 'HARDWARE',
    tag: 'CALIDAD Y EFICIENCIA',
    icon: 'PSU',
    copy: 'Fuente de poder 100% modular certificada ATX 3.0 y PCIe 5.0. Incluye cable nativo 12VHPWR para tarjetas gráficas de última generación, condensadores japoneses a 105°C y modo Zero RPM ultra silencioso.',
    specs: ['Certificación 80 PLUS Gold', 'Preparada para ATX 3.0 y PCIe 5.0 (12VHPWR)', 'Cables modulares planos negros', 'Ventilador con rodamiento rifle 120mm'],
    amazonUrl: `https://www.amazon.com/s?k=Corsair+RM750e+Power+Supply&tag=${AMAZON_REFERRAL_TAG}`,
    shippingNote: 'Envío internacional directo a domicilio',
  },
  {
    id: 'corsair-vengeance-ddr5-32gb',
    name: 'Corsair Vengeance DDR5 32GB (2x16GB) 6000MHz CL30',
    category: 'HARDWARE',
    tag: 'SWEET SPOT AM5/INTEL',
    icon: 'RAM',
    copy: 'La frecuencia y latencia recomendadas por los especialistas para exprimir al máximo el controlador de memoria de AMD Ryzen 7000/9000 e Intel Core. Perfiles AMD EXPO e Intel XMP 3.0 integrados.',
    specs: ['Velocidad 6000 MT/s (CL30-36-36-76)', 'Kit dual channel 32 GB (2x16GB)', 'Disipador de aluminio compacto (low-profile)', 'Compatible con EXPO y XMP 3.0'],
    amazonUrl: `https://www.amazon.com/s?k=Corsair+Vengeance+DDR5+32GB+6000MHz+CL30&tag=${AMAZON_REFERRAL_TAG}`,
    shippingNote: 'Empaque seguro y envío rápido',
  },
  {
    id: 'asus-tuf-gaming-monitor',
    name: 'ASUS TUF Gaming 27" 180Hz / 1ms Fast IPS (QHD 1440p)',
    category: 'GAMING',
    tag: 'MEJOR MONITOR 1440p',
    icon: 'MON',
    copy: 'Equilibrio perfecto para gaming competitivo y disfrute visual inmersivo: resolución 2560x1440 en panel Fast IPS con 180Hz de refresco nativo, 1ms GtG, compatibilidad G-Sync y tecnología ELMB Sync antimasking.',
    specs: ['Panel 27" Fast IPS QHD (2560x1440)', 'Tasa de refresco 180Hz / 1ms GtG', 'FreeSync Premium & G-Sync compatible', 'Gama de color 130% sRGB y HDR10'],
    amazonUrl: `https://www.amazon.com/s?k=ASUS+TUF+Gaming+Monitor+27+180Hz+1440p&tag=${AMAZON_REFERRAL_TAG}`,
    shippingNote: 'Cálculo de impuestos de importación al checkout',
  },
  {
    id: 'trezor-safe-3',
    name: 'Trezor Safe 3 — Hardware Wallet Bitcoin & Crypto',
    category: 'FINANZAS',
    tag: 'SEGURIDAD BITCOIN',
    icon: 'BTC',
    copy: 'Billetera física de última generación con elemento de seguridad Secure Element (EAL6+) y código de fuente abierta. Protege tus satoshis y criptoactivos contra malware, phishing y robos remotos.',
    specs: ['Chip de seguridad Secure Element EAL6+', 'Pantalla OLED brillante monocromática', 'Autenticación de dos factores (U2F/FIDO2)', 'Código 100% auditable y transparente'],
    amazonUrl: `https://www.amazon.com/s?k=Trezor+Safe+3+Hardware+Wallet&tag=${AMAZON_REFERRAL_TAG}`,
    shippingNote: 'Envío puerta a puerta con precinto de seguridad sellado',
  },
  {
    id: 'logitech-g-pro-x-superlight-2',
    name: 'Logitech G PRO X Superlight 2 Wireless Gaming Mouse',
    category: 'PERIFÉRICOS',
    tag: 'NIVEL COMPETITIVO',
    icon: 'MSE',
    copy: 'El ratón utilizado por la élite de los deportes electrónicos. Con solo 60 gramos de peso, switches híbridos óptico-mecánicos LIGHTFORCE, sensor HERO 2 de 32.000 DPI y conectividad inalámbrica LIGHTSPEED de 4KHz.',
    specs: ['Peso ultra ligero de 60 gramos', 'Sensor HERO 2 de 32.000 DPI / 500+ IPS', 'Switches híbridos óptico-mecánicos', 'Hasta 95 horas de batería continua'],
    amazonUrl: `https://www.amazon.com/s?k=Logitech+G+PRO+X+Superlight+2&tag=${AMAZON_REFERRAL_TAG}`,
    shippingNote: 'Envío internacional directo de Amazon',
  },
];
