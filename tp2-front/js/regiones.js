/* =====================================================================
   regiones.js — Página "Regiones" (interfaz estilo W3Schools)
   - Las provincias (nombre, id, centroide) se piden a la API Georef AR.
   - La región y la info de cultivos son datos propios del proyecto.
   ===================================================================== */

/*__________________Datos de cultivos por provincia____________________________*/
const cultivosPorProvincia = {
  "Buenos Aires": { cultivo: "Soja, trigo y maíz", categoria: "Granos y oleaginosas", region: "Pampeana", campaña: "Gruesa y fina", descripcion: "Núcleo agrícola central con altísima producción de cereales, oleaginosas y horticultura intensiva." },
  "Catamarca": { cultivo: "Nogal, olivo y vid", categoria: "Fruticultura", region: "NOA", campaña: "Verano / Otoño", descripcion: "Valles de altura y oasis irrigados destacados por nueces, aceitunas y vinos de altura." },
  "Chaco": { cultivo: "Algodón y soja", categoria: "Cultivos industriales", region: "NEA", campaña: "Primavera / Verano", descripcion: "Referente del algodón argentino junto con expansión de oleaginosas y girasol." },
  "Chubut": { cultivo: "Cerezas y frutas finas", categoria: "Fruticultura", region: "Patagonia", campaña: "Primavera / Verano", descripcion: "Valles patagónicos reconocidos por cerezas de exportación y forrajes." },
  "Ciudad Autónoma de Buenos Aires": { cultivo: "Agricultura urbana y viveros", categoria: "Economía regional", region: "Pampeana", campaña: "Todo el año", descripcion: "Entorno urbano enfocado en huertas agroecológicas y viveros ornamentales." },
  "Córdoba": { cultivo: "Soja, maíz y maní", categoria: "Granos y oleaginosas", region: "Pampeana", campaña: "Gruesa", descripcion: "Líder nacional en producción de maní y uno de los mayores polos de soja y maíz." },
  "Corrientes": { cultivo: "Arroz, yerba mate y cítricos", categoria: "Cultivos industriales", region: "NEA", campaña: "Verano / Anual", descripcion: "Principal provincia arrocera del país, combinada con yerba mate y citrus." },
  "Entre Ríos": { cultivo: "Soja, arroz y cítricos", categoria: "Granos y oleaginosas", region: "Pampeana / Litoral", campaña: "Gruesa y verano", descripcion: "Suelos fértiles entre ríos con soja, trigo, arroz y cítricos dulces." },
  "Formosa": { cultivo: "Banana, mandioca y algodón", categoria: "Cultivos industriales", region: "NEA", campaña: "Todo el año", descripcion: "Clima subtropical favorable para producción bananera, mandioca y algodón." },
  "Jujuy": { cultivo: "Caña de azúcar y tabaco", categoria: "Cultivos industriales", region: "NOA", campaña: "Zafra / Invierno", descripcion: "Valles templados y ramales productivos con caña de azúcar y tabaco Virginia." },
  "La Pampa": { cultivo: "Trigo, girasol y soja", categoria: "Granos y oleaginosas", region: "Pampeana", campaña: "Fina y gruesa", descripcion: "Transición pampeana con marcada producción de trigo, girasol y maíz." },
  "La Rioja": { cultivo: "Vid, olivo y nogal", categoria: "Vitivinicultura", region: "NOA", campaña: "Verano / Otoño", descripcion: "Valles áridos con irrigación donde sobresalen el torrontés riojano y el olivo." },
  "Mendoza": { cultivo: "Vid", categoria: "Vitivinicultura", region: "Cuyo", campaña: "Vendimia (Verano)", descripcion: "Principal motor vitivinícola de Argentina, complementado con frutales de carozo y ajo." },
  "Misiones": { cultivo: "Yerba mate y té", categoria: "Cultivos industriales", region: "NEA", campaña: "Todo el año / Zafra", descripcion: "Suelos colorados y clima subtropical que posicionan a la provincia como líder en yerba mate y té." },
  "Neuquén": { cultivo: "Pera, manzana y frutas finas", categoria: "Fruticultura", region: "Patagonia", campaña: "Verano / Otoño", descripcion: "Valles irrigados con producción frutícola de pepita, frutos rojos y viñedos." },
  "Río Negro": { cultivo: "Pera y manzana", categoria: "Fruticultura", region: "Patagonia", campaña: "Verano / Otoño", descripcion: "Emblema frutícola del Alto Valle y Valle Medio, referente en peras y manzanas." },
  "Salta": { cultivo: "Poroto, vid de altura y tabaco", categoria: "Economía regional", region: "NOA", campaña: "Otoño / Invierno", descripcion: "Producción legumbrera, viñedos de altura en los Valles Calchaquíes y tabaco." },
  "San Juan": { cultivo: "Vid y olivo", categoria: "Vitivinicultura", region: "Cuyo", campaña: "Verano", descripcion: "Segundo polo vitivinícola del país y destacado productor de uvas y aceitunas." },
  "San Luis": { cultivo: "Maíz, soja y girasol", categoria: "Granos y oleaginosas", region: "Cuyo", campaña: "Gruesa", descripcion: "Producción agrícola extensiva de granos en llanuras y valles productivos." },
  "Santa Cruz": { cultivo: "Frutillas y cultivos de invernadero", categoria: "Economía regional", region: "Patagonia", campaña: "Verano", descripcion: "Producción adaptada al clima austral con cultivos intensivos y frutas finas." },
  "Santa Fe": { cultivo: "Soja y maíz", categoria: "Granos y oleaginosas", region: "Pampeana", campaña: "Gruesa", descripcion: "Corazón agrícola y agroindustrial con altísima producción de soja y maíz." },
  "Santiago del Estero": { cultivo: "Soja, algodón y maíz", categoria: "Granos y oleaginosas", region: "NOA", campaña: "Gruesa", descripcion: "Expansión agrícola en granos, algodón y forrajes con riego y lluvias estacionales." },
  "Tierra del Fuego, Antártida e Islas del Atlántico Sur": { cultivo: "Cultivos bajo cubierta y turba", categoria: "Economía regional", region: "Patagonia", campaña: "Primavera / Verano", descripcion: "Producción hortícola en invernaderos y recursos regionales en clima subantártico." },
  "Tucumán": { cultivo: "Caña de azúcar y limón", categoria: "Cultivos industriales", region: "NOA", campaña: "Zafra / Otoño-Invierno", descripcion: "Referente histórico de la producción azucarera y principal productor de limón." }
};


