import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-composant-recepteur',
  templateUrl: './composant-recepteur.component.html',
  styleUrls: ['./composant-recepteur.component.css']
})
export class ComposantRecepteurComponent {
@Input() propriete_recue = '';

}
