import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


//VISTAS DE GYM

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
  id_membrecia: number;
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

//deletes 
@Injectable({
  providedIn: 'root'
})
export class DeletePersonalService {
  private apiUrl = 'http://localhost/api/delete_personal.php';

  constructor(private http: HttpClient) {}

  eliminarPersonal(id_personal: number): Observable<any> {
    return this.http.post(this.apiUrl, { id_personal });
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteProductoService {
  private apiUrl = 'http://localhost/api/delete_producto.php';

  constructor(private http: HttpClient) {}

  eliminarProducto(id_producto: number): Observable<any> {
    return this.http.post(this.apiUrl, { id_producto });
  }
}
@Injectable({
  providedIn: 'root'
})
export class DeleteMembresiaService {
  private apiUrl = 'http://localhost/api/delete_membrecia.php';

  constructor(private http: HttpClient) {}

  eliminarMembresia(id_membrecia: number): Observable<any> {
    return this.http.post(this.apiUrl, { id_membrecia });
  }
}

//updates
@Injectable({
  providedIn: 'root'
})
export class UpdatePersonalService {
  private apiUrl = 'http://localhost/api/update_personal.php';

  constructor(private http: HttpClient) {}

  actualizarPersonal(personal: Personal): Observable<any> {
    return this.http.post(this.apiUrl, personal);
  }
}
@Injectable({ providedIn: 'root' })
export class UpdateProductoService {
  private url = 'http://localhost/api/update_producto.php';

  constructor(private http: HttpClient) {}

  actualizarProducto(producto: Producto): Observable<any> {
    const body = {
      _id_producto: producto.id_producto,
      _nombre: producto.nombre,
      _categoria: producto.categoria,
      _precio: producto.precio,
      _stock: producto.stock
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.url, body, { headers });
  }
}

