import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { EmpresaModel } from 'src/app/model/company/empresa-model';
import { SesionService } from 'src/app/services/sesionService/sesion.service';
import { environment } from 'src/environments/environment';
import { RestService } from '../../../services/rest.service';

declare var $: any;

@Component({
  selector: 'app-q-empresa',
  templateUrl: './q-empresa.component.html',
  styleUrls: ['./q-empresa.component.scss'],
  providers: [RestService, MessageService]
})

export class QEmpresaComponent implements OnInit {
  // Objetos de Sesion
  sesion: any;

  // Objetos de datos
  listaEmpresas: EmpresaModel[] = [];
  nombreFiltro: any = "";
  cols: any[] = [];
  exportColumns: any[] = [];

  // Utilidades
  msg: any;

  rows: any;
  enumRows: any[];

  constructor(private router: Router, private route: ActivatedRoute, public restService: RestService, private confirmationService: ConfirmationService, public textProperties: TextProperties, public util: Util, public omi: ObjectModelInitializer, public enumerados: Enumerados, public sesionService: SesionService, private messageService: MessageService) {
    this.sesion = this.omi.getDataServiceSesion();
    this.msg = this.textProperties.getProperties(this.sesionService.objServiceSesion.idioma);
    this.enumRows = [5, 10, 25, 50, 100];
  }

  ngOnInit() {
    this.inicializar();
  }

  ngOnDestroy() {
  }

  ngAfterViewChecked(): void {
    $('#menu').children().removeClass('active');
    $($('#menu').children()[3]).addClass('active');
    $('.card').bootstrapMaterialDesign();
  }

  inicializar() {
    let rowsLS = localStorage.getItem("rowsLS");
    if (rowsLS !== undefined && rowsLS !== null) {
      this.rows = parseInt(rowsLS);
    } else {
      this.rows = this.enumRows[0];
    }
    this.cargarEmpresas();
    $('html').removeClass('nav-open');
    this.cols = [
      { field: 'nombre', header: this.msg.lbl_table_header_nombre_empresa },
      { field: 'ciudad', header: this.msg.lbl_table_header_ciudad },
      { field: 'correo', header: this.msg.lbl_table_header_correo_empresa },
      { field: 'telefono', header: this.msg.lbl_table_header_telefono_empresa },
      { field: 'industria', header: this.msg.lbl_table_header_industria }
    ];
    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
  }

  cargarEmpresa(empresa: EmpresaModel) {
    localStorage.setItem("rowsLS", $('.p-paginator .p-dropdown .p-dropdown-label.p-inputtext')[0].innerHTML.split('<')[0]);
    this.router.navigate(['/m-empresa']);
  }

  cargarEmpresas() {
    this.listaEmpresas = [];
    try {
      let empresaFiltro = this.omi.getDataEmpresaModel();
      empresaFiltro.estado = 1;
      this.restService.postREST(environment.urlConsultarEmpresasPorFiltros, empresaFiltro)
        .subscribe(resp => {
          let listaTemp: any = JSON.parse(JSON.stringify(resp));
          if (listaTemp !== undefined && listaTemp.length > 0) {
            listaTemp.forEach((temp: EmpresaModel) => {
              let empresaTemp = this.convertirEnums(temp);
              this.listaEmpresas.push(empresaTemp);
            });
          }
        },
          error => {
            let listaMensajes = this.util.construirMensajeExcepcion(error.error, this.msg.lbl_summary_danger);
            let titleError = listaMensajes[0];
            listaMensajes.splice(0, 1);
            let mensajeFinal = { severity: titleError.severity, summary: titleError.detail, detail: '', sticky: true };
            this.messageService.clear();

            listaMensajes.forEach(mensaje => {
              mensajeFinal.detail = mensajeFinal.detail + mensaje.detail + " ";
            });
            this.messageService.add(mensajeFinal);

            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
  }

  convertirEnums(empresa: EmpresaModel) {
    empresa.industria = this.cargarValorEnumeradoIndustria(empresa.industria);
    return empresa;
  }

  cargarValorEnumeradoIndustria(i: number) {
    return this.util.getValorEnumerado(this.enumerados.getEnumerados().industria.valores, i);
  }

  obtenerListaExportar() {
    let listaExportar: EmpresaModel[] = [];
    if (this.listaEmpresas !== undefined && this.listaEmpresas !== null && this.listaEmpresas.length > 0) {
      this.listaEmpresas.forEach(empresa => {
        let factory = this.omi.getDataEmpresaModel();
        this.util.copiarElemento(empresa, factory);
        factory.industria = empresa.industria.label;
        listaExportar.push(factory);
      });
    }
    return listaExportar;
  }

}