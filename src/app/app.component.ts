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

}
