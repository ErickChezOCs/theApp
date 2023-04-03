import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges,
  ChangeDetectionStrategy} from '@angular/core'; //Input sert à passer des données d'un composant
 // parent à un composant enfant  OnInit,
// ngOnInit(): void {
//  console.log(`Name is ${this.name} in the constructor`);}
//   ViewEncapsulation,


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  //encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})


export class ProductDetailComponent implements OnChanges {
  constructor() {
    console.log(`Name is ${this.name} in the constructor`);
  }
  ngOnChanges(changes: SimpleChanges): void {
      const product = changes['name'];
      if (!product.isFirstChange()) {
        const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log(`Product changed from ${oldValue} to ${newValue}`);
      }

  }

  @Input() name!:string ;
  @Output() bought = new EventEmitter();
  buy() {
    this.bought.emit();
  }
  get productName(): string {
    console.log(`Get ${this.name}`);
    return this.name;
  }


}
