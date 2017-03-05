import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserDataService {

  private dataUpdatedSource = new Subject<string>();
  dataUpdatedAnnouncer$ = this.dataUpdatedSource.asObservable();

  constructor(private http: Http) { }

  addUser(user: User): Observable<User> {

    console.log('addUser');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('/api/user', user , options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  refresh() {
    console.log('refreshing');
    this.dataUpdatedSource.next('updated');
  }

  getUsers(): Observable<User[]> {
    return this.http.get('/api/users')
    .map(this.extractData)
    .catch(this.handleError);

  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
