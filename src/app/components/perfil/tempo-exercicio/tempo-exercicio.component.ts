import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../../../services/perfil.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tempo-exercicio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tempo-exercicio.component.html',
  styleUrl: './tempo-exercicio.component.css'
})
export class TempoExercicioComponent {

  disponibilidade: string = '';

  constructor(private perfilService: PerfilService, private router: Router) {}

  ngOnInit() {
    this.disponibilidade = this.perfilService.getPerfil().disponibilidade || '';
  }

  salvarEEnviar() {
    if (!this.disponibilidade) {
      alert('Informe sua disponibilidade.');
      return;
    }
    this.perfilService.setDisponibilidade(this.disponibilidade);

    this.perfilService.salvarPerfil().subscribe({
      next: (resposta) => {
        alert('Perfil salvo com sucesso!');
        this.perfilService.salvarPerfil();
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        console.error('Erro ao salvar perfil:', erro);
        alert('Erro ao salvar perfil. Tente novamente.');
      }
    });
  }


          // irParaInforMedidasCorporais(){
          //   this.router.navigate(['/medidas']);
          // }
}
