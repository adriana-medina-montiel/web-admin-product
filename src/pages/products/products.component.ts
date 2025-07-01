import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../../app/services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ProductsComponent implements OnInit {
  productos: Producto[] = [];
  terminoBusqueda: string = '';

  constructor(private productosService: ProductosService) {}

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
}
