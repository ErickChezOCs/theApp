import { AfterViewInit, Component, OnInit,  ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductsService]

})

export class ProductListComponent implements OnInit, AfterViewInit {

  selectedProduct: Product | undefined;
  products: Product[] = [];


  onBuy() {
    window.alert(`You just Bought ${this.selectedProduct?.name}!`);
  }

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

 ngAfterViewInit(): void {
     if (this.productDetail) {
      console.log(this.productDetail.product);
     }
 }

 ngOnInit(): void {
     this.products = this.productService.getProducts();
 }
 constructor(private productService: ProductsService) {
  this.productService = new ProductsService();
}
}
