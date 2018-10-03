import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions.service';
import { Transaction } from '../../../models/transactions';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-transactions-index',
  templateUrl: './transactions-index.component.html',
  styleUrls: ['./transactions-index.component.css']
})
export class TransactionsIndexComponent implements OnInit {

  constructor(private transactionService: TransactionsService) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe((transactions: Transaction[]) =>{
      this.dataSource = new MatTableDataSource<Transaction>(transactions);
    });
  }
columnNames = ['ProductID', 'Quantity', 'TotalPrice', 'Date', 'Purchased'];
dataSource: MatTableDataSource<Transaction>
}
