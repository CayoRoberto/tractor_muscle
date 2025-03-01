import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { Usuario } from '../models/usuario';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  usuario!: Usuario | null;
  private perfil!: Perfil;
 


  constructor(private authService: AuthService) {
    //this.usuario = this.authService.getUsuarioLogado();
    

    const usuarioLogado = this.authService.getUsuarioLogado();
    if (!usuarioLogado) {
      throw new Error('Usuário não está logado!');  // Pode redirecionar para tela de login aqui se quiser

    }

    this.perfil = new Perfil('', 0, 0, '', '', '',  usuarioLogado);
  }

  

  setGenero(genero: string) {
    this.perfil.genero = genero;
    console.log( 'genero:', this.perfil.genero);
    console.log( 'usuario:', this.perfil.usuario.nome);
  }

  setIdade(idade: number) {
    this.perfil.idade = idade;
    console.log( 'idade:', this.perfil.idade);
  }

  setAltura(altura: number) {
    this.perfil.altura = altura;
    console.log( 'altura:', this.perfil.altura);
  }

  setBiotipo(biotipo: string) {
    this.perfil.biotipo = biotipo;
    console.log( 'biotipo:', this.perfil.biotipo);
  }

  setObjetivo(objetivo: string) {
    this.perfil.objetivo = objetivo;
    console.log( 'objetivo:', this.perfil.objetivo);
  }

  setDisponibilidade(disponibilidade: string) {
    this.perfil.disponibilidade = disponibilidade;
    console.log( 'disponibilidade:', this.perfil.disponibilidade);
    console.log( 'usuario:', this.perfil.usuario.nome);
  }

  getPerfil(): Perfil {
    return this.perfil;
  }

  resetPerfil() {
    const usuarioLogado = this.authService.getUsuarioLogado();
    this.perfil = new Perfil('', 0, 0, '', '', '', usuarioLogado!);
  }

  salvarPerfil(): Observable<string> {
    return this.authService.salvarPerfil(this.perfil);
  }
}
