import { Component, OnInit } from '@angular/core';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  // Data
  title: string = "Asignación";
  subtitle: string = "Panel de administración de asignación de empleados a trabajos para clientes";

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private omi: ObjectModelInitializer) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
  }

}