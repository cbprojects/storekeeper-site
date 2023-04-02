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

  getDataPorcentajeURIWeb(code: String, symbol: String) {
    return {
      codigo: code,
      simbolo: symbol
    }
  };

  getDataEnumerado() {
    return {
      label: '',
      value: 0
    }
  }

  getDataMessage() {
    return {
      // info, success, warning, danger
      severity: '',
      // Title of MSG
      summary: '',
      // Description of MSG
      detail: ''
    }
  };

  getDataRequestEmailDtoModel() {
    return {
      desde: '',
      para: [],
      asunto: '',
      parametros: []
    }
  };

  getDataModeloTablas() {
    return {
      // Campo de la tabla
      field: '',
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
      phase: '',
      usuarioSesion: '',
      usuarioRegister: '',
      tokenSesion: '',
      decodedToken: '',
      expirationDate: '',
      idioma: '',

      // Excepciones
      mensajeError403: '',
      mensajeError404: '',
      mensajeError500: '',

      // Mensajes
      mensajeConfirmacion: ''
    }
  };

  getTokenSesion() {
    return {
      name: '',
      token: ''
    }
  };

  // Core Model

  initializerBillConceptModel() {
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

  initializerBillCompanyModel() {
    return {
      business_name: "",
      document_number: "",
      document_type: ""
    }
  };

  initializerBillClientModel() {
    return {
      name: "",
      document_number: "",
      document_type: ""
    }
  };

  initializerBillProviderModel() {
    return {
      name: "",
      document_number: "",
      document_type: ""
    }
  };

  initializerBillModel() {
    return {
      _id: "",
      bill_id: 0,
      status: "",
      description: "",
      city: "",
      address: "",
      concepts: [],
      taxes: [],
      bill_type: "",
      payment_method: "",
      bill_date: new Date(),
      expiry_date: new Date(),
      company: this.initializerBillCompanyModel(),
      initializerBillProviderModel: this.initializerBillProviderModel(),
      client: this.initializerBillClientModel(),

      // Auditoria
      create_user: '',
      update_user: '',
      create_date: new Date(),
      update_date: new Date(),
      _class: ""
    }
  };

  getDataContactoModel() {
    return {
      idContacto: 0,
      nombreEmpresa: '',
      telefonoEmpresa: '',
      descripcionEmpresa: '',
      nombreContacto: '',
      correoContacto: '',
      cargoContacto: '',
      telefonoContacto: '',
      ciudadContacto: '',
      procesoContacto: 0,
      industria: 0,

      // Auditoria
      estado: 0,
      fechaCreacion: '',
      fechaActualizacion: '',
      usuarioCreacion: '',
      usuarioActualizacion: ''
    }
  };

  getDataUsuarioModel() {
    return {
      idUsuario: 0,
      usuario: '',
      clave: '',
      correoUsuario: '',

      // Auditoria
      estado: 0,
      fechaCreacion: '',
      fechaActualizacion: '',
      usuarioCreacion: '',
      usuarioActualizacion: ''
    }
  };

  getDataDTOContactoModel() {
    return {
      seleccionado: false,
      contactoTB: this.getDataContactoModel()
    }
  };

  getDataEmpresaModel() {
    return {
      idEmpresa: 0,
      nombre: '',
      telefono: '',
      descripcion: '',
      correo: '',
      paginaWeb: '',
      ciudad: '',
      industria: 0,
      color: '',

      // Auditoria
      estado: 0,
      fechaCreacion: '',
      fechaActualizacion: '',
      usuarioCreacion: '',
      usuarioActualizacion: ''
    }
  };

  getDataRequestFacturacionDTOModel() {
    return {
      listaFacturacion: [],
      tipoFactura: 0,
      total: 0
    }
  }

  getDataFacturaConsultaDTOModel() {
    return {
      numeroFactura: 0,
      total: 0,
      tipoFactura: {},
      listaFacturas: []
    }
  }

  getDataReporteFacturaDTOModel() {
    return {
      numeroFactura: 0,
      empresaTB: this.getDataEmpresaModel(),
      contactoTB: this.getDataContactoModel()
    }
  }

}