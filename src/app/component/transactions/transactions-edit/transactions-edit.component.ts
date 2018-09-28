import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../../models/Transactions';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TransactionsService } from '../../../services/transactions.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-transactions-edit',
  templateUrl: './transactions-edit.component.html',
  styleUrls: ['./transactions-edit.component.css']
})
export class TransactionsEditComponent implements OnInit {

  transaction: Transaction;

  editTransactionForm: FormGroup;

  constructor(private _form: FormBuilder,
  private _transactionService: TransactionsService,
private _ar: ActivatedRoute,
private _router: Router) {
  
  this._ar.paramMap.subscribe(p => {
    this._transactionService.getTransaction(p.get('id')).subscribe((singleTransaction: Transaction) => {
      this.transaction = singleTransaction;
      this.createForm();
    });
  });
 }

  ngOnInit() {
  }

  createForm(){
    this.editTransactionForm = this._form.group({
      Quantity: new FormControl(this.transaction.Quantity)
    });
  }

  onSubmit(form) {
    const updateTransaction: Transaction = {
      TransactionID: form.value.TransactionID,
      OwnerID: form.value.OwnerID,
      Quantity: form.value.Quantity,
      ProductID: form.value.ProductID,
      TotalPrice: form.value.TotalPrice,
      Date: form.value.Date,
      Purchased: form.value.Purchased
    };
    this._transactionService.updateTransaction(updateTransaction).subscribe(d => {
      this._router.navigate(['/transactions']);
    });
  }

}
