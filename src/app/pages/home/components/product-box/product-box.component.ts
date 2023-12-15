import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/pages/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent {
@Input( ) fullWidthMode=false;
@Input( ) product: Product |undefined 
@Output() addToCart =new EventEmitter();

constructor(){}

onAddTocart(): void {
  this.addToCart.emit(this.product)

}
}
