import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  logoSrc='assets/arsen-portraite.png';
  faShoppingCart = faShoppingCart;
  cartItems: string[] = [];
  cartDropdownVisible: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  toggleCartDropdown(): void {
    this.cartDropdownVisible = !this.cartDropdownVisible;
  }

  checkout(): void {
    this.cartService.clearCart();
    this.cartDropdownVisible = false;
  }
}
