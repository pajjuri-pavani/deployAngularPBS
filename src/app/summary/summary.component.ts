import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {FormsModule} from '@angular/forms';
import {PassbookService} from 'F:/AngularPBS/src/app/passbook.service';
import {Router} from '@angular/router';
import { Transactions} from '../passbook.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  [x: string]: any;
  accountId:string;
  startDate:String;
  endDate:String;
  constructor(private passbookService:PassbookService,private router:Router) { }

  ngOnInit(): void {
  }
  public getAccountSummary():void
  {
    console.log(this.startDate);
    console.log(this.endDate);
    console.log(this.accountId);
    this.passbookService.accountSummary(this.accountId,this.StartDate,this.EndDate).subscribe((data) => {
								console.log(data);
								this.passService.sendTransactions();
			});
  this.router.navigate(['view']);
  }  
}
