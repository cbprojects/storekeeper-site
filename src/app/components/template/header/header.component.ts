import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeIn } from 'ng-animate';
import { MessageService } from 'primeng/api';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { RestService } from 'src/app/services/rest.service';
import { SesionService } from 'src/app/services/sesionService/sesion.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [RestService, MessageService],
  animations: [
    trigger('fadeIn', [transition('* => open', useAnimation(fadeIn))])
  ]
})
export class HeaderComponent implements OnInit {
  // Objetos de Animaciones
  fadeIn: any;

  // Objetos de datos
  usuario: string = "";

  // Utilidades
  msg: any;

  constructor(public router: Router, private route: ActivatedRoute, public restService: RestService, public messageService: MessageService, public textProperties: TextProperties, public omi: ObjectModelInitializer, public sesionService: SesionService, public util: Util) {
    this.msg = this.textProperties.getProperties(this.sesionService.objServiceSesion.idioma);
  }

  ngOnInit() {
    this.sesionService.loadUser();
  }

  obtenerBreadcrumb(url: string) {
    return url;
  }

  cerrarSesion() {
    this.usuario = "";
    this.sesionService.objServiceSesion.usuarioSesion = undefined;
    this.sesionService.objServiceSesion.esLogueado = false;
    localStorage.setItem("cerrarSesion", "1");
    $('#cerrar-mobile').click();
    this.router.navigate(['/home']);
  }

}