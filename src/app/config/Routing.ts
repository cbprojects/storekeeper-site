import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AssignmentComponent } from '../components/menu/assignment/assignment.component';
import { BillComponent } from '../components/menu/bill/bill.component';
import { ClientComponent } from '../components/menu/client/client.component';
import { EmployeeComponent } from '../components/menu/employee/employee.component';
import { ProductCategoryComponent } from '../components/menu/product-category/product-category.component';
import { ProductComponent } from '../components/menu/product/product.component';
import { ProviderComponent } from '../components/menu/provider/provider.component';
import { Guardian } from './Guardian';

const routes: Routes = [
  // { path: 'login', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'assignments', component: AssignmentComponent, canActivate: [Guardian] },
  { path: 'bills', component: BillComponent, canActivate: [Guardian] },
  { path: 'categories', component: ProductCategoryComponent, canActivate: [Guardian] },
  { path: 'clients', component: ClientComponent, canActivate: [Guardian] },
  { path: 'employees', component: EmployeeComponent, canActivate: [Guardian] },
  { path: 'products', component: ProductComponent, canActivate: [Guardian] },
  { path: 'providers', component: ProviderComponent, canActivate: [Guardian] },

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
