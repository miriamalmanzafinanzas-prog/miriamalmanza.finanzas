/* ==========================================================================
   MIRIAM FINANZAS · CONFIGURACIÓN
   ==========================================================================

   ¿ERES PRINCIPIANTE? LEE ESTO PRIMERO

   1) CAMBIAR TEXTOS: busca el texto entre comillas "..." y reemplázalo.
      No borres las comillas, las comas ni las llaves { } [ ].
   2) CAMBIAR FOTOS: pon tus fotos en la carpeta "assets" y deja el nombre
      igual al de la sección IMAGENES (más abajo), o cambia aquí el nombre.
         assets/miriam-principal.jpeg  -> foto grande de la portada
         assets/miriam-sobre-mi.jpeg   -> foto de la sección "Sobre mí"
         assets/favicon.png            -> icono de la pestaña (opcional)
      Si una foto no existe, la página muestra un fondo de color elegante.
   3) CAMBIAR COLORES: sección COLORES. Usa códigos como "#0F3D2E".
   4) CAMBIAR ENLACES: sección ENLACES (formulario, WhatsApp, redes).
   5) OCULTAR UNA SECCIÓN: pon  visible: false  en esa sección.
   6) Para dejar un dato vacío (y que no se muestre) escribe "".
   ========================================================================== */

