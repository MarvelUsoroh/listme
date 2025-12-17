import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./page/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./page/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes)
  },
  {
    path: 'property-info/:id',
    loadComponent: () => import('./page/property-info/property-info.page').then(m => m.PropertyInfoPage)
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'add-property',
    loadComponent: () => import('./page/add-property/add-property.page').then( m => m.AddPropertyPage)
  }
];