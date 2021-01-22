import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },   {
    path: 'insert',
    loadChildren: () => import('./insert/insert.module').then( m => m.InsertPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'details/:key',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },  {
    path: 'mis-ventas',
    loadChildren: () => import('./mis-ventas/mis-ventas.module').then( m => m.MisVentasPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
