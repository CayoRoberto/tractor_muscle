export class MedidasCorporais{

  id!: number;
  peitoral!: number;
  barriga!: number;
  quadril!: number;
  bicepsDireito!: number;
  bicepsEsquerdo!: number;
  antibracoDireito!: number;
  antibracoEsquerdo!: number;
  coxaDireita!: number;
  coxaEsquerda!: number;
  panturrilhaDireita!: number;
  panturrilhaEsquerda!: number;
  gorduraCorporal!: string;


  constructor(peitoral: number, barriga: number, quadril: number, bicepsDireito: number, bicepsEsquerdo: number, antibracoDireito: number, antibracoEsquerdo: number, coxaDireita: number, coxaEsquerda: number, panturrilhaDireita: number, panturrilhaEsquerda: number, gorduraCorporal: string) {
    this.peitoral = peitoral;
    this.barriga = barriga;
    this.quadril = quadril;
    this.bicepsDireito = bicepsDireito;
    this.bicepsEsquerdo = bicepsEsquerdo;
    this.antibracoDireito = antibracoDireito;
    this.antibracoEsquerdo = antibracoEsquerdo;
    this.coxaDireita = coxaDireita;
    this.coxaEsquerda = coxaEsquerda;
    this.panturrilhaDireita = panturrilhaDireita;
    this.panturrilhaEsquerda = panturrilhaEsquerda;
    this.gorduraCorporal = gorduraCorporal;
  }
}
