import { Component } from '@angular/core';
import { InsertProductoService, Producto } from '../../services/personal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert-prodcutos',
  imports: [FormsModule],
  templateUrl: './insert-prodcutos.component.html',
  styleUrl: './insert-prodcutos.component.css'
})
export class InsertProdcutosComponent {
 producto: Producto = {
    id_producto: 0,
    nombre: '',
    categoria: '',
    precio: 0,
    stock: 0
  };

  constructor(
    public modal: NgbActiveModal,
    private insertService: InsertProductoService
  ) {}

  guardar() {
    if (!this.producto.nombre || !this.producto.categoria) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    this.insertService.insertarProducto(this.producto).subscribe({
      next: (res) => {
        alert(res.message);
        this.modal.close('guardado');
      },
      error: (err) => {
        console.error('Error al insertar producto:', err);
        alert('Error al insertar el producto.');
      }
    });
  }
}