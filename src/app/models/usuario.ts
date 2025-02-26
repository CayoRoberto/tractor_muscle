
export class Usuario{

  id!: number;
  login!: string;
  nome!: string;
  sobrenome!: string;
  senha!: string;
  ativo!: boolean;

  constructor(login: string, nome: string, sobrenome: string, senha: string, ativo: boolean) {
    this.login = login;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.senha = senha;
    this.ativo = ativo;
  }
}
