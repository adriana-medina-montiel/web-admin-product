import { Component, OnInit } from '@angular/core';
import { DeleteProductoService, Producto, ProductosService } from '../../app/services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ProductsComponent implements OnInit {
  productos: Producto[] = [];
  terminoBusqueda: string = '';

  constructor(private productosService: ProductosService, private deleteProductoService: DeleteProductoService, private modalService:NgbModal) {}

  ngOnInit() {
    this.productosService.obtenerProductos().subscribe(data => {
      this.productos = data;
    });
  }

  get productosFiltrados(): Producto[] {
    const termino = this.terminoBusqueda.toLowerCase();
    return this.productos.filter(p =>
      p.nombre.toLowerCase().includes(termino) ||
      p.categoria.toLowerCase().includes(termino)
    );
  }

  eliminarProducto(id: number): void {
    if (confirm('¿estas seguro de que deseas eliminar este producto?')){
      this.deleteProductoService.eliminarProducto(id).subscribe({
        next: () => {
          // Elimina el registro localmente
          this.productos = this.productos.filter(p => p.id_producto !== id);
        },
        error: (err) => {
          console.error('Error al eliminar producto:', err);
          alert('Ocurrió un error al intentar eliminar el producto.');
        }
      });
    }
   
  }
}
