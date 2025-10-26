import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteUpdateService } from '../../services/personal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-cliente',
  imports: [FormsModule],
  templateUrl: './update-cliente.component.html',
  styleUrl: './update-cliente.component.css'
})
export class UpdateClienteComponent {

  @Input() cliente: any = {
    id_cliente: '',
    nombre: '',
    correo: '',
    password: '',
    id_membrecia: ''
  };

  constructor(
    public modal: NgbActiveModal,
    private clienteupService: ClienteUpdateService
  ) {}

  guardar() {
    this.clienteupService.actualizarCliente(this.cliente).subscribe({
      next: (res) => {
        console.log(res);
        // Devolver objeto con cliente actualizado
        this.modal.close({ actualizado: this.cliente });
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}