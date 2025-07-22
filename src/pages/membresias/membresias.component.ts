import { Component, OnInit } from '@angular/core';
import { DeleteMembresiaService, Membresia, MembresiasService } from '../../app/services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styleUrls: ['./membresias.component.css'],
  imports: [CommonModule, FormsModule],
})
export class MembresiasComponent implements OnInit {
  membresias: Membresia[] = [];
  terminoBusqueda: string = '';

  constructor(private membresiasService: MembresiasService, private deleteMembresiaService: DeleteMembresiaService, private modalService:NgbModal) {}

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
  elimninarMembresia(id: number): void {
    if (confirm('¿Estás segura/o de que deseas eliminar esta membresía?')) {
      this.deleteMembresiaService.eliminarMembresia(id).subscribe({
        next: () => {
          // Elimina el registro localmente
          this.membresias = this.membresias.filter(m => m.id_membrecia !== id);
        },
        error: (err) => {
          console.error('Error al eliminar membresía:', err);
          alert('Ocurrió un error al intentar eliminar la membresía.');
        }
      });
    }
  }
}
