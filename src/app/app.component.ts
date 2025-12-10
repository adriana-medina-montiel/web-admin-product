import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-admin-product';

  inicioDropdownOpen = false;
  usuarioDropdownOpen = false;

  toggleInicioDropdown() {
    this.inicioDropdownOpen = !this.inicioDropdownOpen;
  }

  closeInicioDropdown() {
    this.inicioDropdownOpen = false;
  }

  toggleUsuarioDropdown() {
    this.usuarioDropdownOpen = !this.usuarioDropdownOpen;
  }

  closeUsuarioDropdown() {
    this.usuarioDropdownOpen = false;
  }

  cerrarSesion() {
    console.log('Sesión cerrada');
  }

  // 👇 Cierra los menús si se hace clic fuera
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;

    // Si el clic no fue dentro del menú izquierdo
    if (!target.closest('.menu-izquierdo')) {
      this.inicioDropdownOpen = false;
    }

    // Si el clic no fue dentro del menú derecho
    if (!target.closest('.menu-derecho')) {
      this.usuarioDropdownOpen = false;
    }
  }
}
