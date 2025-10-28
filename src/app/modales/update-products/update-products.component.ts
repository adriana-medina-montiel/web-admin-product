import { Component, Input } from '@angular/core';
import { Producto, UpdateProductoService } from '../../services/personal.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update-products',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-products.component.html',
  styleUrl: './update-products.component.css'
})
export class UpdateProductsComponent {
 @Input() producto!: Producto;

  constructor(
    public modal: NgbActiveModal,
    private updateService: UpdateProductoService
  ) {}

  guardar() {
    this.updateService.actualizarProducto(this.producto).subscribe({
      next: (res) => {
        alert(res.message);
        this.modal.close('actualizado');
      },
      error: (err) => {
        console.error('Error al actualizar producto:', err);
        alert('Error al actualizar el producto.');
      }
    });
  }
}