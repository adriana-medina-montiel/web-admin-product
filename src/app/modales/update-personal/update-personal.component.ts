import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personal, UpdatePersonalService } from '../../services/personal.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-personal',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-personal.component.html',
  styleUrl: './update-personal.component.css'
})
export class UpdatePersonalComponent {

    @Input() personal!: Personal;

  constructor(
    public modal: NgbActiveModal,
    private updateService: UpdatePersonalService
  ) {}

  guardar() {
    this.updateService.actualizarPersonal(this.personal).subscribe({
      next: (res) => {
        alert(res.message);
        this.modal.close('actualizado');
      },
      error: (err) => {
        console.error('Error al actualizar:', err);
        alert('Error al actualizar el personal.');
      }
    });
  }
}

