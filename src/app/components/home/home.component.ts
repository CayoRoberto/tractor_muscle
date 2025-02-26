import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  sucesso: boolean = false;
  menuAberto: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute){

    }

    

  // Método para alternar a exibição do menu
  toggleMenu(): void {
    this.menuAberto = !this.menuAberto;
  }


    irParaAnalisePlano(){
      this.router.navigate(['/genero']);
    }

    VisualizarTreino(){
      this.router.navigate(['/treino']);
    }

    ngOnInit(){
      // Obtenha o valor de 'sucesso' nos query parameters
    this.route.queryParams.subscribe(params => {
      this.sucesso = params['sucesso'] === 'true'; // Converter para booleano
      console.log('Sucesso:', this.sucesso); // Apenas para depuração
    });
    }

}
