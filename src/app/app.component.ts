import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./accounts.service";
//comment 1 : AccountsService is an instance Service that it's app , itself service and we use that for array
// of  accounts details so call AccountsService inside providers to otherwise
// app.component is first level that we call AccountsService so it should be in providers
// and for other instance of AccountsService we don't need to call that inside providers
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  constructor(private accountsService: AccountsService) {
  }

  accounts: { name: string, status: string }[] = [];

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
