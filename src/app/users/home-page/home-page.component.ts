import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { UserService } from 'src/app/services/users/user-service.service';
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
  disabled: boolean;
  label: string = 'Sign In';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toaster: SnackBarService,
    private router: Router
  ) {}

  ngOnInit() {
    this.disabled = true;
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(() => {
      this.disabled = this.loginForm.valid ? false : true;
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

  logInuser() {
    this.hideButton();
    const url = 'https://safe-tundra-59834.herokuapp.com/user/login';
    this.userService.login(url, this.loginForm.value).subscribe(
      value => {
        localStorage.setItem('authToken', value.token)
        this.router.navigateByUrl('/products')
      },
      err => {
        console.log(err);
        this.showButton();
      }
    );
  }
}
