import { Component } from '@angular/core';
import { User } from './user';
import { UserDataService} from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDataService]
})
export class AppComponent {

  newUser: User = new User();

  constructor(private userDataService : UserDataService) {

  }

  removeUser(user) {
    //return this.userDataService.deleteUserById(user.id);
  }

  get users() {
    return this.userDataService.getAllUsers();
  }

}
