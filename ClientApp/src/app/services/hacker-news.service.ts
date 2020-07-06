import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IStory } from '../models/IStory';




@Injectable({
  providedIn: 'root'
})


export class HackerNewsService {
  baseUrl = environment.apiUrl;
  baseHackerUrl = this.baseUrl + 'hackernews';
  // private headers: HttpHeaders;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json; charset=utf-8'
  //   })
  // };
  newStories$: IStory[];



  constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }


  // https://app.pluralsight.com/guides/sending-request-processing-mapped-response-retrieve-data
  getNewStories(): Observable<IStory[]> {
      return this.http
      .get(this.baseHackerUrl)// , {headers: this.headers}) // TODO: no searchTerm so update controller signature
          .pipe(
              map((data: IStory[]) => {
                console.log(data);
                  return data;
              }),
              catchError(this.handleError)
          );
  }

  getStories(searchTerm: string): Observable<IStory[]>  {
    return this.http
      .get<IStory[]>(
        `${this.baseHackerUrl}?searchTerm=${searchTerm}`
      );
  }

  private handleError(error: HttpErrorResponse) {
      console.error('Server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
      }
      return Observable.throw(error || 'Server error');
  }
}
