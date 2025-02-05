import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medidas-corporais',
  standalone: true,
  imports: [],
  templateUrl: './medidas-corporais.component.html',
  styleUrl: './medidas-corporais.component.css'
})
export class MedidasCorporaisComponent {

  constructor(private router: Router){

          }


          irParaHome(){
            this.router.navigate(['/home'], {queryParams: {sucesso: true}});
          }

}
