import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-altura',
  standalone: true,
  imports: [],
  templateUrl: './altura.component.html',
  styleUrl: './altura.component.css'
})
export class AlturaComponent {

  constructor(private router: Router){

          }


          irParaAnalisePlanoBiotipo(){
            this.router.navigate(['/biotipo']);
          }

}
