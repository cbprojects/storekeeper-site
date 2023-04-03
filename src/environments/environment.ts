// import 'zone.js/plugins/zone-error'; // Included with Angular CLI.

export var HOST = 'http://localhost:8080';
export var SYSTEM = 'http://localhost:4200';

export const environment = {
  production: false,
  version: "1.0.2",
  // URL'S + Info del Sistema
  urlDomain: `${SYSTEM}/`,
  urlRestService: `${HOST}/`,
  urlRestOauth: `${HOST}/oauth/token`,
  urlVCode: `${SYSTEM}/vCode/`,
  // Products Categories
  urlFindProductCategories: `${HOST}/product_category/v1/`,
  // Providers
  urlFindProviders: `${HOST}/provider/v1/`,
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
  phaseEdit: 'edit',
  phaseCreate: 'create',
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