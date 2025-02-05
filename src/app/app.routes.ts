import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { GeneroComponent } from './components/analise-perfil/genero/genero.component';
import { IdadeComponent } from './components/analise-perfil/idade/idade.component';
import { AlturaComponent } from './components/analise-perfil/altura/altura.component';
import { BiotipoComponent } from './components/analise-perfil/biotipo/biotipo.component';
import { PlanoObjetivoComponent } from './components/analise-perfil/plano-objetivo/plano-objetivo.component';
import { MedidasCorporaisComponent } from './components/analise-perfil/medidas-corporais/medidas-corporais.component';
import { TempoExercicioComponent } from './components/analise-perfil/tempo-exercicio/tempo-exercicio.component';
import { PlanoTreinoComponent } from './components/plano-treino/plano-treino.component';

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

  {
    path: "altura",
    component: AlturaComponent
  },

  {
    path: "biotipo",
    component: BiotipoComponent
  },

  {
    path: "objetivo",
    component: PlanoObjetivoComponent
  },
  {
    path: "disponibilidade",
    component: TempoExercicioComponent
  },

  {
    path: "medidas",
    component: MedidasCorporaisComponent
  },

  {
    path: "treino",
    component: PlanoTreinoComponent
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redireciona para login por padrão
];
