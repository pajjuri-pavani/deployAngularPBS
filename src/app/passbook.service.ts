import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Transactions {
  transId: number;
  transType:string;
  transAmount: number;
  transDate: Date;
  transFrom: string;
  transTo: string;

  constructor(transId:number,transType:string,transAmount:number,transDate:Date,transFrom:string,transTo:string){
    this.transId=this.transId;
    this.transType=transType;
    this.transAmount=transAmount;
    this.transDate=transDate;
    this.transFrom=transFrom;
    this.transTo=transTo;
  }
}
export class Account {
    accountId:string;
    lastUpdated:Date;
    constructor(accountId:string,lastUpdated:Date) {
      this.accountId=accountId;
      this.lastUpdated=lastUpdated;
    }
  }

@Injectable({
  providedIn: 'root'
})
export class PassbookService {
  getaccountSummary(accId: number, startDate: String, endDate: String) {
    throw new Error("Method not implemented.");
  }
  getAccountSummary(accId: number, startDate: String, endDate: String) {
    throw new Error("Method not implemented.");
  }

  constructor(private httpService: HttpClient) { }
  updatePassbook(accountId:string){
    return this.httpService.get("http://localhost:6565/bank/updatePassbook/"+accountId ,{responseType: 'json'});
  }
  accountSummary(accountId:string,StartDate:Date,EndDate:Date){
    return this.httpService.get("http://localhost:6666/bank/accountSummary/"+accountId+"/"+StartDate+"/"+EndDate ,{responseType: 'json'});
  }
 
  }

