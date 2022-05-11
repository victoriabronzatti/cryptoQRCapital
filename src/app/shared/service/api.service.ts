import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coin } from '../model/coin.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apiUrl = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,USDT&tsyms=USD,EUR'

httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
  constructor(
    private httpClient: HttpClient
  ) { }


  public getCoins() : Observable<Coin>{
    return this.httpClient.get<Coin>(this.apiUrl)
  }
}
