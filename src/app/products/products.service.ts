import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
  getProducts(): Product[] {
    return [
      {
        name: 'Webcam',
        price: 100
      },
      {
        name: 'Bestlife',
        price: 1000
      },
      {
        name: 'Wargun',
        price: 5
      },
      {
        name:  'Mouse',
        price: 100
      },
      {
        name:'Pinpoint',
        price : 250
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
  }
}
