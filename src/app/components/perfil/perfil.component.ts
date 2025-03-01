import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  etapas = [
    { nome: 'Gênero', rota: 'genero' },
    { nome: 'Idade', rota: 'idade' },
    { nome: 'Altura', rota: 'altura' },
    { nome: 'Biotipo', rota: 'biotipo' },
    { nome: 'Objetivo', rota: 'objetivo' },
    { nome: 'Disponibilidade', rota: 'disponibilidade' }
  ];

  etapaAtualIndex = 0;

  constructor(private router: Router, private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.navegarParaEtapaAtual();
  }

  navegarParaEtapaAtual() {
    this.router.navigate([`/perfil/${this.etapas[this.etapaAtualIndex].rota}`]);
  }

  proximaEtapa() {
    if (!this.podeAvancar()) {
      alert('Preencha as informações obrigatórias antes de avançar.');
      return;
    }
    if (this.etapaAtualIndex < this.etapas.length - 1) {
      this.etapaAtualIndex++;
      this.navegarParaEtapaAtual();
    } else {
      this.enviarPerfilParaServidor();
    }
  }

  etapaAnterior() {
    if (this.etapaAtualIndex > 0) {
      this.etapaAtualIndex--;
      this.navegarParaEtapaAtual();
    }
  }

  podeAvancar(): boolean {
    const perfil = this.perfilService.getPerfil();

    switch (this.etapas[this.etapaAtualIndex].rota) {
      case 'genero':
        return !!perfil.genero;
      case 'idade':
        return !!perfil.idade;
      case 'altura':
        return perfil.altura > 0;
      case 'biotipo':
        return !!perfil.biotipo;
      case 'objetivo':
        return !!perfil.objetivo;
      case 'disponibilidade':
        return !!perfil.disponibilidade;
      default:
        return false;
    }
  }

  enviarPerfilParaServidor() {
    const perfilCompleto = this.perfilService.getPerfil();
    console.log('Enviando perfil para o backend:', perfilCompleto);

    // Aqui você chama o serviço HTTP real:
    // this.http.post('SEU_BACKEND_URL/perfil', perfilCompleto).subscribe(...);

    alert('Perfil salvo com sucesso!');
    this.perfilService.resetPerfil();
    this.router.navigate(['/home']);  // Ou outra tela final
  }

}
