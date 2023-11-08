import { Component, OnInit } from '@angular/core';
import { ObjectModelInitializer } from 'src/app/config/ObjectModelInitializer';
import { TextProperties } from 'src/app/config/TextProperties';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  // Data
  title: string = "Empleados";
  subtitle: string = "Panel de administración de empleados";

  // Common
  msg: any;

  constructor(private textProperties: TextProperties, private omi: ObjectModelInitializer) {
    this.msg = textProperties.getProperties(environment.idiomaEs);
  }

  ngOnInit(): void {
  }

}