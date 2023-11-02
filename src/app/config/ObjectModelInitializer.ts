import { Injectable } from '@angular/core';

@Injectable()
export class ObjectModelInitializer {

  constructor() {
  }

  // Shared

  getLocaleESForCalendar() {
    return {
      firstDayOfWeek: 1,
      dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
  };

  getLocaleENForCalendar() {
    return {
      firstDayOfWeek: 1,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: 'Today',
      clear: 'Clear'
    }
  };

  getDataPorcentajeURIWeb(code: string, symbol: string) {
    return {
      codigo: code,
      simbolo: symbol
    }
  };

  getDataEnumerado() {
    return {
      label: "",
      value: 0
    }
  }

  getDataMessage() {
    return {
      // info, success, warning, danger
      severity: "",
      // Title of MSG
      summary: "",
      // Description of MSG
      detail: ''
    }
  };

  getDataRequestEmailDtoModel() {
    return {
      desde: "",
      para: [],
      asunto: "",
      parametros: []
    }
  };

  getDataModeloTablas() {
    return {
      // Campo de la tabla
      field: "",
      // Encabezado
      header: ''
    }
  };

  initializerMenuModel() {
    return {
      index: 0,
      title: "",
      subtitle: "",
      link: "",
      icon: "",
      active: false,
      disable: false,
      severity: ""
    }
  };

  // Identity

  getDataServiceSesion() {
    return {
      // data
      phase: "",
      usuarioSesion: "",
      usuarioRegister: "",
      tokenSesion: "",
      decodedToken: "",
      expirationDate: "",
      idioma: "",

      // Excepciones
      mensajeError403: "",
      mensajeError404: "",
      mensajeError500: "",

      // Mensajes
      mensajeConfirmacion: ''
    }
  };

  getTokenSesion() {
    return {
      name: "",
      token: ''
    }
  };

  // Bill Model

  initializerConceptBillModel() {
    return {
      code: "",
      concept: "",
      description: "",
      measurement_unit: "",
      product_type: "",
      quantity: 0,
      amount: 0,
      total_amount: 0
    }
  };

  initializerCompanyBillModel() {
    return {
      business_name: "",
      document_number: "",
      document_type: ""
    }
  };

  initializerClientBillModel() {
    return {
      name: "",
      document_number: "",
      document_type: ""
    }
  };

  initializerProviderBillModel() {
    return {
      name: "",
      document_number: "",
      document_type: ""
    }
  };

  initializerTaxModel() {
    return {
      description: "",
      amount: 0
    }
  };

  initializerBillModel() {
    return {
      _id: null,
      bill_id: 0,
      status: "",
      description: "",
      city: "",
      address: "",
      concepts: [],
      taxes: [],
      bill_type: "",
      payment_method: "E",
      bill_date: null,
      expiry_date: null,
      company: this.initializerCompanyBillModel(),
      provider: this.initializerProviderBillModel(),
      client: this.initializerClientBillModel(),

      // Auditoria
      create_user: "",
      update_user: "",
      create_date: null,
      update_date: null,
      _class: null
    }
  };

  // Product Category Model
  initializerProductCategoryModel() {
    return {
      _id: null,
      code: "",
      name: "",
      description: "",
      color: "#30b3ed",
      image: "",

      // Auditoria
      create_user: "",
      update_user: "",
      create_date: null,
      update_date: null,
      _class: null
    }
  };

  // Provider Model
  initializerProviderModel() {
    return {
      _id: null,
      name: "",
      info: this.initializerContactProviderModel(),
      document_number: "",
      document_type: "CEDULA",
      image: "",

      // Auditoria
      create_user: "",
      update_user: "",
      create_date: null,
      update_date: null,
      _class: null
    }
  };

  initializerContactProviderModel() {
    return {
      telephone: "",
      email: "",
      address: "",
      city: ""
    }
  };

  // Client Model
  initializerClientModel() {
    return {
      _id: null,
      name: "",
      info: this.initializerContactModel(),
      document_number: "",
      document_type: "CEDULA",
      image: "",

      // Auditoria
      create_user: "",
      update_user: "",
      create_date: null,
      update_date: null,
      _class: null
    }
  };

  // Contact
  initializerContactModel() {
    return {
      telephone: "",
      email: "",
      address: "",
      city: ""
    }
  };

  // Product Model
  initializerProductModel() {
    return {
      _id: null,
      code: "",
      name: "",
      description: "",
      stock_min: 0,
      stock_max: 0,
      type: "ARTICLE",
      sale_price: 0,
      price: 0,
      image: "",

      // Auditoria
      create_user: "",
      update_user: "",
      create_date: null,
      update_date: null,
      _class: null
    }
  };

}