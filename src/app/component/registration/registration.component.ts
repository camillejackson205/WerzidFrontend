import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public  registerform: FormGroup;

  constructor(public fb: FormBuilder, public as: AuthService) { }

  ngOnInit() {
    this.createForm();
  }
  
  createForm(){
    this.registerform = this.fb.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl
    });
  }

  onSubmit(){
    console.log(this.registerform.value);
    this.as.register(this.registerform.value)
    .subscribe(()=>this.as.login(this.registerform.value));
  }
}

