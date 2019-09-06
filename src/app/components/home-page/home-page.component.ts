import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { UserService } from 'src/app/services/user-service.service';
import { AppConfig } from 'src/app/config';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  loginForm: FormGroup;
  message: string;
  url: string = 'user/login';
  disabled: boolean = true;
  label: string = 'Sign In';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toaster: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      if (this.loginForm.status === 'VALID') {
        this.disabled = false;
      }
    });
  }

  showButton() {
    this.label = 'Sign In';
    this.disabled = false;
  }

  hideButton() {
    this.label = 'Signing In...';
    this.disabled = true;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occured: ', error.error.message);
    } else {
      console.log(
        `Something went wrong on the server status ${error.status}, ${
          error.error.error.message
        }`
      );
    }
    return throwError('Please try again later');
  }

  loginInuser() {
    this.hideButton();
    const payload = this.loginForm.value;
    this.userService
      .login(`${AppConfig.BASE_URL}/${this.url}`, payload)
      .subscribe(
        response => {
          this.showButton()
          // redirect user to products page
          this.router.navigateByUrl('/products')
        },
        err => {
          this.showButton()
          this.handleError(err)
        }
      );
  }
}
