import { Injectable } from '@angular/core';
import { Perfil } from './../../models/perfil';
import { Usuario } from './../../models/usuario';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  usuario!: Usuario | null;
  private perfil!: Perfil;

  constructor(private authService: AuthService) {
    this.usuario = this.authService.getUsuarioLogado();
    this.perfil = new Perfil('', '', 0, '', '', '', this.usuario ?? new Usuario());
  }


  setGenero(genero: string) {
    this.perfil.genero = genero;
  }

  setIdade(idade: string) {
    this.perfil.idade = idade;
  }

  setAltura(altura: number) {
    this.perfil.altura = altura;
  }

  setBiotipo(biotipo: string) {
    this.perfil.biotipo = biotipo;
  }

  setObjetivo(objetivo: string) {
    this.perfil.objetivo = objetivo;
  }

  setDisponibilidade(disponibilidade: string) {
    this.perfil.disponibilidade = disponibilidade;
  }

  setUsuario(usuario: Usuario) {
    this.perfil.usuario = usuario;
  }

  getPerfil(): Perfil {
    return this.perfil;
  }

  resetPerfil() {
    this.perfil = new Perfil('', '', 0, '', '', '', new Usuario());
  }
}
