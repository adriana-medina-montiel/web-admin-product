import { Component, OnInit } from '@angular/core';
import { Inventario, InventarioService } from '../../app/services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  imports: [CommonModule,FormsModule]
})
export class AboutComponent implements OnInit {
  inventario: Inventario[] = [];
  terminoBusqueda: string = '';

  constructor(private inventarioService: InventarioService) {}

  ngOnInit() {
    this.inventarioService.obtenerInventario().subscribe(data => {
      this.inventario = data;
    });
  }

  get inventarioFiltrado(): Inventario[] {
    const t = this.terminoBusqueda.toLowerCase();
    return this.inventario.filter(item =>
      item.producto?.toLowerCase().includes(t) ||
      item.cantidad?.toLowerCase().includes(t) ||
      item.ubicacion?.toLowerCase().includes(t) ||
      item.fecha?.toLowerCase().includes(t)
    );
  }
}
