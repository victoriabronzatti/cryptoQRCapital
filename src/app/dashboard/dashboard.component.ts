import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Dashbord' //essa variavel já tem uma referencia no html
  dashbord = [
    { nome: 'Bitcoin'},
    { simbolo:'Símbolo:'},
    { preco: 'R$ 159.109,24'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
