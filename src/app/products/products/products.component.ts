import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/shared/http.service';
import { Store, select } from '@ngrx/store';
import { AppConfig } from '../../config';
import { Product } from 'src/app/interfaces/product.interface';
import { StoreState } from '../../interfaces/store.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  loading: Boolean;
  showProductForm: Boolean = false;

  constructor(
    private httpService: HttpService,
    private store: Store<StoreState>
  ) {}

  ngOnInit() {
    this.getAllProducts();
  }

  showLoader() {
    this.loading = true;
  }

  hideLoader() {
    this.loading = false;
  }
  getAllProducts(): void {
    this.showLoader();
    this.httpService.get(`${AppConfig.BASE_URL}/products`).subscribe(
      value => {
        this.hideLoader();
        this.store.dispatch({
          type: 'DISPLAY_PRODUCTS',
          payload: value
        });
        this.store.pipe(select('products')).subscribe(products => {
          this.products = products.products;
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  placeOrder(event): void {
    this.store.dispatch({
      type: 'SELECTED_PRODUCT',
      payload: event
    });
  }

  notification(event): void {
    if (event) {
      this.showProductForm = false;
    }
  }

  addProduct(): void {
    this.showProductForm = !this.showProductForm;
  }
}
