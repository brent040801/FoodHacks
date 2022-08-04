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
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'pasta',
    loadChildren: () => import('./pasta/pasta.module').then( m => m.PastaPageModule)
  },
  {
    path: 'fruits',
    loadChildren: () => import('./fruits/fruits.module').then( m => m.FruitsPageModule)
  },
  {
    path: 'meats',
    loadChildren: () => import('./meats/meats.module').then( m => m.MeatsPageModule)
  },
  {
    path: 'bread',
    loadChildren: () => import('./bread/bread.module').then( m => m.BreadPageModule)
  },
  {
    path: 'grains',
    loadChildren: () => import('./grains/grains.module').then( m => m.GrainsPageModule)
  },
  {
    path: 'vegetables',
    loadChildren: () => import('./vegetables/vegetables.module').then( m => m.VegetablesPageModule)
  },
  {
    path: 'psb',
    loadChildren: () => import('./psb/psb.module').then( m => m.PSBPageModule)
  },
  {
    path: 'psf',
    loadChildren: () => import('./psf/psf.module').then( m => m.PsfPageModule)
  },
  {
    path: 'fwp',
    loadChildren: () => import('./fwp/fwp.module').then( m => m.FwpPageModule)
  },
  {
    path: 'fac',
    loadChildren: () => import('./fac/fac.module').then( m => m.FacPageModule)
  },
  {
    path: 'fat',
    loadChildren: () => import('./fat/fat.module').then( m => m.FatPageModule)
  },
  {
    path: 'ffs',
    loadChildren: () => import('./ffs/ffs.module').then( m => m.FfsPageModule)
  },
  {
    path: 'fbc',
    loadChildren: () => import('./fbc/fbc.module').then( m => m.FbcPageModule)
  },
  {
    path: 'mfr',
    loadChildren: () => import('./mfr/mfr.module').then( m => m.MfrPageModule)
  },
  {
    path: 'mbb',
    loadChildren: () => import('./mbb/mbb.module').then( m => m.MbbPageModule)
  },
  {
    path: 'bdp',
    loadChildren: () => import('./bdp/bdp.module').then( m => m.BdpPageModule)
  },
  {
    path: 'bc',
    loadChildren: () => import('./bc/bc.module').then( m => m.BcPageModule)
  },
  {
    path: 'blc',
    loadChildren: () => import('./blc/blc.module').then( m => m.BlcPageModule)
  },
  {
    path: 'ghr',
    loadChildren: () => import('./ghr/ghr.module').then( m => m.GhrPageModule)
  },
  {
    path: 'gfr',
    loadChildren: () => import('./gfr/gfr.module').then( m => m.GfrPageModule)
  },
  {
    path: 'vvb',
    loadChildren: () => import('./vvb/vvb.module').then( m => m.VvbPageModule)
  },
  {
    path: 'vvf',
    loadChildren: () => import('./vvf/vvf.module').then( m => m.VvfPageModule)
  },
  {
    path: 'vpv',
    loadChildren: () => import('./vpv/vpv.module').then( m => m.VpvPageModule)
  },
  {
    path: 'vpr',
    loadChildren: () => import('./vpr/vpr.module').then( m => m.VprPageModule)
  },
  {
    path: 'vcc',
    loadChildren: () => import('./vcc/vcc.module').then( m => m.VccPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
