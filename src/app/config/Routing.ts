import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { MContactoComponent } from '../components/management/contactos/m-contacto.component';
import { MEmpresaComponent } from '../components/management/empresas/m-empresa.component';
import { MFacturaComponent } from '../components/management/facturas/m-factura.component';
import { MTareaComponent } from '../components/management/tareas/m-tarea.component';
import { QContactoComponent } from '../components/query/contactos/q-contacto.component';
import { QEmpresaComponent } from '../components/query/empresas/q-empresa.component';
import { QFacturaComponent } from '../components/query/facturas/q-factura.component';
import { QTareaComponent } from '../components/query/tareas/q-tarea.component';
import { RestaurarClaveComponent } from '../components/restaurarClave/restaurarClave.component';
import { Guardian } from './Guardian';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'restaurar-clave', component: RestaurarClaveComponent },
  { path: 'q-contacto', component: QContactoComponent, canActivate: [Guardian] },
  { path: 'm-contacto', component: MContactoComponent, canActivate: [Guardian] },
  { path: 'q-tarea', component: QTareaComponent, canActivate: [Guardian] },
  { path: 'm-tarea', component: MTareaComponent, canActivate: [Guardian] },
  { path: 'q-empresa', component: QEmpresaComponent, canActivate: [Guardian] },
  { path: 'm-empresa', component: MEmpresaComponent, canActivate: [Guardian] },
  { path: 'q-factura', component: QFacturaComponent, canActivate: [Guardian] },
  { path: 'm-factura', component: MFacturaComponent, canActivate: [Guardian] },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
