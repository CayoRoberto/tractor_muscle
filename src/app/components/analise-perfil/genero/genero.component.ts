import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genero',
  standalone: true,
  imports: [],
  templateUrl: './genero.component.html',
  styleUrl: './genero.component.css'
})
export class GeneroComponent {

  constructor(private router: Router){

      }


      irParaAnalisePlanoIdade(){
        this.router.navigate(['/idade']);
      }

}
