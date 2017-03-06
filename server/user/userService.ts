import { User } from './User';

export class UserService {
  private testData: User [];

  constructor() {
    this.testData = [{"email":"mike.williams@atos.net"}, {"email":"email@test.com"}];
  }

  getUsers() : User[] {
    return this.testData;
  }

  addUser(user: User) : User {
    this.testData.push(user);
    return user;
  }
}
