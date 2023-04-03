import { Component, Input, OnInit } from '@angular/core';
import { TextProperties } from 'src/app/config/TextProperties';
import { ClientModel } from 'src/app/model/client/client-model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {
  // Data
  @Input() client: ClientModel | undefined;

  // Common
  msg: any;
  phase: string = environment.phaseCreate;
  phaseCreate: string = environment.phaseCreate;
  phaseEdit: string = environment.phaseEdit;

  constructor(private textProperties: TextProperties) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
  }

  inicializar() {
    let phaseSge = localStorage.getItem("phase") ? localStorage.getItem("phase") : this.phaseCreate;
    if (phaseSge) {
      this.phase = phaseSge;
    }
  }
}
