import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
import { Exercicio } from '../../models/exercicio';
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

  exercicios: Exercicio[] = [];

  sucesso: boolean = false;
  menuAberto: boolean = false;
  perfilUsuarioExiste: boolean = false;
  verificacaoConcluida = false;


  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){

    }


    ngOnInit(){
      console.log("Início do ngOnInit");
      this.usuario = this.authService.getUsuarioLogado();
      if (this.usuario) {
        console.log("Usuario logado");
        this.authService.verificarSePerfilExiste(this.usuario.id).subscribe({
          next: (existe) => {
            console.log("Resposta do backend (perfil existe):", existe);
            this.perfilUsuarioExiste = existe;
            this.verificacaoConcluida = true;  // Libera a tela
          },
          error: (err) => {
            console.error('Erro ao verificar perfil:', err);
            this.perfilUsuarioExiste = false; // Assume que não existe em caso de erro
            this.verificacaoConcluida = true;  // Libera a tela mesmo com erro
          }
        });
  
        console.log(`Bem-vindo, ${this.usuario.nome}`);
      } else {
        console.warn('Nenhum usuário logado encontrado!');
        this.router.navigate(['/login']); // Redireciona para login se não tiver usuário logado
      }
  
      this.route.queryParams.subscribe(params => {
        this.sucesso = params['sucesso'] === 'true';
      });
    }



  // Método para alternar a exibição do menu
  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }


    irParaAnalisePlano(){
      this.router.navigate(['/genero']);
    }

    // VisualizarTreino(){
    //   this.router.navigate(['/treino']);
    // }

    VisualizarTreino() {
      if (this.usuario) {
        this.authService.buscarTreinosPersonalizados(this.usuario.id).subscribe({
          next: (treinos: Exercicio[]) => {
            this.exercicios = treinos; // Salva na lista
            console.log("Treino recebido:", this.exercicios);
            // Aqui você pode redirecionar para a tela de treino passando o treino como parâmetro
            this.router.navigate(['/treino'], { state: { treinos } });
          },
          error: (err) => {
            console.error('Erro ao buscar treino:', err);
            alert('Erro ao buscar treino. Tente novamente.');
          }
        });
      }
    }


}
