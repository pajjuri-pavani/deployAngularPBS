import { Component, OnInit } from '@angular/core';
import { PassbookService, Transactions } from '../passbook.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-passbook',
  templateUrl: './update-passbook.component.html',
  styleUrls: ['./update-passbook.component.css']
})
export class UpdatePassbookComponent implements OnInit {
  transactions: Transactions[];
  account: Account;
  transac: any;
  accountId: string;
  message: string
  result: string;
  constructor(private service: PassbookService, private router: Router) { }

  ngOnInit(): void {
  }
  update() {
    
        this.service.updatePassbook(this.accountId).subscribe((data) => {
          this.transac = data;
          this.transactions = this.transac;
          console.log('transactions', this.transactions);
          if (this.transac == 0) {
            alert("No transactions Present!!");
          }
          else {
            this.router.navigate(['/response'], { queryParams: { accountId: this.accountId, transactions: JSON.stringify(this.transactions) } });
          }
        });
  }}
     