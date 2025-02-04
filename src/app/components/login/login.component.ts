import { routes } from './../../app.routes';
import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){

  }

  // Método para navegar para a tela de cadastro
  irParaCadastro(){
    this.router.navigate(['/cadastro']);
  }

  irPaginaInicial(){
    this.router.navigate(['/home']);
  }
}
