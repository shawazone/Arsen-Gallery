import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { AuthService } from '../shared/services/auth.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logoSrc = 'assets/arsen-portraite.png';

  faShoppingCart = faShoppingCart;
  faUser = faUser;
  faBars= faBars;

  cartItems: string[] = [];

  cartDropdownVisible: boolean = false;
  navbarOpen: boolean = false;
  userDropdownVisible: boolean = false;

  user: { email: string, role: string } | null = null;
  
  constructor(private cartService: CartService, private authService: AuthService) { }
  

  toggleCartDropdown() {
    this.cartDropdownVisible = !this.cartDropdownVisible;
  }



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
    if (this.userDropdownVisible) {
      this.cartDropdownVisible = false; // Close the cart dropdown if open
    }
  }

  closeAllDropdowns() {
    this.cartDropdownVisible = false;
    this.userDropdownVisible = false;
    this.navbarOpen = false;
  }

  closeNavbar(): void {
    this.navbarOpen = false;
  }

  // toggleCartDropdown(): void {
  //   this.cartDropdownVisible = !this.cartDropdownVisible;
  // }

  checkout(): void {
    this.cartService.clearCart();
    this.cartDropdownVisible = false;
  }

  logout(): void {
    this.authService.logout();
  }
}