window.MIRIAM_CONFIG = {

  /* ---------- 1. MARCA Y DATOS PARA BUSCADORES ---------- */
  marca: {
    nombre: "Miriam Finanzas",
    persona: "Miriam",
    idioma: "es-MX"
  },
  meta: {
    titulo: "Miriam Finanzas | Retiro, inversiones y seguros en León, Gto.",
    descripcion: "Planes personales de retiro, inversiones, asesoría financiera, seguros y fianzas explicados con claridad. Agenda tu cita con Miriam.",
    favicon: "assets/favicon.png" // Vacío = icono automático.
  },

  /* ---------- 2. ENLACES (exactos, no cambiar si funcionan) ---------- */
  enlaces: {
    formulario: "https://docs.google.com/forms/d/e/1FAIpQLSc823X3M7Kwykqia_jYSYOcFnJxhoQGtsUkvp5jxCZ_dZpCew/viewform?usp=header",
    whatsapp: "https://wa.me/5214771731708",
    instagram: "https://www.instagram.com/miriam_finanzas/",
    tiktok: "https://www.tiktok.com/@lem.miriamalmanza?_t=8dY2KOCrWpK&_r=1",
    facebook: "",   // Sin Facebook por ahora
    linkedin: "",   // Sin LinkedIn por ahora
    correo: "lem.miriamalmanza@gmail.com",
    telefonoVisible: "+52 1 477 173 1708",
    telefonoLink: "tel:+5214771731708",
    ubicacion: "León, Guanajuato, México"
  },

  /* ---------- 3. COLORES Y ESTILO ---------- */
  colores: {
    primario: "#0F3D2E",     // verde esmeralda: botones, títulos, secciones oscuras
    secundario: "#B8923A",   // dorado: detalles, líneas, marcos
    acento: "#8F6A1F",       // dorado oscuro: botón destacado
    suave: "#F0E2B6",        // dorado claro: etiquetas e iconos
    fondo: "#F8F4EC",        // fondo general (blanco hueso)
    fondoAlt: "#E7EEE6",     // fondo de secciones alternas (verde muy claro)
    tarjeta: "#FFFFFF",
    texto: "#14261E",
    textoSuave: "#55655C",
    borde: "#D8D2BF",
    textoSobreOscuro: "#F8F4EC"
  },
  tipografia: {
    // Fuente cargada desde Google Fonts. Para no usarla, deja la URL en "".
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
    titulos: "'Instrument Serif', Georgia, 'Times New Roman', serif",
    texto: "'Figtree', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
  },
  estilo: {
    radioTarjeta: "20px"
  },
  animaciones: {
    activadas: true,        // false = sin animaciones
    revelarSecciones: true, // aparición suave al hacer scroll
    barraProgreso: true     // barra fina arriba que indica el avance
  },

  /* ---------- 4. IMÁGENES (carpeta assets/) ---------- */
  imagenes: {
    principal: "assets/miriam-principal.jpeg",
    principalAlt: "Retrato de Miriam, asesora financiera",
    sobreMi: "assets/miriam-sobre-mi.jpeg",
    sobreMiAlt: "Miriam sonriendo durante una asesoría"
  },

  /* ---------- 5. NAVEGACIÓN ---------- */
  navegacion: {
    botonContacto: "Agenda tu cita"
  },

  /* ---------- 6. PORTADA ---------- */
  hero: {
    visible: true,
    insignia: "Finanzas con calidez · León, Gto.",
    chips: ["🪄 Sueños", "💫 Protección", "💵 Planeación"], // Etiquetas flotantes junto a tu foto (máx. 3)
    titular: "Usa tu dinero como herramienta para cumplir tus sueños",
    subtitulo: "Planeación de retiro, inversiones, asesoría y protección, explicadas con claridad y a tu ritmo.",
    mensaje: [
      "Te enseño a usar el dinero como herramienta para cumplir tus sueños. 🪄",
      "Te ayudo a proteger lo que más amas. 💫",
      "Agenda tu cita hoy mismo. 💵💳"
    ],
    botonPrincipal: "Agenda tu cita",
    botonWhatsapp: "Escríbeme por WhatsApp"
  },

  /* ---------- 7. RETIRO (prioridad 1) ---------- */
  retiro: {
    visible: true,
    nav: "Retiro",
    titulo: "Un plan personal de retiro para descansar a tu manera",
    texto: "Retirarte no es dejar de vivir: es tener la libertad de elegir cómo. Un plan personal de retiro te ayuda a decidir hoy, con calma, cómo quieres vivir esa etapa y qué pasos dar para acercarte a ella.",
    etapasTitulo: "Así se construye un plan",
    etapas: [
      { titulo: "Imaginas", texto: "Cómo quieres vivir después de trabajar: dónde, con quién y haciendo qué." },
      { titulo: "Conversamos", texto: "Revisamos tu situación, tus tiempos y lo que sí puedes aportar hoy." },
      { titulo: "Eliges opciones", texto: "Conoces alternativas de planes personales de retiro y sus características." },
      { titulo: "Das seguimiento", texto: "Revisamos tu plan con el tiempo para ajustarlo cuando tu vida cambie." }
    ],
    nota: "Cada plan tiene condiciones propias. En la asesoría se explican con detalle antes de que tomes cualquier decisión."
  },

  /* ---------- 8. HERRAMIENTA INTERACTIVA: "TU RUTA" ---------- */
  ruta: {
    visible: true,
    nav: "Tu ruta",
    titulo: "Arma tu ruta de tranquilidad",
    texto: "Responde tres preguntas rápidas y descubre qué temas te conviene conversar primero. No pide datos personales ni cifras.",
    maximoResultados: 5,
    resultadoTitulo: "Tu ruta para conversar",
    resultadoTexto: "Estos son los temas que podríamos revisar juntas, en este orden:",
    mensajeWhatsApp: "Hola Miriam, armé mi ruta en tu página y me gustaría conversar sobre: {temas}.",
    nota: "Herramienta educativa e ilustrativa. No es una recomendación financiera personalizada ni garantiza resultados. Es solo un punto de partida para nuestra conversación.",
    // Cada opción suma temas (ids de la lista SERVICIOS más abajo).
    pasos: [
      {
        pregunta: "¿Qué sueño quieres impulsar? Elige todos los que quieras.",
        tipo: "multi",
        opciones: [
          { icono: "🌅", texto: "Retirarme con tranquilidad", servicios: ["retiro"] },
          { icono: "🌱", texto: "Hacer crecer mis ahorros", servicios: ["inversiones"] },
          { icono: "✈️", texto: "Viajar y disfrutar", servicios: ["viaje", "inversiones"] },
          { icono: "🏡", texto: "Tener o cuidar mi casa", servicios: ["hogar", "inversiones"] },
          { icono: "🎓", texto: "Estudios de mis hijos", servicios: ["inversiones", "vida"] },
          { icono: "💼", texto: "Hacer crecer mi negocio", servicios: ["empresas", "fianzas", "asesoria"] }
        ]
      },
      {
        pregunta: "¿Qué quieres proteger? Elige todo lo que importe.",
        tipo: "multi",
        opciones: [
          { icono: "👨‍👩‍👧", texto: "A mi familia", servicios: ["vida"] },
          { icono: "🩺", texto: "Mi salud", servicios: ["gmm", "accidentes"] },
          { icono: "🚗", texto: "Mi auto o moto", servicios: ["auto"] },
          { icono: "🏠", texto: "Mi hogar", servicios: ["hogar"] },
          { icono: "🧳", texto: "Mis viajes", servicios: ["viaje"] },
          { icono: "🏢", texto: "Mi empresa o proyecto", servicios: ["empresas", "fianzas"] }
        ]
      },
      {
        pregunta: "¿Cómo te sientes con tus finanzas hoy?",
        tipo: "single",
        opciones: [
          { icono: "🌼", texto: "Estoy empezando a ordenarme", servicios: ["asesoria"] },
          { icono: "🌿", texto: "Ya ahorro y quiero que rinda más", servicios: ["inversiones", "asesoria"] },
          { icono: "🧭", texto: "Necesito un plan claro a futuro", servicios: ["retiro", "asesoria"] }
        ]
      }
    ]
  },

  /* ---------- 9. INVERSIONES (prioridad 2) ---------- */
  inversiones: {
    visible: true,
    nav: "Inversiones",
    titulo: "Inversiones pensadas para tus objetivos",
    texto: "Conoce alternativas de inversión y entiende cómo funcionan antes de decidir. Juntas revisamos tus metas, tus plazos y qué tanto riesgo te hace sentir en paz.",
    tarjetas: [
      { icono: "🎯", titulo: "Parte de tu meta", texto: "Definimos para qué quieres invertir y en cuánto tiempo, porque cada objetivo pide un camino distinto." },
      { icono: "⚖️", titulo: "Conoce el riesgo", texto: "Te explico en palabras sencillas qué implica cada alternativa para que elijas con información." },
      { icono: "🔁", titulo: "Revisa y ajusta", texto: "Tu vida cambia; tu estrategia también puede hacerlo. Damos seguimiento a lo que decidas." }
    ],
    nota: "Toda inversión implica riesgos y los rendimientos pasados no garantizan resultados futuros."
  },

  /* ---------- 10. ASESORÍA Y CAPACITACIÓN (prioridad 3) ---------- */
  asesoria: {
    visible: true,
    nav: "Asesoría",
    titulo: "Asesoría y capacitación financiera",
    texto: "Aprender a usar el dinero cambia la forma de decidir. Te acompaño en lo individual o para tu equipo, con un lenguaje claro y ejemplos de la vida real.",
    tarjetas: [
      { icono: "🧾", titulo: "Orden y presupuesto", texto: "Entiende a dónde va tu dinero y arma hábitos que sí puedas mantener." },
      { icono: "🛟", titulo: "Fondo de emergencia y deudas", texto: "Aprende a prepararte para imprevistos y a manejar tus compromisos con calma." },
      { icono: "👩‍🏫", titulo: "Pláticas y talleres", texto: "Capacitación para grupos, familias, negocios o equipos que quieran aprender juntos." }
    ]
  },

  /* ---------- 11. SEGUROS Y FIANZAS (prioridades 4 y 5) ---------- */
  catalogo: {
    visible: true,
    nav: "Seguros y fianzas",
    titulo: "Protege lo que más amas",
    texto: "Elige el tema que te interesa y solicita información. Te explico coberturas, condiciones y opciones sin tecnicismos.",
    tituloSeguros: "Seguros",
    tituloFianzas: "Fianzas",
    verMas: "Ver detalles",
    verMenos: "Ocultar detalles",
    botonCotizar: "Solicitar información"
  },

  /* ---------- 12. LISTA DE SERVICIOS ----------
     grupo: "principal" (solo se usa en "Tu ruta"), "seguro" o "fianza".
     Puedes cambiar textos, quitar o agregar servicios (mantén un id único). */
  servicios: [
    { id: "retiro", grupo: "principal", nombre: "Planes personales de retiro", ruta: "Ponerle forma y fecha a la etapa en la que quieras descansar de trabajar.", seccion: "retiro" },
    { id: "inversiones", grupo: "principal", nombre: "Inversiones", ruta: "Conocer alternativas según tus metas, plazos y comodidad con el riesgo.", seccion: "inversiones" },
    { id: "asesoria", grupo: "principal", nombre: "Asesoría y capacitación financiera", ruta: "Ordenar tus finanzas y aprender a decidir con más claridad.", seccion: "asesoria" },
    { id: "vida", grupo: "seguro", icono: "💜", nombre: "Seguro de vida", ruta: "Pensar en cómo cuidar a quienes dependen de ti.",
      resumen: "Respaldo para tu familia ante lo inesperado.",
      detalles: ["Para quién: personas con dependientes o compromisos.", "Se revisan coberturas, beneficiarios y condiciones.", "Se adapta a tu etapa de vida."] },
    { id: "auto", grupo: "seguro", icono: "🚗", nombre: "Auto y moto", ruta: "Revisar la protección de tu vehículo.",
      resumen: "Protección para tu vehículo y para terceros.",
      detalles: ["Opciones para auto y para moto.", "Se explican coberturas y deducibles.", "Cotización según el vehículo."] },
    { id: "gmm", grupo: "seguro", icono: "🩺", nombre: "Gastos médicos", ruta: "Prepararte ante gastos de salud importantes.",
      resumen: "Apoyo ante gastos por enfermedad o accidente.",
      detalles: ["Opciones individuales y familiares.", "Se aclaran coberturas, exclusiones y condiciones.", "Te ayudo a comparar alternativas."] },
    { id: "accidentes", grupo: "seguro", icono: "🛡️", nombre: "Accidentes personales", ruta: "Contar con respaldo frente a accidentes.",
      resumen: "Respaldo ante accidentes en tu día a día.",
      detalles: ["Útil para personas activas o con actividad laboral exigente.", "Se explican las coberturas disponibles.", "Puede complementar otros seguros."] },
    { id: "viaje", grupo: "seguro", icono: "✈️", nombre: "Seguro de viaje", ruta: "Viajar con más tranquilidad.",
      resumen: "Tranquilidad para viajar dentro y fuera del país.",
      detalles: ["Coberturas para imprevistos durante el viaje.", "Opciones para viajes individuales o familiares.", "Pregunta antes de salir."] },
    { id: "hogar", grupo: "seguro", icono: "🏡", nombre: "Seguro de hogar", ruta: "Cuidar tu casa y lo que hay dentro.",
      resumen: "Protección para tu casa y tus pertenencias.",
      detalles: ["Opciones para casa o departamento.", "Se revisan coberturas y condiciones.", "Se ajusta a tu vivienda."] },
    { id: "empresas", grupo: "seguro", icono: "🏢", nombre: "Seguros para empresas", ruta: "Proteger tu negocio, tu equipo y tu patrimonio.",
      resumen: "Protección para tu negocio y tu equipo de trabajo.",
      detalles: ["Soluciones según el giro y tamaño de tu empresa.", "Opciones para personas y bienes del negocio.", "Cuéntame tu caso para orientarte."] },
    { id: "fianzas", grupo: "fianza", icono: "📑", nombre: "Fianzas", ruta: "Cumplir con garantías que te piden en contratos o trámites.",
      resumen: "Garantías que respaldan el cumplimiento de contratos y obligaciones.",
      detalles: ["Útil para proveedores, contratistas y personas con trámites.", "Te oriento sobre qué tipo de fianza puedes necesitar.", "Cuéntame tu caso para revisar requisitos."] }
  ],

  /* ---------- 13. SOBRE MIRIAM ---------- */
  sobreMi: {
    visible: true,
    nav: "Sobre mí",
    titulo: "Hola, soy Miriam",
    // Edita estos párrafos con tu historia. Evita datos que no puedas comprobar.
    parrafos: [
      "Creo que hablar de dinero no tiene que ser complicado ni intimidante. Mi trabajo es acompañarte con un lenguaje claro para que entiendas tus opciones y tomes decisiones con confianza.",
      "Desde León, Guanajuato, ayudo a personas y familias a planear su retiro, conocer alternativas de inversión y proteger lo que más aman."
    ],
    valores: ["Claridad", "Cercanía", "Respeto por tus tiempos"],
    // Datos opcionales: se muestran solo si los llenas. Ejemplos (quita // para usarlos):
    datos: [
      // { etiqueta: "Años de experiencia", valor: "…" },
      // { etiqueta: "Certificaciones", valor: "…" }
    ]
  },

  /* ---------- 14. PASOS PARA SOLICITAR ASESORÍA ---------- */
  pasos: {
    visible: true,
    nav: "Cómo empezar",
    titulo: "Empezar es sencillo",
    lista: [
      { titulo: "Cuéntame qué buscas", texto: "Llena el formulario o escríbeme por WhatsApp con tu duda o tu meta." },
      { titulo: "Agendamos tu cita", texto: "Elegimos un horario que te acomode, en persona o a distancia." },
      { titulo: "Conversamos sin presión", texto: "Revisamos tu situación y te explico tus opciones con claridad." },
      { titulo: "Tú decides", texto: "Avanzas a tu ritmo, con la información que necesitas." }
    ]
  },

  /* ---------- 15. PREGUNTAS FRECUENTES ---------- */
  faq: {
    visible: true,
    nav: "Preguntas",
    titulo: "Preguntas frecuentes",
    lista: [
      { p: "¿Tengo que saber de finanzas para pedir asesoría?", r: "No. Empezamos desde donde estás y te explico todo con palabras sencillas." },
      { p: "¿Cuánto cuesta agendar una cita?", r: "Escríbeme o llena el formulario y te explico cómo funciona la asesoría." },
      { p: "¿Puedo pedir información solo de un seguro?", r: "Claro. Puedes solicitar información de un solo tema o de varios." },
      { p: "¿Atiendes fuera de León?", r: "Escríbeme por WhatsApp y vemos la mejor forma de atenderte." },
      { p: "¿Me garantizas rendimientos?", r: "No. Ninguna inversión puede garantizarlos. Te explico alternativas y riesgos para que decidas con información." }
    ]
  },

  /* ---------- 16. CIERRE Y PIE DE PÁGINA ---------- */
  cierre: {
    visible: true,
    titulo: "Tus sueños merecen un plan",
    texto: "Agenda tu cita hoy mismo y empecemos a construirlo juntas.",
    botonPrincipal: "Agenda tu cita",
    botonWhatsapp: "Escríbeme por WhatsApp"
  },
  pie: {
    descripcion: "Asesoría financiera, retiro, inversiones, seguros y fianzas.",
    aviso: "La información de este sitio es general y educativa. No constituye una recomendación financiera personalizada ni garantiza rendimientos. Condiciones, coberturas y requisitos de cada producto se explican durante la asesoría.",
    derechos: "Todos los derechos reservados."
  }
};
