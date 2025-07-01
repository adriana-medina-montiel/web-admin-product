import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Personal {
  id_personal: number;
  nombre: string;
  rol: string;
  telefono: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private apiUrl = 'http://localhost/api/get_personal.php';

  constructor(private http: HttpClient) {}

  obtenerPersonal(): Observable<Personal[]> {
    return this.http.get<Personal[]>(this.apiUrl);
  }
}
export interface Producto {
  id_producto: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'http://localhost/api/get_productos.php';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}

export interface Membresia {
  id_membresia: number;
  nombre: string;
  precio: number;
  duracion: number; // en meses
}
@Injectable({
  providedIn: 'root'
})
export class MembresiasService {
  private apiUrl = 'http://localhost/api/get_membrecia.php';

  constructor(private http: HttpClient) {}

  obtenerMembresias(): Observable<Membresia[]> {
    return this.http.get<Membresia[]>(this.apiUrl);
  }
}

export interface Inventario {
  id_inventario: string;
  producto: string;
  cantidad: string;
  ubicacion: string;
  fecha: string;
}

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'http://localhost/api/get_inventario.php';

  constructor(private http: HttpClient) {}

  obtenerInventario(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.apiUrl);
  }
}
