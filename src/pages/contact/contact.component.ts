import { Component, OnInit } from '@angular/core';
import { Personal, PersonalService } from '../../app/services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ContactComponent implements OnInit {
  personal: Personal[] = [];
  terminoBusqueda: string = '';

  constructor(private personalService: PersonalService) {}

  ngOnInit() {
    this.personalService.obtenerPersonal().subscribe(data => {
      this.personal = data;
    });
  }

  get personalFiltrado(): Personal[] {
    const t = this.terminoBusqueda.toLowerCase();
    return this.personal.filter(p =>
      p.nombre.toLowerCase().includes(t) || p.rol.toLowerCase().includes(t)
    );
  }
}
