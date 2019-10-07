import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() productName: String;
  @Input() price: Number;
  @Input() description: String;
  @Input() category: String;
  @Input() imageUrl: String;
  @Input() postedBy: String;
  @Input() user: String;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onClick(value):void {
    this.buttonClick.emit(value);
  }
}
