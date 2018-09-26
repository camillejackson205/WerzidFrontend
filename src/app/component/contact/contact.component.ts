import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(private fb: FormBuilder, private as: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      email: new FormControl,
      message: new FormControl
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    this.as.login(this.contactForm.value)
    .subscribe((data) => console.log(data));
  }
}
