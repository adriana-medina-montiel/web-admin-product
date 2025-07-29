import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateMembreciasService } from '../../services/personal.service';

@Component({
  selector: 'app-update-membrecias',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-membrecias.component.html',
  styleUrls: ['./update-membrecias.component.css']
})
export class UpdateMembreciasComponent {
  @Input() membresia!: { id_membrecia: number; nombre: string; precio: number; duracion: number };
  constructor(
    public modal: NgbActiveModal,
    private updateService: UpdateMembreciasService
  ) {}
  guardar() {
    this.updateService.actualizarMembresia(this.membresia).subscribe({
      next: (res) => {
        alert(res.message);
        this.modal.close('actualizado');
      },
      error: (err) => {
        console.error('Error al actualizar membresía:', err);
        alert('Error al actualizar la membresía.');
      }
    });
  }
  

}
