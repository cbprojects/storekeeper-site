// Imports - Config and Utilities
import { Enumerados } from './config/Enumerados';
import { Functions } from './config/Functions';
import { Guardian } from './config/Guardian';
import { ObjectModelInitializer } from './config/ObjectModelInitializer';
import { AppRoutingModule } from './config/Routing';
import { TextProperties } from './config/TextProperties';
import { Util } from './config/Util';

// Imports - General
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { SesionService } from './services/sesionService/sesion.service';

// Imports - PrimeNG Modules
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

// Imports - Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BillEditComponent } from './components/menu/bill/bill-edit/bill-edit.component';
import { BillQueryComponent } from './components/menu/bill/bill-query/bill-query.component';
import { BillComponent } from './components/menu/bill/bill.component';
import { ClientEditComponent } from './components/menu/client/client-edit/client-edit.component';
import { ClientQueryComponent } from './components/menu/client/client-query/client-query.component';
import { ClientComponent } from './components/menu/client/client.component';
import { ProductCategoryEditComponent } from './components/menu/product-category/product-category-edit/product-category-edit.component';
import { ProductCategoryQueryComponent } from './components/menu/product-category/product-category-query/product-category-query.component';
import { ProductCategoryComponent } from './components/menu/product-category/product-category.component';
import { ProductEditComponent } from './components/menu/product/product-edit/product-edit.component';
import { ProductQueryComponent } from './components/menu/product/product-query/product-query.component';
import { ProductComponent } from './components/menu/product/product.component';
import { ProviderEditComponent } from './components/menu/provider/provider-edit/provider-edit.component';
import { ProviderQueryComponent } from './components/menu/provider/provider-query/provider-query.component';
import { ProviderComponent } from './components/menu/provider/provider.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';

// Constants
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  "bgsColor": "#fff",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "three-strings",
  "blur": 5,
  "fgsColor": "#fff",
  "fgsPosition": "center-center",
  "fgsSize": 180,
  "fgsType": "three-strings",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 40,
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "#00acc1",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    BillComponent,
    ProviderComponent,
    ProductComponent,
    ProductCategoryComponent,
    ClientComponent,
    BillQueryComponent,
    BillEditComponent,
    ProviderQueryComponent,
    ProviderEditComponent,
    ClientQueryComponent,
    ClientEditComponent,
    ProductQueryComponent,
    ProductEditComponent,
    ProductCategoryQueryComponent,
    ProductCategoryEditComponent
  ],
  imports: [
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    RouterModule,
    NgxJsonViewerModule,
    CardModule,
    TimelineModule,
    TooltipModule,
    TagModule,
    ConfirmPopupModule,
    CheckboxModule,
    ButtonModule,
    ChartModule,
    CalendarModule,
    TableModule,
    DialogModule,
    OrganizationChartModule,
    ColorPickerModule
  ],
  providers: [TextProperties, Enumerados, ObjectModelInitializer, Guardian, Util, Functions, MessageService, ConfirmationService, SesionService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
