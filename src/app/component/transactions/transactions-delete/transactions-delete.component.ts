import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../../../services/transactions.service';
import { Router } from '@angular/router';
import { Transaction } from '../../../models/Transactions';

@Component({
  selector: 'app-transactions-delete',
  templateUrl: './transactions-delete.component.html',
  styleUrls: ['./transactions-delete.component.css']
})
export class TransactionsDeleteComponent implements OnInit {
  

  transaction: Transaction;
  constructor(private _transactionService: TransactionsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._transactionService.getTransaction(p.get('id')).subscribe((singleTransaction: Transaction) =>{
        this.transaction = singleTransaction;
      });
    });
   }

  ngOnInit() {
  }

  onDelete(){
    this._transactionService.deleteTransaction(this.transaction.TransactionID).subscribe(() => {
      this._router.navigate(['./transactions']);
    });
  }

}
