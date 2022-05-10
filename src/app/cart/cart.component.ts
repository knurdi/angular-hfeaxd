import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }
  
  checkOutForm = this.formBuilder.group({
    name: '',
    address: '',
  })

  onSubmit(): void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has been rejected', this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}
