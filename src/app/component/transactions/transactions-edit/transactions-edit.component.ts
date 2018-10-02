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

  createForm() {
    this.editTransactionForm = this._form.group({
      ProductQuantity: new FormControl(this.transaction.ProductQuantity),
    });
  }

  onSubmit() {
    this._transactionService.updateTransaction(this.editTransactionForm.value).subscribe(d => {
      this._router.navigate(['/transactions']);
    });
  }

}
