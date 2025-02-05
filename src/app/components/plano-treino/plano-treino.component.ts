import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-plano-treino',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plano-treino.component.html',
  styleUrl: './plano-treino.component.css'
})
export class PlanoTreinoComponent {

  dia!: String;
  // Lista de treinos
  trainings: string[] = ['A', 'B', 'C'];
  // Índice atual
  currentIndex: number = 0;
  // Título do treino atual
  get currentTrainingTitle(): string {
    if(this.trainings[this.currentIndex] === 'A'){
      this.dia = "Hoje";
    }else{
      this.dia = "Próximo";
    }
    return `Série de ${this.dia}: TREINO ${this.trainings[this.currentIndex]}`;
  }
  // Treino atual
  get currentTraining(): string {
    return this.trainings[this.currentIndex];
  }

  // Método para alternar para o treino anterior
  previousTraining(): void {
    this.currentIndex = (this.currentIndex - 1 + this.trainings.length) % this.trainings.length;
  }

  // Método para alternar para o próximo treino
  nextTraining(): void {
    this.currentIndex = (this.currentIndex + 1) % this.trainings.length;
  }
}
