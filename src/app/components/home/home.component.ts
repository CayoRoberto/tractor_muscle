import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  usuario!: Usuario | null;

  sucesso: boolean = false;
  menuAberto: boolean = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){

    }


    ngOnInit(){
      // Obtenha o valor de 'sucesso' nos query parameters
    this.route.queryParams.subscribe(params => {
      this.usuario = this.authService.getUsuarioLogado();
      if (this.usuario) {
        console.log(`Bem-vindo, ${this.usuario.nome} ${this.usuario.sobrenome}`);
      } else {
        console.warn('Nenhum usuário logado encontrado!');
      }
      this.sucesso = params['sucesso'] === 'true'; // Converter para booleano
      console.log('Sucesso:', this.sucesso); // Apenas para depuração
    });
    }



  // Método para alternar a exibição do menu
  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }


    irParaAnalisePlano(){
      this.router.navigate(['/genero']);
    }

    VisualizarTreino(){
      this.router.navigate(['/treino']);
    }



}
