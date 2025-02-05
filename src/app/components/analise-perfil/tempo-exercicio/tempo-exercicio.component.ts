import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tempo-exercicio',
  standalone: true,
  imports: [],
  templateUrl: './tempo-exercicio.component.html',
  styleUrl: './tempo-exercicio.component.css'
})
export class TempoExercicioComponent {

  constructor(private router: Router){

          }


          irParaInforMedidasCorporais(){
            this.router.navigate(['/medidas']);
          }
}
