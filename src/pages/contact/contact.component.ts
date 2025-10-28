import { Component, OnInit } from '@angular/core';
import { DeletePersonalService, Personal, PersonalService } from '../../app/services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdatePersonalComponent } from '../../app/modales/update-personal/update-personal.component';
import { InsertPersonalComponent } from '../../app/modales/insert-personal/insert-personal.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, FormsModule],
})
export class ContactComponent implements OnInit {
  personal: Personal[] = [];
  terminoBusqueda: string = '';

  constructor(private personalService: PersonalService, private deletePersonalService: DeletePersonalService, private modalService:NgbModal) {}

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

  eliminarPersonal(id: number): void {
  if (confirm('¿Estás segura/o de que deseas eliminar este miembro?')) {
      this.deletePersonalService.eliminarPersonal(id).subscribe({
        next: () => {
          // Elimina el registro localmente
          this.personal = this.personal.filter(p => p.id_personal !== id);
        },
        error: (err) => {
          console.error('Error al eliminar personal:', err);
          alert('Ocurrió un error al intentar eliminar el personal.');
        }
      });
    }
  }
  abrirModal(miembro: Personal) {
  const modalRef = this.modalService.open(UpdatePersonalComponent);
  modalRef.componentInstance.personal = { ...miembro }; // se pasa una copia

  modalRef.result.then((result) => {
    if (result === 'actualizado') {
      this.personalService.obtenerPersonal().subscribe(data => {
        this.personal = data;
      });
    }
  }).catch(() => {});
 }


 abrirModalInsertarPersonal() {
  const modalRef = this.modalService.open(InsertPersonalComponent, { size: 'lg' });

  modalRef.result.then((result) => {
    if (result === 'guardado') {
      // Recarga la lista de personal
      this.personalService.obtenerPersonal().subscribe(data => {
        this.personal = data;  // asumiendo que tu lista se llama 'personales'
      });
    }
  }).catch((reason) => {
    console.log('Modal dismissed:', reason);
  });
 }


  


  
}
