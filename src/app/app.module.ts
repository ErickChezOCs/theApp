import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { HelloWorldComponent } from './montest.component';

@NgModule({
  declarations: [
    HelloWorldComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
