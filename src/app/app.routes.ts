import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', loadComponent: () => import('../pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'membrecias', loadComponent: () => import('../pages/membresias/membresias.component').then(m => m.MembresiasComponent) },
];
