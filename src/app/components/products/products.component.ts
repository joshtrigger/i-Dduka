import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/shared/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  url: String = 'https://safe-tundra-59834.herokuapp.com/products';
  products: Array<Object>;
  loading: Boolean;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getAllProducts();
  }

  showLoader(){
    this.loading = true;
  }

  hideLoader(){
    this.loading = false;
  }
  getAllProducts():void {
    this.showLoader()
    this.httpService.get(this.url).subscribe(
      value => {
        this.products = value;
        this.hideLoader()
      },
      err => {
        console.log(err);
      }
    );
  }

  placeOrder(event):void {
    console.log(event);
  }
}
