import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // corregido a styleUrls
})
export class AppComponent {
  title = 'web-admin-product';

  dropdownOpen = false;

toggleDropdown() {
  this.dropdownOpen = !this.dropdownOpen;
}

closeDropdown() {
  // Para cerrar cuando el div pierde foco (clic afuera)
  this.dropdownOpen = false;
}

cerrarSesion() {
  // Aquí va tu lógica para cerrar sesión
  console.log('Sesión cerrada');
  // Por ejemplo, redirigir o limpiar datos
}
}
