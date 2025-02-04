import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private router: Router){

    }

    // Método para navegar para a tela de cadastro
    irParaLogin(){
      this.router.navigate(['/login']);
    }
}
