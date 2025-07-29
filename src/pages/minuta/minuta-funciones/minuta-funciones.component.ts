import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-minuta-funciones',
  imports: [CommonModule],
  templateUrl: './minuta-funciones.component.html',
  styleUrl: './minuta-funciones.component.css'
})
export class MinutaFuncionesComponent {

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
