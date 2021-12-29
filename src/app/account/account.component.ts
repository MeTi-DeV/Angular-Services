import {Component, Input} from '@angular/core';
import {AccountsService} from '../accounts.service';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //component 1  : here is an other instance AccountsService that should be removed to app works
  // correctly and see new changes
  providers: [LoggingService]

})
export class AccountComponent {
  constructor(private accountsService: AccountsService, private loggingService: LoggingService) {
  }

  @Input() account: { name: string, status: string };
  @Input() id: number;


  onSetTo(status: string) {
    this.accountsService.updateAccount(this.id, status);
    this.loggingService.logStatusChange(status);
  }
}
