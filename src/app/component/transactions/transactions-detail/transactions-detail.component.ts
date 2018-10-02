import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../../../models/Transactions';
import { TransactionsService } from '../../../services/transactions.service';

@Component({
  selector: 'app-transactions-detail',
  templateUrl: './transactions-detail.component.html',
  styleUrls: ['./transactions-detail.component.css']
})
export class TransactionsDetailComponent implements OnInit {

  transaction: Transaction;
  constructor(private _activatedRoute: ActivatedRoute, private transactionService: TransactionsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this.transactionService.getTransaction(routeData.get('id')).subscribe((singleTransaction: Transaction) => {
        this.transaction = singleTransaction;
      });
    });
  }

}
