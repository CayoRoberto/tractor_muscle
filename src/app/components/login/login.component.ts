import { routes } from './../../app.routes';
import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  submit() {
    if (this.loginForm.valid) {
      const login = this.loginForm.get('login')?.value;
      const senha = this.loginForm.get('senha')?.value;

      if (login && senha) {
        this.authService.login(login, senha).subscribe({
          next: (response: { token: string }) => {
            console.log('Login bem-sucedido:', response);
            localStorage.setItem('token', response.token);
            this.router.navigate(['/home']);
          },
          error: (error) => {
            console.error('Erro ao fazer login:', error);
            alert('Email ou senha incorretos');
          }

      });
      }
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
