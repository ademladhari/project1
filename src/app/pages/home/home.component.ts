import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
const RowsHeight:{[id:number]:number}={
  1:400,
  3:335,
  4:350
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit,OnDestroy{
  cols=3
  rowHeight=RowsHeight[this.cols]
  category:string | undefined;
  products:Array<Product>| undefined
  sort='desc'
  count='12'
  productsSubscription:Subscription | undefined
  constructor(private cartService:CartService,private storeService:StoreService){

  }
  ngOnInit():void{
    this.getProducts()

  }
  getProducts():void {
    this.storeService.getAllProducts(this.count,this.sort,this.category).subscribe((_products)=>{
      this.products =_products
    })
  }
  oncolumsCountChange(colsNum:number):void{
    this.cols=colsNum
    this.rowHeight=RowsHeight[this.cols]
  }
  onShowCategory(newcategory:string):void{
  this.category=newcategory
  this.getProducts()
  }
  onAddTocart(product:Product):void {
    
    this.cartService.addToCart({
      product:product.image,
      name:product.title,
      price:product.price,
      quantity:1,
      id:product.id
    })

  }
  ngOnDestroy(): void {
      if (this.productsSubscription) {
        this.productsSubscription.unsubscribe();
  }
  }
  onItemsCountChange(newCount:number):void{
  this.count=newCount.toString()
  this.getProducts()
  }
  onSortChange(newSort:string):void{
    this.sort=newSort
    this.getProducts()
  }
}
