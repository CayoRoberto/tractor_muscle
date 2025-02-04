import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { GeneroComponent } from './components/analise-perfil/genero/genero.component';
import { IdadeComponent } from './components/analise-perfil/idade/idade.component';

export const routes: Routes = [

  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "cadastro",
    component: CadastroComponent
  },

  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "genero",
    component: GeneroComponent
  },

  {
    path: "idade",
    component: IdadeComponent
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redireciona para login por padrão
];
