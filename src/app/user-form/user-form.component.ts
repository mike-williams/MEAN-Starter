import { Component} from '@angular/core';
import { User } from '../user';
import { UserDataService} from '../user-data.service'

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserDataService]
})
export class UserFormComponent {

  errorMessage: string;

  constructor(private userDataService : UserDataService) {

  }

  model = new User();

  onSubmit() {
    this.userDataService.addUser(this.model).subscribe(
            error => this.errorMessage = <any> error)          
  }

  newUser() {
    this.model = new User();
  }

}
