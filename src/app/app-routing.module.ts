import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GalerieComponent } from './galerie/galerie.component';

const routes: Routes = [
  {path: '', component: AccueilComponent },
  {path: 'galerie', component: GalerieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
