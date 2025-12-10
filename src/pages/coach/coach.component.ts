import { Component, OnInit } from '@angular/core';
import { CoachesService } from '../../app/services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-coach',
  imports: [ CommonModule,FormsModule, ],
  templateUrl: './coach.component.html',
  styleUrl: './coach.component.css'
})
export class CoachComponent implements OnInit {

   coaches: any[] = [];
  clases: any[] = [];
  totalClases: number = 0;

  coachSeleccionado: any = null;

  // fecha en formato YYYY-MM-DD
  diaSeleccionado: string = '';

  constructor(private coachService: CoachesService) {}

  ngOnInit() {
    this.diaSeleccionado = this.obtenerHoy();
    this.cargarCoaches();
  }

  obtenerHoy(): string {
    // devuelve YYYY-MM-DD
    return new Date().toISOString().slice(0, 10);
  }

  cargarCoaches() {
    this.coachService.getCoaches().subscribe((data: any) => {
      // filtra por rol si tu API devuelve todos
      this.coaches = Array.isArray(data) ? data.filter((p: any) => p.rol === 'Coach') : [];
    });
  }

  // Al seleccionar un coach: cargar clases para la fecha actual (diaSeleccionado)
  verClases(coach: any) {
    this.coachSeleccionado = coach;
    this.cargarClasesDia();
  }

  // carga las clases segun coachSeleccionado y diaSeleccionado
  cargarClasesDia() {
    if (!this.coachSeleccionado) return;

    const id = this.coachSeleccionado.id_personal;
    const dia = this.diaSeleccionado || this.obtenerHoy();

    this.coachService.getClasesPorCoachDia(id, dia).subscribe((res: any) => {
      // tu PHP ahora responde { clases: [...], total: n }
      this.clases = res.clases || [];
      this.totalClases = res.total || 0;
    }, err => {
      console.error('Error al obtener clases por día:', err);
      this.clases = [];
      this.totalClases = 0;
    });
  }

  // cuando el usuario cambia la fecha manualmente
  onChangeFecha() {
    this.cargarClasesDia();
  }

  // utilidades para navegar fechas (día anterior / siguiente)
  cambiarDia(delta: number) {
    const d = new Date(this.diaSeleccionado);
    d.setDate(d.getDate() + delta);
    this.diaSeleccionado = d.toISOString().slice(0,10);
    this.cargarClasesDia();
  }

  cerrarDetalle() {
    this.coachSeleccionado = null;
    this.clases = [];
    this.totalClases = 0;
  }
}