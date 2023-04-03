import { Component, OnInit } from '@angular/core';
import { ClientModel } from 'src/app/model/client/client-model';

@Component({
  selector: 'app-client-query',
  templateUrl: './client-query.component.html',
  styleUrls: ['./client-query.component.scss']
})
export class ClientQueryComponent implements OnInit {

  title: string = "Clientes";
  list: ClientModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }
}
