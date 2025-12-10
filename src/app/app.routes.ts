import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', loadComponent: () => import('../pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'membrecias', loadComponent: () => import('../pages/membresias/membresias.component').then(m => m.MembresiasComponent) },
  { path: 'clientes', loadComponent: () => import('../pages/clientes/clientes.component').then(m => m.ClientesComponent) },
  { path: 'ventas-p', loadComponent: () => import('../pages/ventas-p/ventas-p.component').then(m => m.VentasPComponent) },
  { path: 'grafica-ventas', loadComponent: () => import('../pages/grafica-ventas/grafica-ventas.component').then(m => m.GraficaVentasComponent) },
  { path: 'coach', loadComponent: () => import('../pages/coach/coach.component').then(m => m.CoachComponent) },
  { path: "gym-map", loadComponent: () => import('../pages/gym-map/gym-map.component').then(m => m.GymMapComponent) },
  { path: 'perfiles', loadComponent: () => import('../pages/perfiles/perfiles.component').then(m => m.PerfilesComponent) },


];
