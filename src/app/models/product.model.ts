export class Product {
  title: string;
  description: string;
  stock: number;
  price: number;
  img: string;
  constructor(
    pTitle: string = 'Title',
    pDesc: string = 'product description',
    pStock: number = 100,
    pPrice: number = 10,
    pImage: string = ''
  ) {
    this.title = pTitle;
    this.description = pDesc;
    this.stock = pStock;
    this.price = pPrice;
    this.img = pImage;
  }
}
