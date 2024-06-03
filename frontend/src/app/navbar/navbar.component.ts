import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { AuthService } from '../shared/services/auth.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoSrc = 'assets/arsen-portraite.png';
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  cartItems: string[] = [];
  cartDropdownVisible: boolean = false;
  navbarOpen: boolean = false;
  user: { email: string, role: string } | null = null;
  userDropdownVisible: boolean = false;

  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleUserDropdown() {
    this.userDropdownVisible = !this.userDropdownVisible;
  }

  closeNavbar(): void {
    this.navbarOpen = false;
  }

  toggleCartDropdown(): void {
    this.cartDropdownVisible = !this.cartDropdownVisible;
  }

  checkout(): void {
    this.cartService.clearCart();
    this.cartDropdownVisible = false;
  }

  logout(): void {
    this.authService.logout();
  }
}
