import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComposantRecepteurComponent } from './composant-recepteur/composant-recepteur.component';
import { ComposantDonneurComponent } from './composant-donneur/composant-donneur.component';



@NgModule({
  declarations: [
    ComposantRecepteurComponent,
    ComposantDonneurComponent
  ],
  imports: [
    CommonModule
  ],
  exports :
  [
    ComposantRecepteurComponent,
    ComposantDonneurComponent

  ]
})
export class CoreModule { }
