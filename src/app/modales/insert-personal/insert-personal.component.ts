import { Component } from '@angular/core';
import { InsertPersonalService, Personal } from '../../services/personal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-personal',
  imports: [FormsModule],
  templateUrl: './insert-personal.component.html',
  styleUrl: './insert-personal.component.css'
})
export class InsertPersonalComponent {
  personal: Personal = {
    id_personal: 0,
    nombre: '',
    rol: '',
    telefono: '',
    email: ''
  };

  constructor(
    public modal: NgbActiveModal,
    private insertService: InsertPersonalService
  ) {}

  guardar() {
    if (!this.personal.nombre || !this.personal.rol) {
      alert('Los campos nombre y rol son obligatorios.');
      return;
    }

    this.insertService.insertarPersonal(this.personal).subscribe({
      next: (res) => {
        alert(res.message);
        this.modal.close('guardado');
      },
      error: (err) => {
        console.error('Error al insertar personal:', err);
        alert('Error al insertar personal.');
      }
    });
  }
}