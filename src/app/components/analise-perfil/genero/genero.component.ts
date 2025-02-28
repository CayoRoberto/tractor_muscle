import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { Perfil } from '../../../models/perfil';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


  constructor(private router: Router){

      }

      irParaAnalisePlanoIdade() {
        if (this.perfil.genero) {
          console.log("genero escolhido:", this.perfil.genero)
          this.next.emit();
        } else {
          alert('Selecione o gênero antes de continuar!');
        }
      }


      // irParaAnalisePlanoIdade(){
      //   this.router.navigate(['/idade']);
      // }

}
