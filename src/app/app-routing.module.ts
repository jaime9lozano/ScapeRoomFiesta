import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'prueba1',
    loadChildren: () => import('./pages/prueba1/prueba1.module').then( m => m.Prueba1PageModule)
  },
  {
    path: 'prueba2',
    loadChildren: () => import('./pages/prueba2/prueba2.module').then( m => m.Prueba2PageModule)
  },
  {
    path: 'prueba3',
    loadChildren: () => import('./pages/prueba3/prueba3.module').then( m => m.Prueba3PageModule)
  },
  {
    path: 'prueba4',
    loadChildren: () => import('./pages/prueba4/prueba4.module').then( m => m.Prueba4PageModule)
  },
  {
    path: 'prueba5',
    loadChildren: () => import('./pages/prueba5/prueba5.module').then( m => m.Prueba5PageModule)
  },
  {
    path: 'prueba6',
    loadChildren: () => import('./pages/prueba6/prueba6.module').then( m => m.Prueba6PageModule)
  },
  {
    path: 'prueba7',
    loadChildren: () => import('./pages/prueba7/prueba7.module').then( m => m.Prueba7PageModule)
  },
  {
    path: 'resolver',
    loadChildren: () => import('./pages/resolver/resolver.module').then( m => m.ResolverPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
