import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import data from './db/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  productos: Product[];

  constructor() {
    this.productos = [];
  }

  ngOnInit() {
    data.forEach((prod) => {
      let newProduct = new Product(
        prod.title,
        prod.descripcon,
        parseInt(prod.stock),
        parseFloat(prod.price),
        prod.img
      );
      this.productos.push(newProduct);
    });
  }
}
