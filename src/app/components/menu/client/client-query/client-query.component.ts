import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { ClientModel } from 'src/app/model/client/client-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-query',
  templateUrl: './client-query.component.html',
  styleUrls: ['./client-query.component.scss'],
  providers: [MessageService]
})
export class ClientQueryComponent implements OnInit {
  // Data
  title: string = "Clientes";
  list: ClientModel[] = [];
  showPnlEdit: boolean = false;
  filter: ClientModel | undefined;
  selectedClient: ClientModel | undefined;

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private rest: RestService, private util: Util, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.filter = this.omi.initializerClientModel();
    this.find();
  }

  toCreate() {
    this.messageService.clear();
    this.selectedClient = this.omi.initializerClientModel();
    this.showPnlEdit = true;
  }

  find() {
    try {
      this.rest.getREST(environment.urlClients).subscribe({
        next: (res: any) => {
          console.log(res);
          this.list = res.result;
        },
        error: (e) => this.util.showErrorMessage(e, this.msg.lbl_summary_warning, environment.severity[2])
      });
    } catch (error) {
      console.log(error);
      this.util.showErrorMessage(error, this.msg.lbl_summary_danger, environment.severity[3])
    }
  }

  save(event: any) {
    this.messageService.add(event);
    this.find();
    this.showPnlEdit = false;
  }
}