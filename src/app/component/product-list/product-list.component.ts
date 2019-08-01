import { Component, OnInit } from '@angular/core';

import { IProduct } from '../../models/product';
import { ProductListService } from 'src/app/product-list.service';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  private _listFilter = '';
   get listFilter(): string {
     return this._listFilter;
   }
   set listFilter(value: string) {
     this._listFilter = value;
     this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
     console.log('filter string: ' + value);
   }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productSvc: ProductListService)
   {
     this.products=this.productSvc.getProducts();
     this.filteredProducts = this.products;
  }

  onFilterChange(event: any): void {
    console.log('onFilterChange');
    console.log(event);
    this.productSvc.message = 'Filter is On';
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
  }

  
}