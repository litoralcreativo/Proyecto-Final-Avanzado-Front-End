import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private prodService: ProductsService) {}

  ngOnInit(): void {
    this.getProds();
  }

  getProds = async () => {
    const prods = await this.prodService.get();
    console.log(prods);
  };
}
