import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/shared/http.service';
import { Store, select } from '@ngrx/store';
import { AppConfig } from '../../config';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Object>;
  loading: Boolean;
  showProductForm: Boolean = false;

  constructor(private httpService: HttpService, private store: Store<any>) {}

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
        })
        this.store.pipe(select('products')).subscribe(
          products=>{
            this.products = products.products;
          }
        )
      },
      err => {
        console.log(err);
      }
    );
  }

  placeOrder(event): void {
    console.log(event);
  }

  notification(event) {
    if (event) {
      this.showProductForm = false;
    }
  }

  addProduct() {
    this.showProductForm = !this.showProductForm;
  }
}
