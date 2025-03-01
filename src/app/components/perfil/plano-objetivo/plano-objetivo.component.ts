import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../../../services/perfil.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plano-objetivo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './plano-objetivo.component.html',
  styleUrl: './plano-objetivo.component.css'
})
export class PlanoObjetivoComponent {

  objetivo: string = '';

  constructor(private perfilService: PerfilService, private router: Router) {}

  ngOnInit() {
    this.objetivo = this.perfilService.getPerfil().objetivo || '';
  }

  salvarEAvancar() {
    if (!this.objetivo) {
      alert('Informe seu objetivo.');
      return;
    }
    this.perfilService.setObjetivo(this.objetivo);
    this.router.navigate(['/disponibilidade']);
  }


          // irParaInforDisponibilidade(){
          //   this.router.navigate(['/disponibilidade']);
          // }

}
