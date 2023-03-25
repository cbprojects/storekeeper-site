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
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';

// Imports - Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MContactoComponent } from './components/management/contactos/m-contacto.component';
import { MEmpresaComponent } from './components/management/empresas/m-empresa.component';
import { MFacturaComponent } from './components/management/facturas/m-factura.component';
import { MTareaComponent } from './components/management/tareas/m-tarea.component';
import { QContactoComponent } from './components/query/contactos/q-contacto.component';
import { QEmpresaComponent } from './components/query/empresas/q-empresa.component';
import { QFacturaComponent } from './components/query/facturas/q-factura.component';
import { QTareaComponent } from './components/query/tareas/q-tarea.component';
import { RestaurarClaveComponent } from './components/restaurarClave/restaurarClave.component';
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
    RestaurarClaveComponent,
    HomeComponent,
    QContactoComponent,
    MContactoComponent,
    QTareaComponent,
    MTareaComponent,
    QEmpresaComponent,
    MEmpresaComponent,
    QFacturaComponent,
    MFacturaComponent
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
