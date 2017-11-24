import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ImageService {

  constructor(public httpService: Http) { }
  postImageUrl='http://localhost:2000/api/image'
  getImageUrl='http://localhost:2000/api/image';
  postImage(Data):Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.postImageUrl, Data, options).map(
      data => data.json());
  }
  getMovies(): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.getImageUrl,options).map(
      (res: Response) => res.json());
  }
}
