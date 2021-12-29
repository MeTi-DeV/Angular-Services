// @ts-ignore
import {Component} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //component 1  : here is an other instance AccountsService that should be removed to app works
  // correctly and see new changes
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
  }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
  }
}
