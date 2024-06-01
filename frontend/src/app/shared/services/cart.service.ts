// src/app/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
//   private cartCount = new BehaviorSubject<number>(0);
//   cartCount$ = this.cartCount.asObservable();

  private cartItems = new BehaviorSubject<string[]>([]);
  cartItems$ = this.cartItems.asObservable();


  addToCart(paintingName: string): void {
    const currentCart = this.cartItems.value;
    
    // Check if the painting is already in the cart
    if (!currentCart.includes(paintingName)) {
        const updatedCart = [...currentCart, paintingName];
        this.cartItems.next(updatedCart);
    }
  }
  clearCart(): void {
    this.cartItems.next([]);
  }

}
