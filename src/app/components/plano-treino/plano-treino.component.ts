import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Perfil } from '../../models/perfil';
import { Exercicio } from '../../models/exercicio';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plano-treino',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plano-treino.component.html',
  styleUrl: './plano-treino.component.css'
})
export class PlanoTreinoComponent {

  usuario!: Usuario | null;
  perfil!: Perfil | null;
    exercicios: Exercicio[] = [];
    currentIndex: number = 0;
    trainings: string[] = ['A', 'B', 'C'];
    currentTrainingTitle: string = 'Treino A';

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.usuario = this.authService.getUsuarioLogado();
        if (!this.usuario) {
            this.router.navigate(['/login']);
            return;
        }
        this.buscarPerfilDoUsuario(this.usuario.id);
        this.buscarTreino();
    }


    buscarPerfilDoUsuario(idUsuario: number) {
      this.authService.buscarPerfilDoUsuario(idUsuario).subscribe({
          next: (perfil) => {
              this.perfil = perfil;
          },
          error: (err) => {
              console.error('Erro ao buscar perfil do usuário:', err);
              alert('Erro ao buscar perfil. Tente novamente.');
          }
      });
  }

    buscarTreino() {
        const idUsuario = this.usuario?.id;
        this.authService.buscarTreinosPersonalizados(idUsuario!).subscribe({
            next: (treinos: Exercicio[]) => {
              console.log("Treinos", treinos)
                this.exercicios = treinos;
            },
            error: (err) => {
                console.error('Erro ao buscar treino personalizado:', err);
                alert('Erro ao buscar treino. Tente novamente.');
            }
        });
    }

    previousTraining() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.trainings.length - 1;
        }
        this.updateTrainingTitle();
    }

    nextTraining() {
        if (this.currentIndex < this.trainings.length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.updateTrainingTitle();
    }

    updateTrainingTitle() {
        this.currentTrainingTitle = `Treino ${this.trainings[this.currentIndex]}`;
    }

  // dia!: String;
  // // Lista de treinos
  // trainings: string[] = ['A', 'B', 'C'];
  // // Índice atual
  // currentIndex: number = 0;
  // // Título do treino atual
  // get currentTrainingTitle(): string {
  //   if(this.trainings[this.currentIndex] === 'A'){
  //     this.dia = "de Hoje";
  //   }else{
  //     this.dia = "Próximo";
  //   }
  //   console.log(`TREINO ${this.trainings[this.currentIndex]}`);
  //   return `Série ${this.dia}: TREINO ${this.trainings[this.currentIndex]}`;
  // }
  // // Treino atual
  // get currentTraining(): string {
  //   return this.trainings[this.currentIndex];
  // }

  // // Método para alternar para o treino anterior
  // previousTraining(): void {
  //   this.currentIndex = (this.currentIndex - 1 + this.trainings.length) % this.trainings.length;
  // }

  // // Método para alternar para o próximo treino
  // nextTraining(): void {
  //   this.currentIndex = (this.currentIndex + 1) % this.trainings.length;
  // }
}
