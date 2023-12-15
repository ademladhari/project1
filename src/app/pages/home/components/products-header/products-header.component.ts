import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  @Output() itemsCountChange= new EventEmitter<number>();
  @Output() sortChange= new EventEmitter<string>();

  sort='desc'
  itemsShowCount=12
  @Output() columsCountChange= new EventEmitter<number>();
  
  constructor(){}
  ngOnInit():void{}
  onSortUpdated(newSort:string):void
{
  this.sort=newSort
  this.sortChange.emit(newSort)
}
onItemsUpdated(count:number):void {
 this.itemsShowCount = count;
 this.itemsCountChange.emit(count)
}
  onColumnsUpdated (colsNum:number):void{
    this.columsCountChange.emit(colsNum)

  }

}
