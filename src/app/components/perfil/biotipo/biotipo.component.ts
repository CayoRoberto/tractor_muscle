import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../../../services/perfil.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-biotipo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './biotipo.component.html',
  styleUrl: './biotipo.component.css'
})
export class BiotipoComponent {

  biotipo: string = '';

  constructor(private perfilService: PerfilService, private router: Router) {}

  ngOnInit() {
    this.biotipo = this.perfilService.getPerfil().biotipo || '';
  }

  salvarEAvancar() {
    if (!this.biotipo) {
      alert('Informe seu biotipo.');
      return;
    }
    this.perfilService.setBiotipo(this.biotipo);
    this.router.navigate(['/objetivo']);
  }


        // irParaAnalisePlanoObjetivo(){
        //   this.router.navigate(['/objetivo']);
        // }

}
