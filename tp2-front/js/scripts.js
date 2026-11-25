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

const API_PROVINCIAS_URL = "https://apis.datos.gob.ar/georef/api/v2.0/provincias?max=50";
const API_DEPARTAMENTOS_URL = "https://apis.datos.gob.ar/georef/api/v2.0/departamentos";
let provinciasCargadas = [];
const departamentosCache = {};

const contenedorProvincias = document.querySelector("#contenedor-provincias");
const listaIndiceProvincias = document.querySelector("#lista-indice-provincias");
const estadoCarga = document.querySelector("#estado-carga");
const contadorResultados = document.querySelector("#contador-resultados");
const buscadorInput = document.querySelector("#buscador-provincia");
const filtroCategoria = document.querySelector("#filtro-categoria");
const sidebar = document.querySelector("#sidebar-provincias");
const btnAbrirSidebar = document.querySelector("#btn-menu-sidebar");
const btnCerrarSidebar = document.querySelector("#btn-cerrar-sidebar");
const backdrop = document.querySelector("#sidebar-backdrop");

function normalizarTexto(texto = "") {
  return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}
function crearSlug(texto = "") {
  return normalizarTexto(texto).replace(/[^a-z0-9]+/g, "-");
}
function obtenerCultivoDeProvincia(nombreApi) {
  if (cultivosPorProvincia[nombreApi]) return cultivosPorProvincia[nombreApi];
  const n = normalizarTexto(nombreApi);
  const found = Object.entries(cultivosPorProvincia).find(([k]) => normalizarTexto(k) === n);
  return found ? found[1] : { cultivo: "Producción agrícola regional", categoria: "Economía regional", region: "Argentina", campaña: "Anual", descripcion: "Producción vinculada a la jurisdicción." };
}
function toggleSidebar(abrir) {
  if (!sidebar || !backdrop) return;
  sidebar.classList.toggle("abierto", abrir);
  backdrop.classList.toggle("visible", abrir);
}
function renderizarIndiceLateral(lista) {
  if (!listaIndiceProvincias) return;
  listaIndiceProvincias.innerHTML = lista.map((p) => `<li><a href="#prov-${p.slug}" class="link-indice-provincia"><span>${p.nombre}</span><i class="fa-solid fa-chevron-right"></i></a></li>`).join("");
  document.querySelectorAll(".link-indice-provincia").forEach((a) => a.addEventListener("click", () => toggleSidebar(false)));
}
function renderizarTarjetas(lista) {
  if (!contenedorProvincias) return;
  if (contadorResultados) contadorResultados.textContent = `${lista.length} ${lista.length === 1 ? "provincia" : "provincias"}`;
  if (lista.length === 0) {
    contenedorProvincias.innerHTML = `<div class="mensaje-vacio"><h3>No se encontraron resultados</h3><p>Probá con otro término o categoría.</p></div>`;
    return;
  }
  contenedorProvincias.innerHTML = lista.map((prov) => `
    <article id="prov-${prov.slug}" class="card-provincia">
      <div>
        <div class="card-top"><h3 class="card-titulo">${prov.nombre}</h3><span class="card-region">${prov.region}</span></div>
        <div class="cultivo-box" style="margin-top:12px;"><span class="cultivo-label">Cultivo por excelencia</span><p class="cultivo-nombre">${prov.cultivo}</p></div>
        <p class="card-descripcion" style="margin-top:12px;">${prov.descripcion}</p>
      </div>
      <div class="card-footer-meta"><span class="badge-rubro">${prov.categoria}</span><span>${prov.campaña}</span></div>
      <div class="card-acciones">
        <button type="button" class="btn-deptos" data-id="${prov.id}" aria-expanded="false" aria-controls="deptos-${prov.id}"><i class="fa-solid fa-list"></i> Ver departamentos</button>
        <a class="btn-mapa" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(prov.nombre + ', Argentina')}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i> Ver en el mapa</a>
      </div>
      <div id="deptos-${prov.id}" class="panel-deptos" hidden></div>
    </article>
  `).join("");
}
async function obtenerDepartamentos(idProvincia) {
  if (departamentosCache[idProvincia]) return departamentosCache[idProvincia];
  const respuesta = await fetch(`${API_DEPARTAMENTOS_URL}?provincia=${idProvincia}&campos=id,nombre&max=500`);
  if (!respuesta.ok) throw new Error(`Error HTTP ${respuesta.status}`);
  const datos = await respuesta.json();
  const lista = Array.isArray(datos.departamentos) ? datos.departamentos : [];
  departamentosCache[idProvincia] = lista.map((d) => d.nombre).sort((a, b) => a.localeCompare(b, "es"));
  return departamentosCache[idProvincia];
}
async function alternarDepartamentos(boton) {
  const id = boton.dataset.id;
  const panel = document.querySelector(`#deptos-${id}`);
  if (!panel) return;
  if (!panel.hidden) {
    panel.hidden = true;
    boton.setAttribute("aria-expanded", "false");
    boton.innerHTML = `<i class="fa-solid fa-list"></i> Ver departamentos`;
    return;
  }
  panel.hidden = false;
  boton.setAttribute("aria-expanded", "true");
  boton.innerHTML = `<i class="fa-solid fa-chevron-up"></i> Ocultar departamentos`;
  panel.innerHTML = `<p class="deptos-estado"><i class="fa-solid fa-spinner fa-spin"></i> Consultando departamentos...</p>`;
  try {
    const nombres = await obtenerDepartamentos(id);
    if (nombres.length === 0) {
      panel.innerHTML = `<p class="deptos-estado">La API no devolvió departamentos para esta provincia.</p>`;
      return;
    }
    panel.innerHTML = `<p class="deptos-titulo">${nombres.length} ${nombres.length === 1 ? "departamento" : "departamentos"}</p><ul class="lista-deptos">${nombres.map((n) => `<li>${n}</li>`).join("")}</ul>`;
  } catch (error) {
    console.error(error);
    panel.innerHTML = `<p class="deptos-estado deptos-error"><i class="fa-solid fa-triangle-exclamation"></i> No se pudieron cargar los departamentos.</p>`;
  }
}
function aplicarFiltros() {
  const termino = normalizarTexto(buscadorInput ? buscadorInput.value : "");
  const categoriaSeleccionada = filtroCategoria ? filtroCategoria.value : "TODAS";
  const filtradas = provinciasCargadas.filter((prov) => {
    const coincideTexto = normalizarTexto(prov.nombre).includes(termino) || normalizarTexto(prov.cultivo).includes(termino) || normalizarTexto(prov.region).includes(termino) || normalizarTexto(prov.categoria).includes(termino);
    const coincideCategoria = categoriaSeleccionada === "TODAS" || prov.categoria === categoriaSeleccionada;
    return coincideTexto && coincideCategoria;
  });
  renderizarTarjetas(filtradas);
}
async function inicializarAplicacion() {
  try {
    const respuesta = await fetch(API_PROVINCIAS_URL);
    if (!respuesta.ok) throw new Error(`Error HTTP ${respuesta.status}`);
    const datosApi = await respuesta.json();
    const provinciasApi = Array.isArray(datosApi.provincias) ? datosApi.provincias : [];
    provinciasCargadas = provinciasApi.map((item) => ({ id: item.id, nombre: item.nombre, centroide: item.centroide, slug: crearSlug(item.nombre), ...obtenerCultivoDeProvincia(item.nombre) })).sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
    if (estadoCarga) estadoCarga.innerHTML = `<i class="fa-solid fa-circle-check"></i> Datos cargados desde la API Georef AR`;
    renderizarIndiceLateral(provinciasCargadas);
    renderizarTarjetas(provinciasCargadas);
  } catch (error) {
    console.error(error);
    if (estadoCarga) estadoCarga.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> No se pudo conectar con la API de provincias.`;
  }
}
if (contenedorProvincias) contenedorProvincias.addEventListener("click", (e) => {
  const boton = e.target.closest(".btn-deptos");
  if (boton) alternarDepartamentos(boton);
});
if (buscadorInput) buscadorInput.addEventListener("input", aplicarFiltros);
if (filtroCategoria) filtroCategoria.addEventListener("change", aplicarFiltros);
if (btnAbrirSidebar) btnAbrirSidebar.addEventListener("click", () => toggleSidebar(true));
if (btnCerrarSidebar) btnCerrarSidebar.addEventListener("click", () => toggleSidebar(false));
if (backdrop) backdrop.addEventListener("click", () => toggleSidebar(false));
document.addEventListener("DOMContentLoaded", inicializarAplicacion);