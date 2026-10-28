const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/articlesData.json');
const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const newArticles = [
  {
    slug: 'tecnologia/openai-destruye-los-precios-lanzan-gpt-6-1-terra-control-pc-mitad-de-precio',
    category: 'TECNOLOGÍA + IA',
    date: '27 OCT 2026',
    dateIso: '2026-10-27T08:00:00-03:00',
    minutes: 6,
    title: 'OpenAI destruye los precios: Lanzan GPT-6.1 Terra y ahora los bots van a controlar tu PC por la mitad de precio',
    dek: 'OpenAI acaba de soltar GPT-6.1 Terra, un modelo diseñado no para chatear, sino para tomar el control de la pantalla, mover el ratón y automatizar flujos complejos de trabajo recortando los costos de inferencia en un 50%.',
    personalAngle: 'No estamos ante otra actualización cosmética: cuando reduces los costos de cómputo a la mitad y le das manos digitales a la inteligencia artificial para manejar software de escritorio, la automatización agéntica deja de ser un experimento de laboratorio y pasa a ser la norma diaria.',
    leadEyebrow: 'INTELIGENCIA ARTIFICIAL & AGENTES · OFENSIVA DE COSTOS EN SILICON VALLEY',
    leadTitle: 'Revolución agéntica en el escritorio: OpenAI presenta GPT-6.1 Terra con capacidades de control operativo y tarifas reducidas al 50%',
    image: '/articles/2026-10-27/openai-gpt-61-terra-hero.jpg',
    imageAlt: 'Interfaz digital de inteligencia artificial interactuando de forma autónoma con ventanas de software y código en pantalla',
    imageCredit: 'TokenGeekCoin IA Lab / OpenAI Press',
    body: [
      'Si pensabas que la carrera de la inteligencia artificial generativa se había estabilizado en una meseta de optimizaciones marginales, piénsalo dos veces. OpenAI acaba de anunciar el lanzamiento oficial de GPT-6.1 Terra, un modelo de lenguaje y visión multimodal diseñado desde su arquitectura base no para sostener conversaciones de texto casuales, sino para realizar el trabajo operativo pesado directamente sobre los entornos de escritorio de los usuarios.',
      'Terra ha sido entrenado específicamente en Computer Use y control agéntico de interfaz gráfica: interpreta ventanas de aplicaciones en milisegundos, manipula el cursor, interactúa con software de desarrollo, suites de productividad y navegadores web con una precisión motriz virtual sin precedentes. Sin embargo, el golpe más demoledor para sus competidores ha sido la reestructuración arancelaria de su API: OpenAI ha recortado el precio del millón de tokens de inferencia en un 50%, provocando un terremoto inmediato en el ecosistema de startups y proveedores en la nube.',
      'El nuevo motor de razonamiento integrado en GPT-6.1 Terra resuelve encadenamientos lógicos en tiempo real con una tasa de error drásticamente inferior a generaciones previas. Equipos de desarrollo han demostrado su capacidad para depurar código complejo, compilar dependencias conflictivas y gestionar pipelines DevOps de extremo a extremo como si se contara con un ingeniero de software senior operando en paralelo.',
      'La jugada estratégica de Sam Altman y su equipo deja un mensaje inequívoco al mercado: la era del chatbot de asistencia pasiva ha quedado atrás. La batalla de 2026 y los próximos años se librará en la autonomía ejecutiva, y hacer que los agentes informáticos sean económicamente viables para millones de desarrolladores simultáneos es la clave para dominar la próxima capa del sistema operativo global.'
    ],
    bullets: [
      'Inferencia al 50% de costo: La barrera económica para desplegar agentes autónomos a escala se desploma radicalmente.',
      'Control directo del sistema operativo: GPT-6.1 Terra opera interfaces de usuario, maneja periféricos virtuales y automatiza flujos sin intervención.',
      'Razonamiento dinámico en tiempo real: Resolución de arquitecturas de software y depuración en caliente con nivel de ingeniería avanzada.',
      'Visión TokenGeekCoin: La automatización ya no es un privilegio de grandes corporaciones; la IA se convierte en el operador directo de las máquinas.'
    ],
    features: [
      {
        title: 'Control agéntico de PC: El fin de la entrada manual de datos',
        eyebrow: 'ARQUITECTURA DE SOFTWARE',
        facts: 'CONTROL MULTIMODAL · VISIÓN EN TIEMPO REAL · INFERENCIA SUB-100MS · AGENTES OPERATIVOS',
        image: '/articles/2026-10-27/openai-agent-automatizacion-pc.jpg',
        alt: 'Estación de trabajo futurista ejecutando flujos de automatización mediante modelos de IA agéntica',
        imageCredit: 'OpenAI Engineering & Research',
        body: [
          'Terra traduce capturas visuales de pantalla en acciones vectoriales inmediatas sobre el puntero y teclado.',
          'Capaz de saltar entre aplicaciones dispares como Figma, VS Code y terminales sin pérdida de contexto operacional.'
        ]
      },
      {
        title: 'Guerra de precios en la API: Inferencia democratizada a escala masiva',
        eyebrow: 'ECONOMÍA DE LA IA',
        facts: '50% MENOS COSTO · TOKENIZACIÓN EFICIENTE · FLASH ATTENTION 3 · RENDIMIENTO ESCALABLE',
        image: '/articles/2026-10-27/openai-datacenter-inferencia-costos.jpg',
        alt: 'Racks de centros de datos de última generación procesando inferencias masivas de inteligencia artificial',
        imageCredit: 'Datacenter Operations Lab',
        body: [
          'La optimización a nivel de kernel permite a OpenAI duplicar el rendimiento por vatio de sus aceleradores.',
          'Las empresas podrán ejecutar millones de operaciones agénticas diarias con presupuestos sustancialmente reducidos.'
        ]
      }
    ]
  },
  {
    slug: 'hardware/apple-lanza-nuevo-ipad-mini-pantalla-oled-chip-a20-pro',
    category: 'HARDWARE',
    date: '27 OCT 2026',
    dateIso: '2026-10-27T08:15:00-03:00',
    minutes: 5,
    title: 'Apple soltó el bombazo sin avisar: El nuevo iPad mini ya tiene pantalla OLED y chip A20 Pro',
    dek: 'Sin eventos pomposos ni filtraciones previas, Apple actualizó su catálogo de forma sorpresiva introduciendo el esperado iPad mini de nueva generación con pantalla Ultra Retina OLED y el chip A20 Pro para Apple Intelligence.',
    personalAngle: 'Los fanáticos de la portabilidad extrema finalmente reciben el hardware sin compromisos que llevaban un lustro reclamando: panel OLED con negros puros y el silicio más salvaje de Cupertino en el tamaño de una libreta de notas.',
    leadEyebrow: 'HARDWARE & SILICIO · ACTUALIZACIÓN SORPRESA EN CUPERTINO',
    leadTitle: 'Golpe sobre la mesa en tablets compactas: Apple actualiza el iPad mini con panel Ultra Retina OLED y arquitectura A20 Pro',
    image: '/articles/2026-10-27/apple-ipad-mini-oled-hero.jpg',
    imageAlt: 'Nuevo iPad mini con pantalla encendida mostrando colores vivos sobre un escritorio de trabajo minimalista',
    imageCredit: 'TokenGeekCoin Hardware / Apple Newsroom',
    body: [
      'Sin anuncios en grandes auditorios ni campañas de intriga en redes sociales: Apple decidió actualizar su tienda digital en las primeras horas de la jornada para liberar lo que los entusiastas del formato compacto llevaban años esperando. La nueva generación del iPad mini es oficial, y llega acompañada de dos mejoras determinantes que transforman por completo su propuesta de valor: un panel Ultra Retina OLED y el flamante silicio A20 Pro.',
      'El salto a la tecnología OLED erradica de raíz uno de los puntos más criticados de los modelos anteriores: el efecto jelly scrolling y los negros lavados en condiciones de baja luminosidad. La nueva pantalla tándem de doble emisión ofrece un contraste infinito, picos de brillo de hasta 1.600 nits en contenido HDR y una tasa de refresco adaptativa ProMotion de 120 Hz, situando la fidelidad visual del dispositivo a la par de los iPad Pro más costosos de la compañía.',
      'Bajo el chasis de aluminio reciclado late el nuevo procesador A20 Pro, fabricado bajo el avanzado nodo litográfico de 2 nanómetros. Este cerebro no solo pulveriza los benchmarks de rendimiento gráfico y eficiencia energética para videojuegos de alta exigencia gráfica, sino que incorpora un Neural Engine rediseñado con 32 núcleos capaz de ejecutar todas las funciones locales de Apple Intelligence sin depender de servidores externos ni comprometer la privacidad del usuario.',
      'Con soporte completo para el Apple Pencil Pro de respuesta háptica y conectividad Wi-Fi 7 / 5G Advanced, el nuevo iPad mini se consolida como el dispositivo de bolsillo más versátil del mercado, ideal tanto para creadores visuales nómadas como para usuarios profesionales que demandan la máxima potencia en apenas 300 gramos de peso.'
    ],
    bullets: [
      'Lanzamiento silencioso en Apple Store: Actualización directa sin evento que revoluciona el catálogo de tablets.',
      'Pantalla Ultra Retina OLED con ProMotion 120 Hz: Contraste absoluto, brillo HDR extremo y adiós definitivo al retraso de refresco.',
      'Chip A20 Pro en nodo de 2nm: Potencia gráfica brutal y aceleración neural dedicada para IA generativa en el dispositivo.',
      'Visión TokenGeekCoin: La mejor tablet compacta del mundo ya no hace concesiones frente a los hermanos mayores de la línea Pro.'
    ],
    features: [
      {
        title: 'Ultra Retina OLED: Precisión cromática y contraste infinito',
        eyebrow: 'INGENIERÍA DE PANTALLAS',
        facts: 'TECNOLOGÍA TÁNDEM OLED · PROMOTION 120HZ · 1600 NITS HDR · DELTA E < 1',
        image: '/articles/2026-10-27/apple-pantalla-ultra-retina-oled.jpg',
        alt: 'Detalle en primer plano de los píxeles y saturación de color del nuevo panel Ultra Retina OLED',
        imageCredit: 'Display Engineering Tech',
        body: [
          'La calibración milimétrica de fábrica ofrece negros puros ideales para consumo multimedia y retoque fotográfico.',
          'La respuesta táctil instantánea elimina cualquier rastro de latencia en trazos con el Apple Pencil Pro.'
        ]
      },
      {
        title: 'Silicio A20 Pro: Potencia de sobremesa en 8.3 pulgadas',
        eyebrow: 'MICROARQUITECTURA DE CHIPS',
        facts: 'NODO LITOGRÁFICO 2NM · 32-CORE NEURAL ENGINE · RAY TRACING POR HARDWARE · EFICIENCIA TÉRMICA',
        image: '/articles/2026-10-27/apple-chip-a20-pro-silicio.jpg',
        alt: 'Oblea de silicio y estructura de microchip procesador de alto rendimiento',
        imageCredit: 'Semiconductor Analysis Hub',
        body: [
          'El A20 Pro ejecuta modelos de lenguaje locales de Apple Intelligence con latencias inferiores a un segundo.',
          'La disipación pasiva de grafito mantiene frecuencias de reloj sostenidas incluso en sesiones de juego intensivas.'
        ]
      }
    ]
  },
  {
    slug: 'tecnologia/nvidia-invierte-3000-millones-dolares-meta-supercomputadores-ia-llama',
    category: 'TECNOLOGÍA + IA',
    date: '27 OCT 2026',
    dateIso: '2026-10-27T08:30:00-03:00',
    minutes: 6,
    title: 'NVIDIA le mete 3.000 millones de dólares a Meta: El pacto secreto para dominar los supercomputadores de IA',
    dek: 'NVIDIA sella una megainversión y alianza estratégica de 3.000 millones de dólares con Meta para asegurar el suministro preferencial de silicio acelerador y construir los centros de datos de IA más gigantescos del planeta.',
    personalAngle: 'Zuckerberg y Huang se necesitan mutuamente: Meta requiere montañas incalculables de FLOPS para coronar a Llama como el estándar mundial de código abierto, y NVIDIA se asegura que su silicio propietario sea el corazón insustituible de la infraestructura mundial.',
    leadEyebrow: 'BIG TECH & HARDWARE DE IA · ALIANZA MULTIMILLONARIA EN SILICON VALLEY',
    leadTitle: 'Pacto de titanes tecnológicos: NVIDIA inyecta 3.000 millones de dólares en la infraestructura de computación masiva de Meta',
    image: '/articles/2026-10-27/nvidia-meta-acuerdo-3000m-hero.jpg',
    imageAlt: 'Placa aceleradora gráfica de inteligencia artificial NVIDIA de última generación con circuitos iluminados',
    imageCredit: 'TokenGeekCoin Enterprise Tech / NVIDIA Corp',
    body: [
      'El flujo de capitales en la cumbre de la industria tecnológica continúa rompiendo marcas históricas. NVIDIA y Meta Platforms han oficializado un acuerdo estratégico de co-inversión valorado en 3.000 millones de dólares, sellando un pacto sin precedentes para financiar, diseñar y desplegar la próxima oleada de supercomputadores dedicados al entrenamiento de inteligencia artificial de frontera y entornos virtuales distribuidos.',
      'La transacción va mucho más allá de una inyección financiera tradicional: garantiza a la compañía de Mark Zuckerberg un acceso prioritario y reservado a los próximos lotes de producción de aceleradores de NVIDIA con interconexión óptica Quantum-X, esquivando los cuellos de botella de abastecimiento que aquejan al resto del mercado corporativo global. A cambio, los laboratorios de Meta optimizarán las futuras versiones de sus modelos fundacionales Llama específicamente para las instrucciones nativas de CUDA y las arquitecturas de tensor de NVIDIA.',
      'Analistas de Wall Street destacan que esta alianza consolida un frente común frente a los esfuerzos de competidores directos como Google, Amazon y Microsoft por reemplazar el silicio externo mediante chips propietarios como TPU o Maia. Al amarrar el desarrollo del modelo de código abierto más adoptado del mundo a su propia pila de hardware, NVIDIA se garantiza que millones de empresas y desarrolladores continúen dependiendo de su ecosistema.',
      'Los nuevos clústeres de supercomputación fruto de esta alianza se ubicarán en centros de datos con suministro energético geotérmico y nuclear en América del Norte y Europa, proyectando una potencia combinada capaz de procesar billones de parámetros simultáneos para investigación en robótica humanoide, simulación física y modelos de razonamiento multimodal.'
    ],
    bullets: [
      'Acuerdo de 3.000 millones de dólares: Co-inversión de capital y tecnología entre los dos gigantes de la computación contemporánea.',
      'Acceso prioritario a silicio de próxima generación: Meta blinda su suministro de GPUs frente a la escasez del mercado.',
      'Optimización simbiótica de software y hardware: Modelos Llama perfeccionados para exprimir al máximo la pila CUDA.',
      'Visión TokenGeekCoin: Una jugada maestra donde NVIDIA asegura su hegemonía y Meta se equipa para ganar la carrera del open-source.'
    ],
    features: [
      {
        title: 'Clústeres Llama: Monstruos de cómputo para modelos de frontera',
        eyebrow: 'SUPERCOMPUTACIÓN',
        facts: 'INTERCONEXIÓN CUÁNTICA · REDES NVLINK 6 · CIENTOS DE MILES DE NODOS · ENTRENAMIENTO MULTIMODAL',
        image: '/articles/2026-10-27/meta-supercomputador-llama-cluster.jpg',
        alt: 'Pasillos de servidores de computación masiva de inteligencia artificial con iluminación LED azul y verde',
        imageCredit: 'Meta AI Infrastructure Group',
        body: [
          'La arquitectura combinada reduce la latencia de intercambio entre nodos a fracciones de nanosegundos.',
          'Diseñada para entrenar redes de más de diez billones de parámetros en ventanas de tiempo récord.'
        ]
      },
      {
        title: 'El frente defensivo contra los chips propietarios',
        eyebrow: 'GEOPOLÍTICA DEL SILICIO',
        facts: 'HEGEMONÍA CUDA · BARRERAS DE ENTRADA · MONOPOLIO PRÁCTICO · DESPLIEGUE CONTINUO',
        image: '/articles/2026-10-27/nvidia-meta-alianza-estrategica.jpg',
        alt: 'Visualización conceptual de conexiones de datos globales y chips semiconductores interconectados',
        imageCredit: 'Silicon Valley Financial Reports',
        body: [
          'NVIDIA neutraliza los intentos de la industria por migrar hacia silicios aceleradores propios de los proveedores de nube.',
          'El estándar abierto de software de Meta retroalimenta el consumo del silicio más rentable del planeta.'
        ]
      }
    ]
  },
  {
    slug: 'finanzas-cripto/bitcoin-soporte-79500-dolares-reserva-federal-acumulacion-ballenas',
    category: 'FINANZAS + CRIPTO',
    date: '27 OCT 2026',
    dateIso: '2026-10-27T08:45:00-03:00',
    minutes: 5,
    title: 'Bitcoin aguanta el tipo en los USD 79.500: Todos esperando el martillazo de la Reserva Federal',
    dek: 'En una semana de máxima tensión en las mesas de dinero por la decisión de tipos de interés de la Fed, Bitcoin defiende el soporte crítico de 79.500 dólares mientras las métricas on-chain delatan una acumulación feroz de las ballenas.',
    personalAngle: 'Ruido de corto plazo, señal de largo plazo. Mientras los operadores minoristas se dejan llevar por el pánico ante las declaraciones de los bancos centrales, los grandes tenedores aprovechan cada corrección para retirar monedas hacia bóvedas frías.',
    leadEyebrow: 'CRIPTO & MACROECONOMÍA · SEMANA DECISIVA EN WALL STREET',
    leadTitle: 'Tensión máxima en los mercados: Bitcoin defiende los 79.500 dólares ante la inminente comparecencia de la Reserva Federal',
    image: '/articles/2026-10-27/bitcoin-soporte-79500-hero.jpg',
    imageAlt: 'Moneda física dorada de Bitcoin sobre fondo oscuro con gráficos financieros y velas de trading alcistas',
    imageCredit: 'TokenGeekCoin Cripto Desk / CoinMarketCap',
    body: [
      'Semana de pulso acelerado en las terminales de trading financiero global. Bitcoin (BTC) se encuentra librando una batalla encarnizada en la franja de los 79.500 dólares, sosteniendo con firmeza uno de los soportes técnicos más vigilados del trimestre mientras los operadores institucionales contienen la respiración ante la reunión del Comité Federal de Mercado Abierto (FOMC) de la Reserva Federal de Estados Unidos.',
      'La retórica de los bancos centrales en torno a las tasas de interés y los datos inflacionarios ha inyectado una volatilidad palpable en los libros de órdenes de los principales exchanges. No obstante, lejos de reflejar una fuga masiva de capitales, el comportamiento de las métricas en cadena (on-chain) revela una marcada divergencia: las billeteras con saldos superiores a 1.000 BTC han intensificado sus compras netas, absorbiendo cada caída temporal hacia la zona de los 77.600 dólares.',
      'Este proceso de absorción ha ido acompañado de una purga masiva de apalancamiento especulativo en los mercados de futuros perpetuos. Decenas de millones de dólares en posiciones largas y cortas sobredimensionadas fueron liquidadas en las últimas 48 horas, reseteando las tasas de financiación (funding rates) a niveles neutrales y sentando las bases para una estructura de precios considerablemente más orgánica y saludable.',
      'Para los estrategas de activos digitales, la prueba de fuego se producirá cuando la Fed detalle su hoja de ruta monetaria para el cierre del año. Si la institución confirma un freno o relajación en las restricciones de liquidez, la escasez de oferta flotante de Bitcoin provocada por las compras silenciosas de las ballenas podría desencadenar una ruptura vertical hacia nuevos máximos históricos.'
    ],
    bullets: [
      'Soporte clave en 79.500 dólares: El precio de BTC resiste la presión vendedora previa al anuncio de la Fed.',
      'Acumulación agresiva de ballenas: Las carteras institucionales aprovechan la incertidumbre para sumar volumen a precios descontados.',
      'Purga saludable de derivados: La liquidación de posiciones apalancadas limpia el mercado de excesos especulativos.',
      'Visión TokenGeekCoin: Quien entiende la dinámica de liquidez sabe que el miedo del minorista suele marcar el suelo de los grandes ciclos.'
    ],
    features: [
      {
        title: 'Métricas on-chain: El dinero inteligente llena sus arcas',
        eyebrow: 'ANÁLISIS DE BLOCKCHAIN',
        facts: 'INFLOW A BÓVEDAS FRÍAS · RESERVAS EN EXCHANGES EN MÍNIMOS · HOLDING INSTITUCIONAL · PURGA DE DERIVADOS',
        image: '/articles/2026-10-27/bitcoin-grafico-analisis-tecnico.jpg',
        alt: 'Gráfica de análisis técnico con velas japonesas, medias móviles y niveles de soporte y resistencia en pantalla de trading',
        imageCredit: 'Glassnode / TradingView Reports',
        body: [
          'El balance de Bitcoin disponible en exchanges centralizados continúa descendiendo a mínimos de varios años.',
          'Los inversores a largo plazo muestran una convicción inquebrantable sin transferencias a plataformas de venta.'
        ]
      },
      {
        title: 'El factor Reserva Federal: Tipos de interés y liquidez global',
        eyebrow: 'MACROECONOMÍA',
        facts: 'DECISIÓN FOMC · TASAS DE POLÍTICA MONETARIA · CORRELACIÓN CON DÓLAR · EXPECTATIVAS DE INFLACIÓN',
        image: '/articles/2026-10-27/bitcoin-reserva-federal-tasas-interes.jpg',
        alt: 'Billetes de dólares y gráficos de divisas internacionales representando la política monetaria global',
        imageCredit: 'Federal Reserve Communications / Reuters',
        body: [
          'El consenso de los analistas descuenta un escenario de mayor neutralidad monetaria que favorecerá a los activos de riesgo.',
          'La correlación de Bitcoin con la expansión de la masa monetaria M2 global vuelve a reafirmar su rol de reserva.'
        ]
      }
    ]
  },
  {
    slug: 'gaming/minecraft-nintendo-switch-2-ray-tracing-nativo-60-fps-vibrant-visuals',
    category: 'GAMING',
    date: '27 OCT 2026',
    dateIso: '2026-10-27T09:00:00-03:00',
    minutes: 5,
    title: 'Minecraft en Switch 2 se ve increíble: Ray Tracing nativo y 60 FPS sin que explote la consola',
    dek: 'Mojang y Nintendo lanzan la esperada versión nativa de Minecraft para Nintendo Switch 2, incorporando el paquete Vibrant Visuals con trazado de rayos por hardware, agua hiperrealista y resolución 4K a 60 FPS en dock.',
    personalAngle: 'Cualquiera que haya intentado jugar en la Switch original sabe lo que era padecer caídas de cuadros por debajo de 30 FPS. Ver este título en la Switch 2 con iluminación dinámica real y fluidez absoluta es como presenciar un juego completamente nuevo.',
    leadEyebrow: 'VIDEOJUEGOS & RENDIMIENTO · SALTO GENERACIONAL EN NINTENDO',
    leadTitle: 'Revolución gráfica para el rey de los bloques: Mojang estrena Minecraft nativo en Nintendo Switch 2 con trazado de rayos a 60 FPS',
    image: '/articles/2026-10-27/minecraft-switch-2-ray-tracing-hero.jpg',
    imageAlt: 'Setup de juego con mando y pantalla con efectos de iluminación vívidos y colores RGB intensos',
    imageCredit: 'TokenGeekCoin Gaming / Mojang Studios',
    body: [
      'Quienes hayan experimentado Minecraft en la consola Nintendo Switch de primera generación recuerdan bien el suplicio que significaba explorar mundos extensos: caídas dramáticas en la tasa de refresco, distancia de renderizado reducida a un puñado de chunks y tiempos de carga eternos. Esa pesadilla técnica ha quedado definitivamente sepultada hoy con la llegada de la versión nativa diseñada a medida para la flamante Nintendo Switch 2.',
      'Aprovechando la arquitectura gráfica y el silicio personalizado con núcleos RT dedicados de la nueva portátil de Kioto, Mojang ha estrenado el paquete de mejoras Vibrant Visuals. La actualización introduce trazado de rayos en tiempo real acelerado por hardware: la luz solar se filtra a través de las copas de los árboles proyectando sombras volumétricas reales, mientras que el agua adquiere refracciones y reflejos cristalinos que cambian según la posición del sol o la luna.',
      'El rendimiento técnico es intachable: al colocar la consola en su estación dock conectada a un televisor, el título alcanza una resolución nítida de 4K escalada mediante DLSS con 60 fotogramas por segundo completamente estables, incluso al detonar complejos mecanismos de redstone con cientos de bloques de dinamita. En modo portátil, la pantalla OLED nativa de Switch 2 despliega 1080p a 60 FPS con un consumo de batería extraordinariamente moderado.',
      'Con cross-play instantáneo, tiempos de carga que rozan los dos segundos y soporte para servidores masivos sin hipo alguno, esta versión no es solo una actualización de cortesía: es una demostración palmaria de lo que la nueva máquina híbrida de Nintendo es capaz de lograr cuando los desarrolladores exprimen su arquitectura moderna.'
    ],
    bullets: [
      'Versión nativa de nueva generación: Diseñada desde cero para exprimir el hardware y la arquitectura de Nintendo Switch 2.',
      'Paquete Vibrant Visuals: Iluminación global volumétrica, sombras en tiempo real y agua hiperrealista por trazado de rayos.',
      '4K escalado a 60 FPS estables: Rendimiento sin caídas en modo televisor y 1080p fluido en modo portátil con bajo consumo.',
      'Visión TokenGeekCoin: Por fin el sandbox más jugado de la historia tiene en una portátil de Nintendo el poder visual que siempre mereció.'
    ],
    features: [
      {
        title: 'Vibrant Visuals: Trazado de rayos y física de luz volumétrica',
        eyebrow: 'TECNOLOGÍA GRÁFICA',
        facts: 'HARDWARE RAY TRACING · SOMBRAS SUAVES DINÁMICAS · REFRACCIÓN DE AGUA · NIEBLA ATMOSFÉRICA',
        image: '/articles/2026-10-27/minecraft-vibrant-visuals-sombras.jpg',
        alt: 'Mando y pantalla de videojuegos con iluminación y sombras dinámicas de alta fidelidad',
        imageCredit: 'Mojang Graphics Engine / Digital Foundry',
        body: [
          'El sombreado en tiempo real transforma radicalmente la atmósfera de cuevas, bosques y estructuras complejas.',
          'Los reflejos en superficies de cristal y agua reaccionan con total fidelidad a antorchas y fuentes luminosas.'
        ]
      },
      {
        title: 'Switch 2 en el dock: Rendimiento 4K fluido y carga instantánea',
        eyebrow: 'OPTIMIZACIÓN DE HARDWARE',
        facts: 'NVIDIA DLSS INTEGRADO · MEMORIA UFS 4.0 · CHUNKS DE CARGA EXTENDIDOS · SIN CALENTAMIENTO',
        image: '/articles/2026-10-27/switch-2-dock-rendimiento-4k60.jpg',
        alt: 'Consola híbrida Nintendo Switch en primer plano mostrando pantalla nítida y controles Joy-Con',
        imageCredit: 'Nintendo Hardware Testing Lab',
        body: [
          'El escalado inteligente permite mantener los 60 FPS constantes sin comprometer la nitidez ni el detalle de texturas.',
          'El ancho de banda de la memoria de Switch 2 permite cargar mundos pesados en menos de tres segundos.'
        ]
      }
    ]
  }
];

// Check for duplicates before prepending
const existingSlugs = new Set(existing.map(a => a.slug));
const filteredNew = newArticles.filter(a => !existingSlugs.has(a.slug));

const combined = [...filteredNew, ...existing];
fs.writeFileSync(filePath, JSON.stringify(combined, null, 2), 'utf8');
console.log(`Successfully merged. Added ${filteredNew.length} articles. Total count: ${combined.length}`);
