import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  
})
export class CadastroComponent {

  cadastroForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmarSenha: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  cadastrar() {
    if (this.cadastroForm.valid) {
      const { nome, sobrenome, email, senha, confirmarSenha } = this.cadastroForm.value;

      if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
      }

      const dadosUsuario = { nome, sobrenome, email, senha };
      this.authService.cadastrarUsuario(dadosUsuario).subscribe(
        (response) => {
          console.log('Usuário cadastrado:', response);
          alert('Cadastro realizado com sucesso!');
          this.router.navigate(['/login']); // Redireciona para login
        },
        (error) => {
          console.error('Erro no cadastro:', error);
          alert('Erro ao cadastrar usuário');
        }
      );
    }
  }

    // Método para navegar para a tela de cadastro
    irParaLogin(){
      this.router.navigate(['/login']);
    }
}
