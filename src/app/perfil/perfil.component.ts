import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public title = 'Perfil';

  public 'perfil' = [

  {nome: 'Victória', sobrenome: 'Bronzatti', telefone: '(16) 98875-4628', email: 'victoria@gmail.com'},
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
