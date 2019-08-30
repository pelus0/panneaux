import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'pannneaux', loadChildren: './pannneaux/pannneaux.module#PannneauxPageModule' },
  { path: 'quizz', loadChildren: './quizz/quizz.module#QuizzPageModule' },
  { path: 'preferences', loadChildren: './preferences/preferences.module#PreferencesPageModule' },
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesPageModule' },
  { path: 'noter', loadChildren: './noter/noter.module#NoterPageModule' },
  { path: 'details', loadChildren: './details/details.module#DetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
