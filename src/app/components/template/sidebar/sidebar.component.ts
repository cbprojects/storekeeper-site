import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Enumerados } from 'src/app/config/Enumerados';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { MenuModel } from 'src/app/model/shared/menu-model';
import { RestService } from 'src/app/services/rest.service';
import { SesionService } from 'src/app/services/sesionService/sesion.service';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [RestService, MessageService]
})
export class SidebarComponent implements OnInit {
  // Objetos de Sesion
  sesion: any;

  // Utilidades
  msg: any;
  menu: MenuModel[] = [];

  constructor(private router: Router, private route: ActivatedRoute, public restService: RestService, public textProperties: TextProperties, public util: Util, public omi: ObjectModelInitializer, public enumerados: Enumerados, public sesionService: SesionService, private messageService: MessageService) {
    this.sesion = this.omi.getDataServiceSesion();
    this.msg = this.textProperties.getProperties(this.sesionService.objServiceSesion.idioma);
  }

  ngOnInit() {
    this.loadMenu();
  }

  loadMenu() {
    this.menu = [];
    this.menu.push(this.createItemMenu("Dashboard", "ti-panel", "/home"));
    this.menu.push(this.createItemMenu("Categorías", "ti-tag", "/categories"));
    this.menu.push(this.createItemMenu("Proveedores", "ti-briefcase", "/providers"));
    this.menu.push(this.createItemMenu("Inventario", "ti-package", "/products"));
    this.menu.push(this.createItemMenu("Clientes", "ti-id-badge", "/clients"));
    this.menu.push(this.createItemMenu("Facturación", "ti-money", "/bills"));

    let menuActive = localStorage.getItem('menu-active');
    if (menuActive) {
      this.menu.forEach(item => {
        if (item.link === menuActive) {
          item.active = true;
        }
      });
    } else {
      this.menu[0].active = true;
    }

    this.posicionarArriba();
  }

  createItemMenu(title: string, icon: string, link: string, active: boolean = false, disable: boolean = false, subtitle: string = "") {
    let menu: MenuModel = this.omi.initializerMenuModel();
    menu.index = this.menu ? this.menu.length + 1 : 1;
    menu.icon = icon;
    menu.active = active;
    menu.disable = disable;
    menu.title = title;
    menu.subtitle = subtitle;
    menu.link = link;

    return menu;
  }

  posicionarArriba() {
    $('body,html').animate({
      scrollTop: 0
    }, 600);
  }

  selectMenu(selectedItem: MenuModel) {
    this.menu.forEach(item => {
      if (item.index === selectedItem.index) {
        item.active = true;
        localStorage.setItem('menu-active', item.link);
        this.router.navigate([item.link]);
      } else {
        item.active = false;
      }
    });
  }
}
