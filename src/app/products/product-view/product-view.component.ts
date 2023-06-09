import { Component, Input, OnInit  } from '@angular/core';
import { ProductViewService } from './product-view.service';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers : [ProductViewService]
})
export class ProductViewComponent {
  @Input() id = -1;
  name = ';'

  private getProduct() {
    this.productviewService.getProduct(this.id).subscribe(product => {
     if(product) {
      this.name = product.name;
     }
    });

  }

  constructor(private productviewService: ProductViewService) {}
  ngOnInit(): void {
  this.getProduct();
  }

}
