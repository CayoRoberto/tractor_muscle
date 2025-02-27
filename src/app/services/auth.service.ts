import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);

   apiUrl = 'http://localhost:9090/tractor_muscle';

   cadastrarUsuario(usuario: Usuario): Observable<string> {
    console.log('Enviando usuário para o backend:', usuario);
    return this.http.post<string>(`${this.apiUrl}/usuario/cadastrar`, usuario, {responseType: 'text' as 'json'});
  }

  login(login: string, senha: string): Observable<any> {
    console.log('Enviando para o backend:', login);
    return this.http.post<any>(`${this.apiUrl}/login`, { login, senha });
  }


}
