import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global/global.service';
import { ProductsService } from 'src/app/services/products/products.service';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {

  products: any[] = [];

  constructor(
    private productsService: ProductsService,
    public globals: GlobalService
  ) {}


  ngOnInit(): void {
      this.getProducts();
  }

  async getProducts() {
    let allProducts = await this.productsService.getProducts();
    this.products = allProducts.products;
    console.log(this.products);


  }



}
