import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: new FormControl,
      password: new FormControl
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.as.login(this.loginForm.value);
  }
}


