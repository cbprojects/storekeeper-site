import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { SesionService } from 'src/app/services/sesionService/sesion.service';
import { RestService } from '../.././services/rest.service';

declare var loadGraph: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RestService, MessageService]
})

export class HomeComponent implements OnInit {
  // Objetos de Sesion
  sesion: any;

  // Objetos de datos

  // Utilidades
  msg: any;

  // Charts

  constructor(private router: Router, private route: ActivatedRoute, public restService: RestService, public textProperties: TextProperties, public util: Util, public omi: ObjectModelInitializer, public enumerados: Enumerados, public sesionService: SesionService, private messageService: MessageService) {
    this.sesion = this.omi.getDataServiceSesion();
    this.msg = this.textProperties.getProperties(this.sesionService.objServiceSesion.idioma);
  }

  ngOnInit() {
    this.inicializar();
    let cerrarSesion = localStorage.getItem("cerrarSesion") === "1";
    if (cerrarSesion) {
      this.messageService.clear();
      localStorage.clear();
    }
  }

  ngOnDestroy() {
  }

  inicializar() {
    loadGraph();
  }

  getShadow(color: string) {
    return "background: " + color + "; box-shadow: 0 4px 20px 0px rgb(0 0 0 / 14%), 0 7px 10px -5px " + color + ";"
  }
}