export var HOST = 'https://cbaeneprojects.com:8443/Storekeeper';
export var SYSTEM = 'https://www.storekeeper.cbaeneprojects.com';

export const environment = {
  production: true,
  version: "1.0.2",
  // URL'S + Info del Sistema
  urlDomain: `${SYSTEM}/`,
  urlRestService: `${HOST}/`,
  urlRestOauth: `${HOST}/oauth/token`,
  urlVCode: `${SYSTEM}/vCode/`,
  // Users
  urlLoginUsuario: `${HOST}/central/contactos/loginUsuario`,
  urlRestaurarClave: `${HOST}/central/contactos/restaurarClave`,
  urlModificarClaveUsuario: `${HOST}/central/contactos/modificarClaveUsuario`,
  // Files
  urlEnviarEmailContacto: `${HOST}/central/contactos/archivos/enviarEmailContacto`,
  urlEnviarEmailContactoCliente: `${HOST}/central/contactos/archivos/emailContactoCliente`,
  urlEnviarEmailFactura: `${HOST}/central/contactos/archivos/enviarEmailFactura`,
  urlGenerarReporteFactura: `${HOST}/central/contactos/reportes/generarReporteFactura`,
  // Clients
  urlContarContactos: `${HOST}/central/contactos/contarContactos`,
  urlConsultarContactosPorFiltros: `${HOST}/central/contactos/consultarContactosPorFiltros`,
  urlCrearContacto: `${HOST}/central/contactos/crearContacto`,
  urlModificarContacto: `${HOST}/central/contactos/modificarContacto`,
  // Companies
  urlContarEmpresas: `${HOST}/central/contactos/contarEmpresas`,
  urlConsultarEmpresasPorFiltros: `${HOST}/central/contactos/consultarEmpresasPorFiltros`,
  urlCrearEmpresa: `${HOST}/central/contactos/crearEmpresa`,
  urlModificarEmpresa: `${HOST}/central/contactos/modificarEmpresa`,
  // Bills
  urlContarFacturas: `${HOST}/central/contactos/contarFacturas`,
  urlConsultarFacturasPorFiltros: `${HOST}/central/contactos/consultarFacturasPorFiltros`,
  urlCrearFactura: `${HOST}/central/contactos/crearFactura`,
  urlModificarFactura: `${HOST}/central/contactos/modificarFactura`,
  urlEliminarFactura: `${HOST}/central/contactos/eliminarFactura`,
  urlContarConceptosFacturas: `${HOST}/central/contactos/contarConceptosFacturas`,
  urlConsultarConceptosFacturasPorFiltros: `${HOST}/central/contactos/consultarConceptosFacturasPorFiltros`,
  urlCrearConceptoFactura: `${HOST}/central/contactos/crearConceptoFactura`,
  urlModificarConceptoFactura: `${HOST}/central/contactos/modificarConceptoFactura`,
  // Params
  tokenRecordarClave: '3vkd3ugAOnnXZGfUER8',
  correoRemitente: 'XXX@gmail.com',
  tokenUsernameAUTH: 'BaeneApp',
  tokenPasswordAUTH: 'Baene2021codex',
  tokenNameAUTH: 'access_token',
  codigoADMIN: 'RMRADM',
  // Date
  minDate: { year: 1000, month: 1, day: 1 },
  maxDate: new Date(),
  actualDate: new Date(),
  formatoFecha: 'dd/mm/yy',
  rangoYears: '1900:3000',
  // Misc
  idiomaEs: 1,
  idiomaEn: 2,
  phaseAdd: 'add',
  phaseDelete: 'delete',
  phaseSearch: 'search',
  phaseEdit: 'edit',
  phasePlus: 'plus',
  tipoCampoTexto: 1,
  tipoCampoEnum: 2,
  disabled: 'disabled',
  readOnly: 'readOnly',
  severity: ['info', 'success', 'warn', 'error'],
  actionModal: { 'show': 1, 'hidde': 2 },
  collectionSize: 0,
  maxSize: 1,
  rotate: true,
  pageSize: 1,
  menuConfiguracion: "C",
  menuAdministracion: "A",
  menuInventario: "I",
  menuAgenda: "G",
  menuMovimientos: "M",
  estadoActivoNumString: 1,
  estadoInactivoNumString: 0
};