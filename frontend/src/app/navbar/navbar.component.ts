import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { AuthService } from '../shared/services/auth.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoSrc = 'assets/arsen-portraite.png';
  faShoppingCart = faShoppingCart;
  cartItems: string[] = [];
  cartDropdownVisible: boolean = false;
  user: { email: string, role: string } | null = null;

  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  toggleCartDropdown(): void {
    this.cartDropdownVisible = !this.cartDropdownVisible;
  }

  checkout(): void {
    this.cartService.clearCart();
    this.cartDropdownVisible = false;
  }

  logout() {
    this.authService.logout();
  }
}
