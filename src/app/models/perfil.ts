import { Usuario } from './usuario';

export class Perfil{

  id!: number;
  genero!: string;
  idade!: number;
  altura!: number;
  biotipo!: string;
  objetivo!: string;
  disponibilidade!: string;
  usuario!: Usuario;

  constructor(genero: string, idade: number, altura: number, biotipo: string, objetivo: string, disponibilidade: string, usuario: Usuario) {
    this.genero = genero;
    this.idade = idade;
    this.altura = altura;
    this.biotipo = biotipo;
    this.objetivo = objetivo;
    this.disponibilidade = disponibilidade;
    this.usuario = usuario;
  }
}
