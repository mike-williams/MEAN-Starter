import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UserDataService} from '../user-data.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  errorMessage: string;
  model = new User();

  constructor(private userDataService : UserDataService) { }

  onSubmit() {
    this.userDataService.addUser(this.model)
    .subscribe(
      success => this.userDataService.refresh(),
      error => this.errorMessage = <any> error)
    }

    newUser() {
      this.model = new User();
    }
  }
