import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',

})
export class CadastroComponent {

  cadastroForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    sobrenome: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmarSenha: new FormControl('', [Validators.required]),

  });

  constructor(private authService: AuthService, private router: Router) {}

  cadastrar() {

    console.log("Botão de cadastro clicado!");
    if (this.cadastroForm.valid) {
      const { login, nome, sobrenome, senha, confirmarSenha} = this.cadastroForm.value;

      if (senha !== confirmarSenha) {
        alert('As senhas não coincidem!');
        return;
      }

     // const dadosUsuario = { login, nome, sobrenome, senha, ativo };
    //dadosUsuario: Usuario = new Usuario(login!, nome!, sobrenome!, senha!, true)
    // const dadosUsuario: Usuario = {
    //   id: 0, // ou null, caso a API gere o ID automaticamente
    //   login: login || '',
    //   nome: nome || '',
    //   sobrenome: sobrenome || '',
    //   senha: senha || '',
    //   ativo: true
    // };

    // const dadosUsuario = new Usuario(
    //   this.cadastroForm.value.login as string,
    //   this.cadastroForm.value.nome as string,
    //   this.cadastroForm.value.sobrenome as string,
    //   this.cadastroForm.value.senha as string,
    //   true
    // );

    const dadosUsuario = new Usuario(login!, nome!, sobrenome!, senha!, true);
    this.authService.cadastrarUsuario(dadosUsuario).pipe(
      tap((response) => {
        console.log('Usuário cadastrado:', response);
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']); // Redireciona para login
      }),
      catchError((error) => {
        console.error('Erro no cadastro:', error);
        alert('Erro ao cadastrar usuário');
        return of(null); // Retorna um observable vazio para evitar falhas
      })
    ).subscribe();
    }
  }

    // Método para navegar para a tela de cadastro
    irParaLogin(){
      this.router.navigate(['/login']);
    }
}
