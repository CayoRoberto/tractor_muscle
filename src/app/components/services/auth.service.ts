import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9090/tractor_muscle'; 
  private http = inject(HttpClient);

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuario/login`, { email, password });
  }

  cadastrarUsuario(dados: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/usuario/cadastrar`, dados);
  }
}
