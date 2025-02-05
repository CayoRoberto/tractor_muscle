import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plano-objetivo',
  standalone: true,
  imports: [],
  templateUrl: './plano-objetivo.component.html',
  styleUrl: './plano-objetivo.component.css'
})
export class PlanoObjetivoComponent {

  constructor(private router: Router){

          }


          irParaInforDisponibilidade(){
            this.router.navigate(['/disponibilidade']);
          }

}
