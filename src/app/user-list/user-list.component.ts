import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user';
import { UserDataService} from '../user-data.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
  errorMessage: string;

  // subscription for userservice data update
  subscription: Subscription;

  constructor(private userDataService: UserDataService) {
    this.subscription = this.userDataService.dataUpdatedAnnouncer$.subscribe(
      message => {
        console.log('User list update notification received');
        this.getUsers();
      }
    );
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userDataService.getUsers().subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

}
