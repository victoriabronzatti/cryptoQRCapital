import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public title = 'Dashboard' //essa variavel já tem uma referencia no html
  dashbord = [
    { id: 1, name: 'Bitcoin', subname: 'BTC', price: 10, img : "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" },
    { id: 2, name: 'Etherium', subname: 'ETH', price: 20 ,img : "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"},
    { id: 3, name: 'Theter', subname: 'ETH', price: 50, img : "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"}

  ];

 

  constructor() { }

  ngOnInit() {
  }

}
