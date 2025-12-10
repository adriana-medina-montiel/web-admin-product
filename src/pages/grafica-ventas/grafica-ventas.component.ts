import { Component, OnInit } from '@angular/core';
import { VentasPService } from '../../app/services/personal.service';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-grafica-ventas',
  imports: [],
  templateUrl: './grafica-ventas.component.html',
  styleUrl: './grafica-ventas.component.css'
})
export class GraficaVentasComponent implements OnInit {
  
  constructor(private ventasService: VentasPService) {}

  ngOnInit() {
    this.ventasService.getHistorial().subscribe((res: any) => {
      const labels = res.map((v: any) => v.producto);
      const datos = res.map((v: any) => v.total_vendidos);

      new Chart('graficaVentas', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Ventas realizadas',
            data: datos,
            backgroundColor: [
              'rgba(75, 192, 192, 0.7)',
              'rgba(255, 99, 132, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: 'rgba(0,0,0,0.1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            },
            title: {
              display: true,
              text: 'Historial de Ventas'
            }
          }
        }
      });
    });
  }
}

