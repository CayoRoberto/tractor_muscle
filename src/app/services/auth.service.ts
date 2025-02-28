import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  private usuarioLogado: Usuario | null = null;  //Armazena o usuário logado

  private http = inject(HttpClient);

   apiUrl = 'http://localhost:9090/tractor_muscle';

   cadastrarUsuario(usuario: Usuario): Observable<string> {
    console.log('Enviando usuário para o backend:', usuario);
    return this.http.post<string>(`${this.apiUrl}/usuario/cadastrar`, usuario, {responseType: 'text' as 'json'});
  }

  // login(login: string, senha: string): Observable<any> {
  //   console.log('Enviando para o backend:', login);
  //   return this.http.post<any>(`${this.apiUrl}/login`, { login, senha });
  // }

  pegarDadosLogin(login: string):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiUrl}/usuario/pegar-dados-login`, {
      params: { login }
    });
  }


  login(login: string, senha: string): Observable<{ token: string, usuario: Usuario }> {
    return this.http.post<{ token: string, usuario: Usuario }>(`${this.apiUrl}/login`, { login, senha }).pipe(
      tap((response) => {
        // Salva token no localStorage (para proteção em outras requisições)
        localStorage.setItem('token', response.token);



        // Opcional: Salvar também no localStorage para persistir após refresh da página
        localStorage.setItem('usuario', JSON.stringify(response.usuario));

        // Salva o objeto completo do usuário
        this.usuarioLogado = response.usuario;
        console.log('Usuário logado:', this.usuarioLogado.nome);
      })
    );
  }

  getUsuarioLogado(): Usuario | null {
    if (!this.usuarioLogado) {
      const usuarioJson = localStorage.getItem('usuario');
      if (usuarioJson) {
        this.usuarioLogado = JSON.parse(usuarioJson);
      }
    }
    return this.usuarioLogado
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.usuarioLogado = null;
  }


}
