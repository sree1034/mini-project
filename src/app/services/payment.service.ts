import { Product } from '../model/product';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  items: Product[] = [];
  
  
    addToPayment(product: Product) {
      this.items.push(product);
    }

  }
