import { Component, Input } from '@angular/core'; //Input sert à passer des données d'un composant
 // parent à un composant enfant



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],

})


export class ProductDetailComponent {
  @Input() name ='';

}
