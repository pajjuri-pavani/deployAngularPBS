import { Component, OnInit } from '@angular/core';
import { PassbookService, Transactions } from '../passbook.service'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css'],
  providers: [DatePipe]
})
export class AccountSummaryComponent implements OnInit {
  transactions: Transactions[];
  transac: any;
  accountId: string;
  StartDate: Date;
  EndDate: Date;
  message: string;
  result: string;
  myDate = new Date();
  date:any;
  isValidDate: boolean;

  constructor(private service: PassbookService, private router: Router, private datePipe: DatePipe) {
    this.date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }
                                                                                                                    

  ngOnInit(): void {
  }


  summary() {
    
      
        if (this.result == "true") {
          this.service.accountSummary( this.accountId, this.StartDate, this.EndDate).subscribe((data) => {
            this.transac = data;
            this.transactions = this.transac;
            if (this.transac == 0) {
              alert("No Transactions Present!!");
            }  
            else {
              this.router.navigate(['/response'], { queryParams: { accountId: this.accountId, transactions: JSON.stringify(this.transactions), } });
            }
          });

        }
        else {
          alert("No AccountId Present!!");
        }
      };

}


  
 
  
