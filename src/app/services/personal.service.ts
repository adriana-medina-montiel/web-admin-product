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

export interface Cliente {
  id_cliente: number;
  nombre: string;
  correo: string;
  password: string;
  nombre_membrecia: string;
}
@Injectable({  providedIn: 'root'})
export class clientesService {
  private apiUrl = 'http://localhost/api/get_cliente.php';

  constructor(private http: HttpClient) {}

  obtenerClientes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
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
@Injectable({
  providedIn: 'root'
})
export class DeleteClienteService {
  private apiUrl = 'http://localhost/api/delete_cliente.php';
  constructor(private http: HttpClient) {}
  eliminarCliente(id_cliente: number): Observable<any> {
    return this.http.post(this.apiUrl, { id_cliente });
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
export interface Membresia {
  id_membrecia: number;
  nombre: string;
  precio: number;
  duracion: number;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateMembreciasService {
  private apiUrl = 'http://localhost/api/update_membrecia.php';

  constructor(private http: HttpClient) {}

  actualizarMembresia(membresia: Membresia): Observable<any> {
    const formData = new FormData();
    formData.append('id_membresia_', membresia.id_membrecia.toString());
    formData.append('nombre_', membresia.nombre);
    formData.append('precio_', membresia.precio.toString());
    formData.append('duracion_', membresia.duracion.toString());

    return this.http.post(this.apiUrl, formData);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ClienteUpdateService {

  private apiUrl = 'http://localhost/api/update_cliente.php';

  constructor(private http: HttpClient) {}

  actualizarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }
}

//insert
@Injectable({
  providedIn: 'root'
})
export class InsertProductoService {
  private apiUrl = 'http://localhost/api/insert_producto.php';

  constructor(private http: HttpClient) {}

  insertarProducto(producto: Producto): Observable<any> {
    const body = {
      nombre: producto.nombre,
      categoria: producto.categoria,
      precio: producto.precio,
      stock: producto.stock
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl, body, { headers });
  }
}


@Injectable({
  providedIn: 'root'
})
export class InsertPersonalService {
  private apiUrl = 'http://localhost/api/insert_personal.php';

  constructor(private http: HttpClient) {}

  insertarPersonal(personal: Personal): Observable<any> {
    const body = {
      nombre: personal.nombre,
      rol: personal.rol,
      telefono: personal.telefono,
      email: personal.email
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.apiUrl, body, { headers });
  }
}

export interface ClienteInsert {
  nombre: string;
  correo: string;
  password: string;
  id_membrecia: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClientesInsertService {

  private apiUrl = 'http://localhost/api/insert_cliente.php';

  constructor(private http: HttpClient) {}

  registrarCliente(cliente: ClienteInsert): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.apiUrl, cliente, { headers });
  }
}


@Injectable({
  providedIn: 'root'
})
export class VentasPService {
  private apiUrl = 'http://localhost/api';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_ventasP.php`);
  }

  registrarVenta(id: number, metodo: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/registrar_ventaP.php`, { id, metodo_pago: metodo });
  }

  getHistorial(): Observable<any> {
    return this.http.get(`${this.apiUrl}/get_historial_ventas.php`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class CoachesService {

    private apiURL = "http://localhost/api/clases_por_coach.php"; 
  private apiURLCoaches = "http://localhost/api/get_personal.php";

  constructor(private http: HttpClient) {}

  getCoaches(): Observable<any> {
    return this.http.get(this.apiURLCoaches);
  }

  getClasesPorCoach(id_personal: number): Observable<any> {
    const formData = new FormData();
    formData.append("id_personal", id_personal.toString());
    return this.http.post(this.apiURL, formData);
  }

  // NUEVO: obtener clases de un coach para un día específico
  getClasesPorCoachDia(id_personal: number, dia: string): Observable<any> {
    const formData = new FormData();
    formData.append("id_personal", id_personal.toString());
    // mandamos POST y el día por query string (tu PHP ya lo soporta)
    return this.http.post(`${this.apiURL}?dia=${dia}`, formData);
  }

}
  