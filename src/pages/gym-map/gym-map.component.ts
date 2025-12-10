import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Area {
  id: string;
  name: string;
  status: 'available' | 'busy' | 'limited';
  occupants: number;
  capacity: number;
  coach?: string;
  nextClass?: { dia: string; hora: string; area?: string };
  description?: string;
  coords?: any; // opcional para posicionar tooltip si lo necesitas
}

@Component({
  selector: 'app-gym-map',
  templateUrl: './gym-map.component.html',
  styleUrls: ['./gym-map.component.css'],
  imports: [CommonModule]
})
export class GymMapComponent implements OnInit {

  areas: Area[] = [];

  hoveredAreaId: string | null = null;
  selectedArea: Area | null = null;
  tooltip = { show: false, x: 0, y: 0, text: '' };

  constructor() {}

  ngOnInit(): void {
    // Datos de ejemplo; reemplaza por llamada a tu API si quieres
    this.areas = [
      { id: 'cardio', name: 'Cardio', status: 'busy', occupants: 8, capacity: 12, coach: 'Raul', nextClass: { dia: '2025-12-10', hora: '14:00' }, description: 'Cintas, elípticas y bicis' },
      { id: 'pesas', name: 'Pesas', status: 'available', occupants: 3, capacity: 15, coach: 'Victor', nextClass: { dia: '2025-12-10', hora: '16:00' }, description: 'Área de fuerza y máquinas' },
      { id: 'box', name: 'Box', status: 'limited', occupants: 6, capacity: 8, coach: 'Leonel', nextClass: { dia: '2025-12-10', hora: '18:00' }, description: 'Entrenamiento funcional y box' },
      { id: 'yoga', name: 'Yoga', status: 'available', occupants: 0, capacity: 20, coach: 'Santi', nextClass: { dia: '2025-12-11', hora: '10:00' }, description: 'Sala de estiramiento y yoga' },
      { id: 'recepcion', name: 'Recepción', status: 'available', occupants: 1, capacity: 3, description: 'Recepción y atención' }
    ];

    // Si quieres traer datos reales, descomenta y adapta:
    // this.myService.getAreasStatus().subscribe(res => this.areas = res);
  }

  // Hover handlers
  onAreaEnter(areaId: string, event: MouseEvent) {
    this.hoveredAreaId = areaId;
    const area = this.areas.find(a => a.id === areaId);
    if (!area) return;

    const text = `${area.name} · ${area.occupants}/${area.capacity}`;
    this.tooltip.text = text;
    this.tooltip.show = true;

    // Calculate tooltip pos
    const padding = 12;
    this.tooltip.x = event.clientX + padding;
    this.tooltip.y = event.clientY + padding;
  }

  onAreaMove(event: MouseEvent) {
    if (!this.tooltip.show) return;
    const padding = 12;
    this.tooltip.x = event.clientX + padding;
    this.tooltip.y = event.clientY + padding;
  }

  onAreaLeave() {
    this.hoveredAreaId = null;
    this.tooltip.show = false;
  }

  // Click open modal/detail
  onAreaClick(areaId: string) {
    const area = this.areas.find(a => a.id === areaId) || null;
    this.selectedArea = area;
  }

  // Cerrar modal
  closeDetail() {
    this.selectedArea = null;
  }

  // Helpers para colores/estilos
  areaColor(status: Area['status']) {
    switch (status) {
      case 'available': return '#26a69a'; // green-ish
      case 'busy': return '#ff7043'; // orange/red
      case 'limited': return '#ffca28'; // yellow
      default: return '#9e9e9e';
    }
  }

  areaOpacity(area: Area) {
    // Más ocupación -> más opaco
    const ratio = Math.min(1, area.occupants / Math.max(1, area.capacity));
    return 0.6 + ratio * 0.4; // entre 0.6 y 1
  }

  // Si quieres actualizar en tiempo real (simulado aquí)
  simulateUpdate() {
    // solo demo: cambia valores aleatorios
    this.areas = this.areas.map(a => {
      const delta = Math.random() < 0.5 ? -1 : 1;
      const occ = Math.max(0, Math.min(a.capacity, a.occupants + delta));
      const status = occ >= a.capacity ? 'busy' : occ >= Math.floor(a.capacity * 0.6) ? 'limited' : 'available';
      return { ...a, occupants: occ, status };
    });
  }
}
