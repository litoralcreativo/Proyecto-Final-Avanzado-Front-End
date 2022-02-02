import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/global/global.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products: any[] = [];
  formularioDeCreacion: FormGroup;
  file: any;

  constructor(
    private productsService: ProductsService,
    public globals: GlobalService
  ) {
    this.formularioDeCreacion = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      model: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      category: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(255),
      ]),
      price: new FormControl('', [Validators.required, this.priceValidator]),
      stock: new FormControl('', [Validators.required, this.numberValidator]),
      imgTitle: new FormControl('', [Validators.required]),
      imgDescription: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  priceValidator(formControl: FormControl) {
    const value = formControl.value;
    if (/^\d*[.,]?\d{0,2}$/.test(value)) {
      return null;
    } else {
      return { priceValidator: 'el numero ingresado es incorrecto' };
    }
  }

  numberValidator(formControl: FormControl) {
    const value = formControl.value;
    if (/^\d*$/.test(value)) {
      return null;
    } else {
      return { numberValidator: 'el numero ingresado es incorrecto' };
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  async getProducts() {
    let allProducts = await this.productsService.getProducts();
    this.products = allProducts.products;
    console.log(this.products);
  }

  async onFormOK() {
    let { price, stock } = this.formularioDeCreacion.value;
    this.formularioDeCreacion.value.price = parseFloat(price);
    this.formularioDeCreacion.value.stock = parseFloat(stock);
    let body = { ...this.formularioDeCreacion.value };
    body.image = this.file;

    let formData = new FormData();
    let keys = Object.keys(this.formularioDeCreacion.value);
    for (let i = 0; i < keys.length; i++) {
      formData.append(keys[i], this.formularioDeCreacion.value[keys[i]]);
    }
    formData.set('image', this.file);
    console.log(formData);
    /* 
    console.log(formData.get('file')); */

    let postProduct = await this.productsService.createProduct(formData);
  }
}
