import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions.service';
import { transaction } from '../../../models/transactions';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-transactions-index',
  templateUrl: './transactions-index.component.html',
  styleUrls: ['./transactions-index.component.css']
})
export class TransactionsIndexComponent implements OnInit {

  constructor(private transactionService: TransactionsService) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe((transactions: transaction[]) =>{
      this.dataSource = new MatTableDataSource<transaction>(transactions);
    });
  }
columnNames = ['TransactionID', 'OwnerID', 'Quantity', 'ProductID', 'TotalPrice', 'Date', 'Purchased'];
dataSource: MatTableDataSource<transaction>
}
