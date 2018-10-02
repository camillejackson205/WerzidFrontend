import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-create',
  templateUrl: './transactions-create.component.html',
  styleUrls: ['./transactions-create.component.css']
})
export class TransactionsCreateComponent implements OnInit {

  transactionForm: FormGroup;

  constructor(private _transactionsService: TransactionsService,
    private _form: FormBuilder,
    private _router: Router) { 
  }
  
  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.transactionForm = this._form.group({
      ProductID: new FormControl,
      ProductQuantity: new FormControl,
    });
  }

  onSubmit(){
    this._transactionsService.createTransaction(this.transactionForm.value).subscribe(data =>{
      this._router.navigate(['/transactions']);
    })
  }
}
