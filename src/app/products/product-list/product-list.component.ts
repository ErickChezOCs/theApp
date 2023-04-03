import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})

export class ProductListComponent implements AfterViewInit {
  selectedProduct: Product | undefined;
  products: Product[] = [
    {
      name:  'Mouse',
      price: 100
    },
    {
      name:'Pinpoint',
      price : 250
    },
    {
      name: 'Webcam',
      price:758
    },
    {
      name:'Wireless Keyboard',
      price:25
    },
    
    {
      name:'Gotyou',
      price:10000
    },
    {
      name:'Microphone',
      price:500
    },
  ];

  onBuy() {
    window.alert(`You just Bought ${this.selectedProduct?.name}!`);
  }

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

 ngAfterViewInit(): void {
     if (this.productDetail) {
      console.log(this.productDetail.product);
     }
 }
}
