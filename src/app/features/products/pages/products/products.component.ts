import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productos: any[];

  constructor(private prodService: ProductsService) {
    this.productos = [];
  }

  ngOnInit(): void {
    const prods = this.getProds();
  }

  getProds = async () => {
    this.productos = await this.prodService.get();
  };
}
