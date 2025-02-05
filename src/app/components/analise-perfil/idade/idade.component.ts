import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idade',
  standalone: true,
  imports: [],
  templateUrl: './idade.component.html',
  styleUrl: './idade.component.css'
})
export class IdadeComponent {

  constructor(private router: Router){
  
        }
  
  
        irParaInforAltura(){
          this.router.navigate(['/altura']);
        }
}
