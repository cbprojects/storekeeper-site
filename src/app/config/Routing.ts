import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { QEmpresaComponent } from '../components/query/empresas/q-empresa.component';
import { RestaurarClaveComponent } from '../components/restaurarClave/restaurarClave.component';
import { Guardian } from './Guardian';

const routes: Routes = [
  // { path: 'login', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'restaurar-clave', component: RestaurarClaveComponent },
  { path: 'products/categories', component: QEmpresaComponent, canActivate: [Guardian] },
  { path: 'providers', component: QEmpresaComponent, canActivate: [Guardian] },
  { path: 'products', component: QEmpresaComponent, canActivate: [Guardian] },
  { path: 'clients', component: QEmpresaComponent, canActivate: [Guardian] },
  { path: 'bills', component: QEmpresaComponent, canActivate: [Guardian] },

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
