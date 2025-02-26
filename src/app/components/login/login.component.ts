import { routes } from './../../app.routes';
import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });


  constructor(private authService: AuthService, private router: Router) {}

  submit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email!, password!).subscribe(
        (response) => {
          console.log('Login bem-sucedido:', response);
          localStorage.setItem('token', response.token); // Salvar token JWT
          this.router.navigate(['/home']); // Redirecionar para home
        },
        (error) => {
          console.error('Erro ao fazer login:', error);
          alert('Email ou senha incorretos');
        }
      );
    }
  }
  // Método para navegar para a tela de cadastro
  irParaCadastro(){
    this.router.navigate(['/cadastro']);
  }

  // irPaginaInicial(){
  //   this.router.navigate(['/home']);
  // }

  irParaHome(){
    this.router.navigate(['/home'], {queryParams: {sucesso: false}});
  }

}
