import { Router, Request, Response, NextFunction } from 'express';

export class UserRouter {

  router: Router;
  testData: {};

  constructor() {
    this.router = Router();
    this.testData = [{"email":"mike.williams@atos.net"}, {"email":"email@test.com"}];
    this.init();
  }

  public getAll = (req, res) => {
    res.send(this.testData);
  }

  init() {
    this.router.get('/users', this.getAll);
  }
}

const userRoutes = new UserRouter();
userRoutes.init();

module.exports = userRoutes;
