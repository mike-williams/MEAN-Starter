import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from './userService';
import { logger } from '../utils/logger';

export class UserRouter {
  router: Router;
  service : UserService;

  constructor(private userService : UserService) {
    this.router = Router();
    this.init();
  }

  public getAll = (req, res) => {
    logger.debug("getAll users");

    let users = this.userService.getUsers();
    res.send(users);
  }

  public add = (req, res) => {
    logger.debug("addUser");

    //logger.debug('post data = ' + JSON.stringify(req.body));
    let result = this.userService.addUser(req.body);

    res.setHeader('Expires', '-1');
    res.json(result);
  }

  init() {
    this.router.get('/users', this.getAll);
    this.router.post('/user', this.add);
  }
}

const userRoutes = new UserRouter(new UserService());
userRoutes.init();

module.exports = userRoutes;
