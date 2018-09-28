import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components:
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { FaqComponent } from './component/faq/faq.component';
import { ContactComponent } from './component/contact/contact.component';
import { TextareaAutosizeModule } from 'ngx-textarea-autosize';

// Services
import { AuthService } from './services/auth.service';
import { TransactionsService } from './services/transactions.service';
import { TransactionsIndexComponent } from './component/transactions/transactions-index/transactions-index.component';

import { FooterComponent } from './component/footer/footer.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import { ProductsService } from './services/products.service';
import { ProductIndexComponent } from './component/product/product-index/product-index.component';
import { TransactionsCreateComponent } from './component/transactions/transactions-create/transactions-create.component';
import { TransactionsDetailComponent } from './component/transactions/transactions-detail/transactions-detail.component';
import { TransactionsEditComponent } from './component/transactions/transactions-edit/transactions-edit.component';
import { TransactionsDeleteComponent } from './component/transactions/transactions-delete/transactions-delete.component';

const routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'transactions', component: TransactionsIndexComponent},
  { path: 'transactions/create', component: TransactionsCreateComponent },
  // { path: 'transactions/:id', component: TransactionsDetailComponent },
  { 
    path: 'products', children: [
      { path: '' , component: ProductIndexComponent},
      { path: 'create', component: ProductCreateComponent },
      { path: 'detail/:id', component: ProductDetailComponent }
  ] 
},

{ 
  path: 'transactions', children: [
    { path: '' , component: TransactionsIndexComponent},
    { path: 'create', component: TransactionsCreateComponent },
    { path: 'detail/:id', component: TransactionsDetailComponent },
    { path: 'edit/:id', component: TransactionsEditComponent },
    { path: 'delete/:id', component: TransactionsDeleteComponent }
] 
},

  { path: '', component: HomeComponent },
];
 
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    FaqComponent,
    ContactComponent,
    TransactionsIndexComponent,
    FooterComponent,  
    ProductCreateComponent,
    ProductDetailComponent,  
    ProductIndexComponent, TransactionsCreateComponent, TransactionsDetailComponent, TransactionsEditComponent, TransactionsDeleteComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TextareaAutosizeModule
  ],
  providers: [
     AuthService,
     TransactionsService,
     ProductsService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }


