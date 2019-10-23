import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/shared/http.service';
import { Store } from '@ngrx/store';
import { AppConfig } from '../../config';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Object>;
  loading: Boolean;

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
        this.products = value;
        this.hideLoader();
      },
      err => {
        console.log(err);
      }
    );
  }

  placeOrder(event): void {
    console.log(event);
  }
}
