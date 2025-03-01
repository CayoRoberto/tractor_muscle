import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from '../../../models/perfil';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PerfilService } from '../../../services/perfil.service';

@Component({
  selector: 'app-genero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.css'
})
export class GeneroComponent {

  @Input() perfil!: Perfil; // Perfil é recebido do componente pai
  @Output() next = new EventEmitter<void>();

  genero: string = '';




  constructor(private perfilService: PerfilService, private router: Router){

      }

      ngOnInit() {
        this.genero = this.perfilService.getPerfil().genero || '';
      }

      salvarEAvancar() {
        if (!this.genero) {
          alert('Por favor, selecione o gênero.');
          return;
        }
        this.perfilService.setGenero(this.genero);
        this.router.navigate(['/idade']);
      }
    
      // ngOnDestroy() {
      //   this.perfilService.setGenero(this.genero);
      // }

      // irParaAnalisePlanoIdade() {
      //   if (this.perfil.genero) {
      //     console.log("genero escolhido:", this.perfil.genero)
      //     this.next.emit();
      //   } else {
      //     alert('Selecione o gênero antes de continuar!');
      //   }
      // }


      // irParaAnalisePlanoIdade(){
      //   this.router.navigate(['/idade']);
      // }

}
