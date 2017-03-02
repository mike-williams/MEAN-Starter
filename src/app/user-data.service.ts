import { Injectable } from '@angular/core';
import {User} from './user';

@Injectable()
export class UserDataService {

  lastId: number = 0;

  users: User[] = [];
  constructor() { }

  addUser(user:User): UserDataService {

    if (!user.id) {
      user.id = ++this.lastId;
    }

    this.users.push(user);

    return this;
  }

  getAllUsers(): User[] {
    return this.users;
  }

}
