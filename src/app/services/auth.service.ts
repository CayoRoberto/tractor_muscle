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

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuario/login`, { email, password });
  }


}
