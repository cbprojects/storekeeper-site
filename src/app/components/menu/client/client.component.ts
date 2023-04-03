import { Component, OnInit } from '@angular/core';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { ClientModel } from 'src/app/model/client/client-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  // Data
  title: String = "Clientes";
  subtitle: String = "Panel de administración de clientes";
  selectedClient: ClientModel | undefined;
  showPnlEdit: boolean = false;

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private omi: ObjectModelInitializer) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
  }

  toCreate() {
    this.selectedClient = this.omi.initializerClientModel();
    this.showPnlEdit = true;
  }
}
