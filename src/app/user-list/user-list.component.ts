import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserDataService} from '../user-data.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserDataService]
})
export class UserListComponent implements OnInit {

  users: User[];
  errorMessage: string;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userDataService.getUsers().subscribe(
      users => this.users = users,
      error => this.errorMessage = <any>error);
  }

}
