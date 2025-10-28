import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente, ClienteInsert, ClientesInsertService } from '../../services/personal.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insert-cliente',
  imports: [FormsModule, CommonModule],
  templateUrl: './insert-cliente.component.html',
  styleUrl: './insert-cliente.component.css'
})
export class InsertClienteComponent {
  cliente: ClienteInsert = {
    nombre: '',
    correo: '',
    password: '',
    id_membrecia: 0
  };

  // IDs fijos para el select
  membresiaIds = [1, 2, 3, 4];

  constructor(
    public modal: NgbActiveModal,
    private clientesService: ClientesInsertService
  ) {}

  guardar() {
    if (!this.cliente.nombre || !this.cliente.correo || !this.cliente.password || !this.cliente.id_membrecia) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    this.clientesService.registrarCliente(this.cliente).subscribe({
      next: (res) => {
        alert(res.message || 'Cliente insertado correctamente.');
        this.modal.close('guardado');
      },
      error: (err) => {
        console.error('Error al insertar cliente:', err);
        alert('Error al insertar cliente.');
      }
    });
  }
}