import { Component,OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit{
  cart: Cart= {items:[]}
dataSource:Array<CartItem> =[]
displayColumuns : Array <string> =[
  'product','name','price','quantity','total','action'
]
constructor(private cartService : CartService,private http:HttpClient){}
ngOnInit():void{
  this.dataSource=this.cart.items;
  this.cartService.cart.subscribe((_cart:Cart)=>{
    this.cart=_cart
    this.dataSource=this.cart.items
  })
}
getTotal(items:Array <CartItem>):number{
return this.cartService.getTotal(items)
}
onClearCart():void{
  this.cartService.clearCart()
}
onRemoveFromCart(item:CartItem):void{
  this.cartService.removeFromCart(item)
}
onAdd(item:CartItem):void {
  this.cartService.addToCart(item)

}
onSubstract(item:CartItem):void {
  this.cartService.substract(item)
}




}
