export const HOST = 'https://cbaeneprojects.com:8482/storekeeper-server';
export const SYSTEM = 'https://www.storekeeper.cbaeneprojects.com';

export const environment = {
  production: true,
  version: "1.0.6",
  // URL'S + Info del Sistema
  urlDomain: `${SYSTEM}/`,
  urlRestService: `${HOST}/`,
  urlRestOauth: `${HOST}/oauth/token`,
  urlVCode: `${SYSTEM}/vCode/`,
  // Assignments
  urlAssignments: `${HOST}/assignment/v1/`,
  // Bills
  urlBills: `${HOST}/bill/v1/`,
  // Clients
  urlClients: `${HOST}/client/v1/`,
  // Companies
  urlCompanies: `${HOST}/company/v1/`,
  // Employees
  urlEmployees: `${HOST}/employee/v1/`,
  // Products
  urlProducts: `${HOST}/product/v1/`,
  // Products Categories
  urlProductCategories: `${HOST}/product_category/v1/`,
  // Providers
  urlProviders: `${HOST}/provider/v1/`,
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
  estadoActivoNumstring: 1,
  estadoInactivoNumstring: 0
};