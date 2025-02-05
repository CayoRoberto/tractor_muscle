import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biotipo',
  standalone: true,
  imports: [],
  templateUrl: './biotipo.component.html',
  styleUrl: './biotipo.component.css'
})
export class BiotipoComponent {

  constructor(private router: Router){

        }


        irParaAnalisePlanoObjetivo(){
          this.router.navigate(['/objetivo']);
        }

}
