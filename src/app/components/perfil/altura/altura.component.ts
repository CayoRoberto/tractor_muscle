import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../../../services/perfil.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-altura',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './altura.component.html',
  styleUrl: './altura.component.css'
})
export class AlturaComponent {
  altura: number = 0.0;

  constructor(private perfilService: PerfilService, private router: Router){

          }

  ngOnInit() {
    this.altura = this.perfilService.getPerfil().altura || 0;
  }
        
  salvarEAvancar() {
    if (!this.altura || this.altura <= 0) {
      alert('Informe sua altura.');
      return;
    }
      this.perfilService.setAltura(this.altura);
      this.router.navigate(['/biotipo']);
    }

          // irParaAnalisePlanoBiotipo(){
          //   this.router.navigate(['/biotipo']);
          // }

}
