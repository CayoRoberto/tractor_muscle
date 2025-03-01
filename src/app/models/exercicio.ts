export class Exercicio {
    id!: number;
    nome!: string;
    descricao!: string;
    series!: number;
    repeticoes!: number;
    objetivo!: string;

    constructor(
        id: number = 0,
        nome: string = '',
        descricao: string = '',
        series: number = 0,
        repeticoes: number = 0,
        objetivo: string = ''
    ) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.series = series;
        this.repeticoes = repeticoes;
        this.objetivo = objetivo;
    }
}
