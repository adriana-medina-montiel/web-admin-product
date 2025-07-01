import { Component, OnInit } from '@angular/core';
import { Membresia, MembresiasService } from '../../app/services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styleUrls: ['./membresias.component.css'],
  imports: [CommonModule, FormsModule],
})
export class MembresiasComponent implements OnInit {
  membresias: Membresia[] = [];
  terminoBusqueda: string = '';

  constructor(private membresiasService: MembresiasService) {}

  ngOnInit() {
    this.membresiasService.obtenerMembresias().subscribe(data => {
      this.membresias = data;
    });
  }

  get membresiasFiltradas(): Membresia[] {
    const termino = this.terminoBusqueda.toLowerCase();
    return this.membresias.filter(m =>
      m.nombre.toLowerCase().includes(termino) ||
      m.precio.toString().includes(termino) ||
      m.duracion.toString().includes(termino)
    );
  }
}