/*__________________Datos de las regiones____________________________*/
const regiones = [
  {
    id: "pampeana",
    nombre: "Región Pampeana",
    corto: "Pampeana",
    icono: "fa-wheat-awn",
    clima: "Templado húmedo",
    relieve: "Llanura fértil",
    resumen: "Es la gran llanura del centro del país. Sus suelos profundos y fértiles y su clima templado la convierten en la zona agrícola más importante de Argentina.",
    dato: "En la Pampa se habla de campaña fina (trigo y cebada, que se siembran en otoño-invierno) y campaña gruesa (soja, maíz y girasol, que se siembran en primavera).",
    provincias: ["Buenos Aires", "Ciudad Autónoma de Buenos Aires", "Córdoba", "Entre Ríos", "La Pampa", "Santa Fe"],
    cultivos: ["Soja", "Maíz", "Trigo", "Girasol", "Cebada", "Maní"]
  },
  {
    id: "noa",
    nombre: "Noroeste Argentino (NOA)",
    corto: "NOA",
    icono: "fa-mountain-sun",
    clima: "Subtropical y árido de altura",
    relieve: "Valles, quebradas y puna",
    resumen: "Combina quebradas, valles, puna y selva de yungas. Los valles irrigados y las zonas de altura permiten cultivos tropicales y templados en un mismo territorio.",
    dato: "Tucumán concentra gran parte de la producción nacional de limón, y los Valles Calchaquíes son famosos por sus vinos de altura.",
    provincias: ["Catamarca", "Jujuy", "La Rioja", "Salta", "Santiago del Estero", "Tucumán"],
    cultivos: ["Caña de azúcar", "Limón", "Tabaco", "Poroto", "Vid de altura", "Nogal", "Olivo"]
  },
  {
    id: "nea",
    nombre: "Noreste Argentino (NEA)",
    corto: "NEA",
    icono: "fa-leaf",
    clima: "Subtropical húmedo",
    relieve: "Llanura, esteros y selva",
    resumen: "Es la región de los grandes ríos, los esteros y los suelos colorados. Su clima cálido y húmedo favorece los cultivos subtropicales.",
    dato: "Misiones y Corrientes son grandes productoras de yerba mate, la planta con la que se prepara el mate que se toma en todo el país.",
    provincias: ["Chaco", "Corrientes", "Formosa", "Misiones"],
    cultivos: ["Yerba mate", "Té", "Arroz", "Algodón", "Cítricos", "Banana", "Mandioca"]
  },
  {
    id: "cuyo",
    nombre: "Región de Cuyo",
    corto: "Cuyo",
    icono: "fa-wine-bottle",
    clima: "Árido y soleado",
    relieve: "Cordillera, precordillera y llanura",
    resumen: "Al pie de la cordillera de los Andes, es una región seca donde la agricultura depende del riego con agua de deshielo. Los oasis irrigados concentran la producción.",
    dato: "Mendoza es el principal polo vitivinícola del país y San Juan el segundo; la vendimia se realiza hacia fines del verano.",
    provincias: ["Mendoza", "San Juan", "San Luis"],
    cultivos: ["Vid", "Olivo", "Ajo", "Frutales de carozo", "Maíz", "Girasol"]
  },
  {
    id: "patagonia",
    nombre: "Región Patagónica",
    corto: "Patagonia",
    icono: "fa-apple-whole",
    clima: "Frío y seco",
    relieve: "Meseta, estepa y valles",
    resumen: "Es la región más austral: una estepa fría y ventosa donde los valles irrigados por ríos que bajan de la cordillera permiten cultivar frutas y forrajes.",
    dato: "El Alto Valle de Río Negro y Neuquén es uno de los grandes polos de peras y manzanas del país.",
    provincias: ["Chubut", "Neuquén", "Río Negro", "Santa Cruz", "Tierra del Fuego, Antártida e Islas del Atlántico Sur"],
    cultivos: ["Pera", "Manzana", "Cerezas", "Frutas finas", "Frutillas", "Cultivos bajo cubierta"]
  }
];

