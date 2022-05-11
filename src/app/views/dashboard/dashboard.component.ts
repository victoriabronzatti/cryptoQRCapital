import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/shared/service/api.service';
import { Coin } from 'src/app/shared/model/coin.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public title = 'Dashboard' //essa variavel já tem uma referencia no html
  dashbord = [
    { id: 1, name: 'Bitcoin', subname: 'BTC', price: '$31.409,9',percent:'1,49%', img : "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" },
    { id: 2, name: 'Etherium', subname: 'ETH', price: '$2.366.14',percent:'-0.01%', img : "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"},
    { id: 3, name: 'Theter', subname: 'USDT', price: '$1.00', percent:'-0,18%', img: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"}

  ];
 
 coins!: Coin[]

  constructor(
    public apiService : ApiService

  ) { }

  ngOnInit() {
    this.getCoins();
  }
  getCoins(){
    this.apiService.getCoins().subscribe(data => {
      this.coins = data.coins;
      console.log(this.coins);
      console.log(data.coins);

    }

    )
  }

}
