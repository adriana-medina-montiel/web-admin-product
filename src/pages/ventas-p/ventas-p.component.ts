import { Component, OnInit } from '@angular/core';
import { VentasPService } from '../../app/services/personal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ventas-p',
  imports: [CommonModule],
  templateUrl: './ventas-p.component.html',
  styleUrl: './ventas-p.component.css'
})
export class VentasPComponent  implements OnInit {
   productos: any[] = [];
  modalVisible = false;
  productoSeleccionado: any;

  constructor(private ventasService: VentasPService) {}

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.ventasService.getProductos().subscribe(res => {
      this.productos = res;
    });
  }

  abrirModal(producto: any) {
    this.productoSeleccionado = producto;
    this.modalVisible = true;
  }

  registrarVenta(metodo: string) {
    this.ventasService.registrarVenta(this.productoSeleccionado.id, metodo).subscribe(() => {
      this.modalVisible = false;
      this.cargarProductos(); // refresca la lista
    });
  }
}