import { AMAZON_REFERRAL_TAG } from './offersData';
export { AMAZON_REFERRAL_TAG };

export interface ComparisonCriterion {
  name: string;
  a: string;
  b: string;
  winner?: 'a' | 'b' | 'tie';
}

export interface ComparisonItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  productA: {
    name: string;
    label: string;
    amazonUrl: string;
    badge: string;
    keyPoints: string[];
  };
  productB: {
    name: string;
    label: string;
    amazonUrl: string;
    badge: string;
    keyPoints: string[];
  };
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
    id: 'ps5-vs-xbox-series-x',
    category: 'GAMING · CONSOLAS DE ACTUAL GENERACIÓN',
    title: 'PlayStation 5 Slim vs Xbox Series X',
    summary: 'La batalla definitiva entre los dos gigantes del salón. Ambas consolas ofrecen arquitectura AMD RDNA 2 y unidades SSD ultrarrápidas, pero sus filosofías de catálogo, servicios de suscripción y tecnologías exclusivas difieren drásticamente.',
    productA: {
      name: 'PlayStation 5 Slim (1TB)',
      label: 'Opción Sony',
      amazonUrl: `https://www.amazon.com/s?k=PlayStation+5+Slim+Console&tag=${AMAZON_REFERRAL_TAG}`,
      badge: 'LÍDER EN EXCLUSIVOS',
      keyPoints: [
        'Mando DualSense con gatillos adaptativos y respuesta háptica superior',
        'Exclusivos aclamados: Spider-Man 2, God of War Ragnarök, Demon’s Souls, Final Fantasy',
        'Lector Blu-ray modular desmontable en chasis Slim',
      ],
    },
    productB: {
      name: 'Xbox Series X (1TB)',
      label: 'Opción Microsoft',
      amazonUrl: `https://www.amazon.com/s?k=Xbox+Series+X+Console&tag=${AMAZON_REFERRAL_TAG}`,
      badge: 'MÁXIMA POTENCIA BRUTA',
      keyPoints: [
        '12 Teraflops GPU vs 10.28 de PS5, mejor resolución nativa en multiplataformas',
        'Xbox Game Pass Ultimate con lanzamientos día 1 y catálogo masivo',
        'Quick Resume para pausar y reanudar múltiples juegos de inmediato',
      ],
    },
    criteria: [
      {
        name: 'Potencia Gráfica (GPU)',
        a: '10.28 TFLOPs, 36 CUs a 2.23 GHz (frecuencia variable)',
        b: '12.15 TFLOPs, 52 CUs a 1.825 GHz (frecuencia fija)',
        winner: 'b',
      },
      {
        name: 'Almacenamiento Interno',
        a: '1TB Custom SSD (848 GB utilizables) a 5.5 GB/s sin compresión',
        b: '1TB Custom NVMe SSD (802 GB utilizables) a 2.4 GB/s sin compresión',
        winner: 'a',
      },
      {
        name: 'Innovación en el Mando',
        a: 'DualSense: retroalimentación háptica micro-precisa, altavoz y gatillos resistivos',
        b: 'Mando Xbox inalámbrico: diseño ergonómico continuista y respuesta por vibración estándar',
        winner: 'a',
      },
      {
        name: 'Catálogo de Exclusivos',
        a: 'Títulos first-party de referencia mundial cinematográfica y de autor',
        b: 'Expansión con franquicias de Bethesda, Activision Blizzard e ID Software',
        winner: 'a',
      },
      {
        name: 'Servicio de Suscripción',
        a: 'PlayStation Plus (Essential / Extra / Deluxe) con biblioteca clásica',
        b: 'Xbox Game Pass Ultimate: juegos first-party día 1 en consola, PC y nube',
        winner: 'b',
      },
      {
        name: 'Multitarea y Sistema',
        a: 'Reanudación de una sola aplicación a la vez',
        b: 'Quick Resume: salta entre 4 a 6 juegos suspendidos sin pantallas de carga',
        winner: 'b',
      },
      {
        name: 'Retrocompatibilidad',
        a: '99% compatible con catálogo de PlayStation 4',
        b: 'Cuatro generaciones: juegos originales de Xbox, Xbox 360 y Xbox One con FPS Boost',
        winner: 'b',
      },
    ],
    verdict: {
      title: 'El Veredicto de Compra',
      forA: 'Elige PlayStation 5 si buscas las experiencias narrativas para un solo jugador más premiadas, inmersion sensorial háptica con el DualSense y el ecosistema líder de la comunidad gamer.',
      forB: 'Elige Xbox Series X si priorizas el valor económico a largo plazo gracias a Game Pass, mayor rendimiento gráfico en títulos multiplataforma y una retrocompatibilidad inigualable.',
      finalThoughts: 'Ambas consolas cuentan con envío garantizado a Argentina e internacional en Amazon con cálculo de impuestos en origen.',
    },
  },
  {
    id: 'monitores-144hz-vs-240hz',
    category: 'HARDWARE · PANTALLAS GAMING',
    title: 'Monitor 144Hz / 165Hz vs 240Hz / 360Hz',
    summary: '¿Es perceptible el salto de fluidez más allá de los 144 Hz o se trata de una ganancia marginal con rendimientos decrecientes? Desglosamos los tiempos de respuesta, el impacto en la latencia de entrada y los requerimientos de tarjeta gráfica.',
    productA: {
      name: 'Monitor 144Hz / 180Hz IPS QHD (1440p)',
      label: 'Estándar Ideal Calidad/Precio',
      amazonUrl: `https://www.amazon.com/s?k=ASUS+TUF+Gaming+Monitor+27+180Hz+1440p&tag=${AMAZON_REFERRAL_TAG}`,
      badge: 'MEJOR EQUILIBRIO',
      keyPoints: [
        'Excelente resolución 1440p con gran nitidez para trabajo y juegos',
        'Exige una GPU gama media razonable (RTX 4060 Ti / RX 7700 XT)',
        'Salto abismal de 60Hz a 144Hz (reducción del 58% en tiempo de cuadro)',
      ],
    },
    productB: {
      name: 'Monitor 240Hz / 360Hz Fast IPS / OLED',
      label: 'Especializado Esports',
      amazonUrl: `https://www.amazon.com/s?k=Gaming+Monitor+240Hz+Fast+IPS&tag=${AMAZON_REFERRAL_TAG}`,
      badge: 'MÁXIMA COMPETITIVIDAD',
      keyPoints: [
        'Tiempo entre fotogramas de solo 4.16ms (240Hz) a 2.77ms (360Hz)',
        'Claridad de movimiento ultra limpia en giros rápidos de cámara (Valorant, CS2)',
        'Requiere un procesador y tarjeta gráfica tope de gama para mantener los FPS',
      ],
    },
    criteria: [
      {
        name: 'Tiempo por Fotograma',
        a: '6.94 ms (a 144 Hz) / 5.55 ms (a 180 Hz)',
        b: '4.16 ms (a 240 Hz) / 2.77 ms (a 360 Hz)',
        winner: 'b',
      },
      {
        name: 'Percepción de Fluidez Real',
        a: 'Transformador respecto a 60Hz; cualquier usuario lo nota de inmediato',
        b: 'Sutil; perceptible principalmente por jugadores de shooters tácticos entrenados',
        winner: 'a',
      },
      {
        name: 'Resolución habitual por precio',
        a: '1440p (2560x1440) accesible con paneles Fast IPS con gran color',
        b: 'Generalmente 1080p en la misma franja de precio, o costo muy superior en 1440p/OLED',
        winner: 'a',
      },
      {
        name: 'Exigencia al Hardware del PC',
        a: 'Moderada; alcanzable en títulos AAA y competitivos actuales',
        b: 'Muy exigente; requiere CPUs de alto IPC (Ryzen 7 7800X3D) y GPUs potentes',
        winner: 'a',
      },
      {
        name: 'Claridad en Movimiento (Motion Blur)',
        a: 'Buena con overdrive bien configurado',
        b: 'Excepcional, ghosting prácticamente nulo en paneles rápidos',
        winner: 'b',
      },
    ],
    verdict: {
      title: 'El Veredicto de Compra',
      forA: 'Opta por 144Hz/180Hz en 1440p si juegas títulos variados (RPGs, aventuras, simulación, FPS casual) y valoras la calidad de imagen, los colores y la definición.',
      forB: 'Ve por 240Hz o más si compites seriamente en títulos rápidos como Counter-Strike 2, Valorant, Overwatch 2 o Apex Legends y cada milisegundo de reacción cuenta en tu ranking.',
      finalThoughts: 'Ambas categorías cuentan con modelos certificados elegibles para envío puerta a puerta internacional en Amazon.',
    },
  },
  {
    id: 'hardware-wallets-vs-exchanges',
    category: 'FINANZAS · CUSTODIA BITCOIN Y CRIPTO',
    title: 'Hardware Wallet (Cold Storage) vs Custodia en Exchange',
    summary: '“Not your keys, not your coins”. Comparamos la seguridad real entre guardar tus activos en billeteras frías desconectadas de internet frente a dejarlos en exchanges centralizados.',
    productA: {
      name: 'Hardware Wallet Fría (Trezor Safe 3 / Ledger)',
      label: 'Autocustodia Soberana',
      amazonUrl: `https://www.amazon.com/s?k=Trezor+Safe+3+Hardware+Wallet&tag=${AMAZON_REFERRAL_TAG}`,
      badge: 'MÁXIMA SEGURIDAD',
      keyPoints: [
        'Claves privadas generadas y resguardadas fuera de internet',
        'Inmune a hackeos del servidor del exchange o congelamiento de cuentas',
        'Tú tienes el control total de tus fondos mediante semilla de recuperación',
      ],
    },
    productB: {
      name: 'Exchange Centralizado (Binance, Coinbase, Kraken)',
      label: 'Custodia Delegada',
      amazonUrl: `https://www.amazon.com/s?k=YubiKey+Security+Key&tag=${AMAZON_REFERRAL_TAG}`,
      badge: 'COMODIDAD INMEDIATA',
      keyPoints: [
        'Facilidad para comprar y vender en segundos con órdenes automáticas',
        'Recuperación de contraseña mediante correo o soporte técnico',
        'Riesgo de contraparte: insolvencia, bloqueos regulatorios o quiebras',
      ],
    },
    criteria: [
      {
        name: 'Control de Claves Privadas',
        a: '100% en tu poder en dispositivo físico aislado con chip seguro EAL6+',
        b: 'En poder de la empresa; no eres dueño directo de las monedas en la blockchain',
        winner: 'a',
      },
      {
        name: 'Riesgo de Quiebra o Corralito',
        a: 'Nulo; tus fondos están en la blockchain y nadie puede congelarlos',
        b: 'Existente; casos como FTX, Mt. Gox y Celsius demostraron el riesgo de custodia',
        winner: 'a',
      },
      {
        name: 'Facilidad de Operación Diaria',
        a: 'Requiere conectar el dispositivo y autorizar cada firma físicamente',
        b: 'Inmediata desde una app móvil o navegador web',
        winner: 'b',
      },
      {
        name: 'Recuperación ante Pérdida Personal',
        a: 'Depende 100% de respaldar correctamente tus 12/24 palabras clave en papel o metal',
        b: 'Soporte al cliente para resetear credenciales presentando DNI/Pasaporte',
        winner: 'b',
      },
      {
        name: 'Privacidad Financiera',
        a: 'Alta; no requiere enviar documentos de identidad para generar direcciones',
        b: 'Baja; procesos obligatorios de KYC (Know Your Customer)',
        winner: 'a',
      },
    ],
    verdict: {
      title: 'El Veredicto de Compra',
      forA: 'Si tus ahorros en Bitcoin o cripto son significativos para ti, una hardware wallet es una inversión no negociable de paz mental.',
      forB: 'Mantén en un exchange solo el capital que utilizas activamente para trading semanal o compras inmediatas.',
      finalThoughts: 'Siempre adquiere dispositivos de hardware wallet nuevos y sellados desde canales oficiales con envío directo.',
    },
  },
];
