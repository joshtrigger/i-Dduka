import { Product } from './product.interface';

export interface ProductState{
  products: Product[];
  selectedProduct: Product;
}