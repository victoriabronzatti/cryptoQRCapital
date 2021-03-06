import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { PerfilComponent } from './views/perfil/perfil.component';


const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}, // aqui eu disse que quando eu não adicionar nada no path ele vai automaticamente para o dashboard
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
