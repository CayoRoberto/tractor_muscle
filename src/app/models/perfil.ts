export class Perfil{

  id!: number;
  genero!: string;
  idade!: string;
  altura!: number;
  biotipo!: string;
  objetivo!: string;
  disponibilidade!: string;

  constructor(genero: string, idade: string, altura: number, biotipo: string, objetivo: string, disponibilidade: string) {
    this.genero = genero;
    this.idade = idade;
    this.altura = altura;
    this.biotipo = biotipo;
    this.objetivo = objetivo;
    this.disponibilidade = disponibilidade;
  }
}
