import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseService {
  getProducts() {
    this.setEndPoint('productos');
    return this.get();
  }
  createProduct(obj: any) {
    this.setEndPoint('productos');
    return this.post(obj, true);
  }
}
