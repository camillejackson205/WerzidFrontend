import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StripeComponent } from './stripe.component';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    StripeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [StripeComponent]
})
export class StripeModule { }