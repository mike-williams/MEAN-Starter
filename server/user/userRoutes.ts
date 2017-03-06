import { Router, Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export class UserRouter {

  router: Router;
  testData: [];

  constructor() {
    this.router = Router();
    this.testData = [{"email":"mike.williams@atos.net"}, {"email":"email@test.com"}];
    this.init();
  }

  public getAll = (req, res) => {
    logger.debug("getAll users");
    res.send(this.testData);
  }

  public add = (req, res) => {
    logger.debug("addUser");

    //logger.debug('post data = ' + JSON.stringify(req.body));
    this.testData.push(req.body);

    res.setHeader('Expires', '-1');
    res.json(req.body);
  }

  init() {
    this.router.get('/users', this.getAll);
    this.router.post('/user', this.add);
  }
}

const userRoutes = new UserRouter();
userRoutes.init();

module.exports = userRoutes;
