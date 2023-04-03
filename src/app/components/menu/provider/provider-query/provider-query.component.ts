import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { Util } from 'src/app/config/Util';
import { ProviderModel } from 'src/app/model/provider/provider-model';
import { RestService } from 'src/app/services/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-provider-query',
  templateUrl: './provider-query.component.html',
  styleUrls: ['./provider-query.component.scss']
})
export class ProviderQueryComponent implements OnInit {
  // Data
  title: string = "Proveedores";
  list: ProviderModel[] = [];
  showPnlEdit: boolean = false;
  filter: ProviderModel | undefined;
  selectedProvider: ProviderModel | undefined;

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private rest: RestService, private util: Util, private omi: ObjectModelInitializer, private messageService: MessageService) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
    this.filter = this.omi.initializerProviderModel();
    this.find();
  }

  toCreate() {
    this.messageService.clear();
    this.selectedProvider = this.omi.initializerProviderModel();
    this.showPnlEdit = true;
  }

  find() {
    try {
      this.rest.getREST(environment.urlFindProviders).subscribe({
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
