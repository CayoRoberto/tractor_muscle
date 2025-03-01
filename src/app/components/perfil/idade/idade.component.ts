import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../../../services/perfil.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-idade',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './idade.component.html',
  styleUrl: './idade.component.css'
})
export class IdadeComponent {

  idade: number = 0;

 

  constructor(private perfilService: PerfilService, private router: Router) {}

  ngOnInit() {
    this.idade = this.perfilService.getPerfil().idade || 0;
  }
      
  salvarEAvancar() {
      if (!this.idade) {
          alert('Informe sua idade.');
           return;
      }
      this.perfilService.setIdade(this.idade);
      this.router.navigate(['/altura']);
 }
  
  
  irParaInforAltura(){
      this.router.navigate(['/altura']);
  }
}