const paginas = ["introduccion", ...regiones.map((r) => r.id)];

/*__________________Configuración de la API y estado____________________________*/
const API_PROVINCIAS_BASE = "https://apis.datos.gob.ar/georef/api/v2.0/provincias";
const API_PROVINCIAS_URL = `${API_PROVINCIAS_BASE}?max=50`;

let provinciasApi = {};      // clave: nombre normalizado -> provincia de la API
let totalProvinciasApi = 0;
let estadoApi = "cargando";  // "cargando" | "ok" | "error"

const contenido = document.querySelector("#contenido-regiones");
const listaIndice = document.querySelector("#lista-indice-regiones");
const sidebar = document.querySelector("#sidebar-regiones");
const btnAbrirSidebar = document.querySelector("#btn-menu-sidebar");
const btnCerrarSidebar = document.querySelector("#btn-cerrar-sidebar");
const backdrop = document.querySelector("#sidebar-backdrop");

/*__________________Funciones de ayuda____________________________*/
function normalizarTexto(texto = "") {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function escaparHtml(texto = "") {
  return String(texto).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function obtenerPaginaActual() {
  const hash = window.location.hash.replace("#", "");
  return paginas.includes(hash) ? hash : "introduccion";
}

function toggleSidebar(abrir) {
  if (!sidebar || !backdrop) return;
  sidebar.classList.toggle("abierto", abrir);
  backdrop.classList.toggle("visible", abrir);
}

/*__________________Piezas de HTML reutilizables____________________________*/
function htmlEstadoApi() {
  if (estadoApi === "cargando") {
    return `<p class="api-estado"><i class="fa-solid fa-spinner fa-spin"></i> Consultando la API de provincias de Argentina...</p>`;
  }
  if (estadoApi === "error") {
    return `<p class="api-estado api-estado-error"><i class="fa-solid fa-triangle-exclamation"></i> No se pudo conectar con la API Georef AR. Se muestran los datos guardados en el proyecto. <button type="button" class="btn-reintentar" id="btn-reintentar">Reintentar</button></p>`;
  }
  return `<p class="api-estado api-estado-ok"><i class="fa-solid fa-circle-check"></i> Provincias cargadas desde la API Georef AR (${totalProvinciasApi} jurisdicciones)</p>`;
}

function htmlNavegacion(indice) {
  const anterior = paginas[indice - 1];
  const siguiente = paginas[indice + 1];
  return `
    <div class="tuto-nav">
      ${anterior ? `<a class="tuto-btn" href="#${anterior}"><i class="fa-solid fa-chevron-left"></i> Anterior</a>` : `<span></span>`}
      ${siguiente ? `<a class="tuto-btn" href="#${siguiente}">Siguiente <i class="fa-solid fa-chevron-right"></i></a>` : `<span></span>`}
    </div>`;
}

function htmlEjemplo(codigo, url) {
  return `
    <div class="tuto-ejemplo">
      <h3>Ejemplo</h3>
      <pre class="tuto-codigo"><code>${escaparHtml(codigo)}</code></pre>
      <a class="tuto-probar" href="${url}" target="_blank" rel="noopener noreferrer">Probalo vos mismo »</a>
    </div>`;
}

/*__________________Página: Introducción____________________________*/
function htmlIntroduccion(indice) {
  const filas = regiones.map((r) => `
    <tr>
      <td><a class="tuto-link" href="#${r.id}"><i class="fa-solid ${r.icono}"></i> ${r.nombre}</a></td>
      <td>${r.provincias.length}</td>
      <td>${r.cultivos.slice(0, 4).join(", ")}</td>
    </tr>`).join("");

  const codigo = `fetch("${API_PROVINCIAS_URL}")
  .then((res) => res.json())
  .then((datos) => console.log(datos.provincias.length));

// Resultado:
${estadoApi === "ok" ? totalProvinciasApi : "(sin conexión con la API)"}`;

  return `
    <p class="tuto-breadcrumb">Regiones › Introducción</p>
    <h1>Regiones de Argentina</h1>
    ${htmlEstadoApi()}
    ${htmlNavegacion(indice)}
    <p class="tuto-lead">Argentina suele dividirse en cinco grandes regiones productivas. Cada una tiene su clima, su relieve y sus cultivos característicos. Elegí una en el menú de la izquierda o en la tabla.</p>

    <div class="tuto-nota"><i class="fa-solid fa-lightbulb"></i><p>Los nombres de las provincias salen de la API Georef AR del Gobierno nacional. La región a la que pertenece cada una y la información de cultivos son datos propios de este proyecto.</p></div>

    <h2>Las cinco regiones</h2>
    <div class="tabla-scroll">
      <table class="tuto-tabla">
        <thead><tr><th>Región</th><th>Provincias</th><th>Cultivos típicos</th></tr></thead>
        <tbody>${filas}</tbody>
      </table>
    </div>

    <h2>¿De dónde salen las provincias?</h2>
    <p>La página hace una consulta a la API cuando se abre. Así se pide el listado completo:</p>
    ${htmlEjemplo(codigo, API_PROVINCIAS_URL)}
    ${htmlNavegacion(indice)}`;
}

/*__________________Página: una región____________________________*/
function htmlTablaProvincias(region) {
  const filas = region.provincias.map((nombre) => {
    const info = cultivosPorProvincia[nombre];
    const api = provinciasApi[normalizarTexto(nombre)];
    return `
      <tr>
        <td><strong>${escaparHtml(api ? api.nombre : nombre)}</strong><span class="tuto-sub">${escaparHtml(info.descripcion)}</span></td>
        <td>${api ? escaparHtml(api.id) : "—"}</td>
        <td>${escaparHtml(info.cultivo)}</td>
        <td><span class="badge-rubro">${escaparHtml(info.categoria)}</span></td>
        <td>${escaparHtml(info.campaña)}</td>
      </tr>`;
  }).join("");

  return `
    <div class="tabla-scroll">
      <table class="tuto-tabla">
        <thead><tr><th>Provincia</th><th>ID Georef</th><th>Cultivos</th><th>Categoría</th><th>Campaña</th></tr></thead>
        <tbody>${filas}</tbody>
      </table>
    </div>`;
}

function htmlEjemploRegion(region) {
  const nombre = region.provincias[0];
  const api = provinciasApi[normalizarTexto(nombre)];
  const url = `${API_PROVINCIAS_BASE}?nombre=${encodeURIComponent(nombre)}`;
  let resultado = "(sin conexión con la API)";
  if (api) resultado = JSON.stringify({ id: api.id, nombre: api.nombre, centroide: api.centroide }, null, 2);
  const codigo = `fetch("${url}")
  .then((res) => res.json())
  .then((datos) => console.log(datos.provincias[0]));

// Resultado:
${resultado}`;
  return htmlEjemplo(codigo, url);
}

function htmlRegion(region, indice) {
  const chips = region.cultivos.map((c) => `<li>${escaparHtml(c)}</li>`).join("");
  return `
    <p class="tuto-breadcrumb">Regiones › ${region.corto}</p>
    <h1><i class="fa-solid ${region.icono}"></i> ${region.nombre}</h1>
    ${htmlEstadoApi()}
    ${htmlNavegacion(indice)}
    <p class="tuto-lead">${region.resumen}</p>

    <div class="tuto-datos">
      <div><span>Provincias</span><strong>${region.provincias.length}</strong></div>
      <div><span>Clima</span><strong>${region.clima}</strong></div>
      <div><span>Relieve</span><strong>${region.relieve}</strong></div>
    </div>

    <div class="tuto-nota"><i class="fa-solid fa-lightbulb"></i><p>${region.dato}</p></div>

    <h2>Provincias y cultivos</h2>
    ${htmlTablaProvincias(region)}

    <h2>Cultivos de la región</h2>
    <ul class="chips-cultivos">${chips}</ul>

    <h2>Consultar la provincia en la API</h2>
    <p>Así se pide a la API la información de <strong>${escaparHtml(region.provincias[0])}</strong>:</p>
    ${htmlEjemploRegion(region)}
    ${htmlNavegacion(indice)}`;
}

/*__________________Render principal y menú lateral____________________________*/
function renderizarSidebar(paginaActiva) {
  if (!listaIndice) return;
  const itemIntro = `<li><a href="#introduccion" class="${paginaActiva === "introduccion" ? "active" : ""}"><span><i class="fa-solid fa-book-open"></i> Introducción</span><i class="fa-solid fa-chevron-right"></i></a></li>`;
  const items = regiones.map((r) => `<li><a href="#${r.id}" class="${paginaActiva === r.id ? "active" : ""}"><span><i class="fa-solid ${r.icono}"></i> ${r.corto}</span><i class="fa-solid fa-chevron-right"></i></a></li>`).join("");
  listaIndice.innerHTML = itemIntro + items;
}

function renderizarPagina() {
  if (!contenido) return;
  const id = obtenerPaginaActual();
  const indice = paginas.indexOf(id);
  const region = regiones.find((r) => r.id === id);
  contenido.innerHTML = region ? htmlRegion(region, indice) : htmlIntroduccion(indice);
  document.title = `${region ? region.nombre : "Introducción"} — Regiones — Somos Argentina`;
  renderizarSidebar(id);
}

/*__________________Conexión con la API____________________________*/
async function cargarProvincias() {
  estadoApi = "cargando";
  renderizarPagina();
  try {
    const respuesta = await fetch(API_PROVINCIAS_URL);
    if (!respuesta.ok) throw new Error(`Error HTTP ${respuesta.status}`);
    const datos = await respuesta.json();
    const lista = Array.isArray(datos.provincias) ? datos.provincias : [];
    if (lista.length === 0) throw new Error("La API no devolvió provincias");
    provinciasApi = {};
    lista.forEach((p) => { provinciasApi[normalizarTexto(p.nombre)] = p; });
    totalProvinciasApi = lista.length;
    estadoApi = "ok";
  } catch (error) {
    console.error(error);
    estadoApi = "error";
  }
  renderizarPagina();
}

/*__________________Eventos____________________________*/
window.addEventListener("hashchange", () => {
  renderizarPagina();
  toggleSidebar(false);
  window.scrollTo({ top: 0 });
});
if (contenido) contenido.addEventListener("click", (e) => {
  if (e.target.closest("#btn-reintentar")) cargarProvincias();
});
if (btnAbrirSidebar) btnAbrirSidebar.addEventListener("click", () => toggleSidebar(true));
if (btnCerrarSidebar) btnCerrarSidebar.addEventListener("click", () => toggleSidebar(false));
if (backdrop) backdrop.addEventListener("click", () => toggleSidebar(false));
document.addEventListener("DOMContentLoaded", cargarProvincias);
