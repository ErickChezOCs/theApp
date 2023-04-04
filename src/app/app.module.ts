import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { HelloWorldComponent } from './montest.component';
import { CoreModule } from './core/core.module';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';



@NgModule({
  declarations: [
    HelloWorldComponent,
    AppComponent,
    CopyrightDirective,
    NumericDirective
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    OrdersModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
