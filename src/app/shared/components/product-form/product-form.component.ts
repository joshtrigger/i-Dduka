import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  categories: Array<String> = [
    '',
    'Health & Beauty',
    'Electronics',
    'Home & Furniture',
    'Fashion',
    'Phone & Tablets',
    'Art & Sports',
    'Agriculture & Food',
    'Equipment & Tools',
    'Others'
  ];
  path: any;
  hideModal: Boolean;
  @Output() notify: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.hideModal = false;
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  btnClick(): void {
    console.log(this.productForm.value);
  }

  closeModal() {
    this.hideModal = true;
    this.notify.emit(true)
  }

  readImage(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => (this.path = reader.result);
      reader.readAsDataURL(file);
    }
  }
}
