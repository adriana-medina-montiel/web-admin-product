import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente, clientesService, DeleteClienteService } from '../../app/services/personal.service';
import { InsertClienteComponent } from '../../app/modales/insert-cliente/insert-cliente.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateClienteComponent } from '../../app/modales/update-cliente/update-cliente.component';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule, CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
   clientes: Cliente[] = [];
  terminoBusqueda: string = '';

  constructor(private clientesService: clientesService, private modalService:NgbModal, private deleteService:DeleteClienteService ) {}

  ngOnInit() {
    this.clientesService.obtenerClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  get clientesFiltrados(): Cliente[] {
    const t = this.terminoBusqueda.toLowerCase();
    return this.clientes.filter(item =>
      item.nombre?.toLowerCase().includes(t) ||
      item.correo?.toLowerCase().includes(t) ||
      item.password?.toLowerCase().includes(t) ||
      item.nombre_membrecia?.toLowerCase().includes(t)
    );
  }
  abrirModalInsertar() {
    const modalRef = this.modalService.open(InsertClienteComponent);
    modalRef.result.then((result) => {
      if (result === 'guardado') {
        this.ngOnInit(); // Recargar la lista de clientes
      }
    }, (reason) => {
      console.log('Modal dismissed with reason:', reason);
    });
  }

  eliminarCliente(id_cliente: number) {
    if (confirm('¿Seguro que quieres eliminar este cliente?')) {
      this.deleteService.eliminarCliente(id_cliente).subscribe({
        next: (res) => {
          console.log('Cliente eliminado:', res);
          // Actualizar la lista de clientes después de eliminar
          this.clientes = this.clientes.filter(c => c.id_cliente !== id_cliente);
        },
        error: (err) => console.error('Error al eliminar cliente:', err)
      });
    }
  }

  abrirModalActualizar(cliente: Cliente) {
  const modalRef = this.modalService.open(UpdateClienteComponent);
  modalRef.componentInstance.cliente = { ...cliente }; // Copia

  modalRef.result.then((result) => {
    if (result && result.actualizado) {
      this.clientes = this.clientes.map(c =>
        c.id_cliente === result.actualizado.id_cliente ? { ...result.actualizado } : c
      );
    }
  }, (reason) => {
    console.log('Modal dismissed with reason:', reason);
  }); 
 }



}