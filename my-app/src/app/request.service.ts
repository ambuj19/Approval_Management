import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { request,comment } from './Model/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  headers = new HttpHeaders().set('Content-Type', 'aplication/json').set('Accect','accept/json');

  httpOption = {

    headers: this.headers

  }
   baseUrl='http://localhost:3000/request';
   commentURL='http://localhost:3000/comment'
  constructor(private http:HttpClient) { }
  private handleError(errorResponse:HttpErrorResponse)
  {
    if(errorResponse.error instanceof ErrorEvent)
    {
      console.log('Client Side Error',errorResponse.error);
    }
    else
    {
      console.log('Server Side error',errorResponse.error);
    }

    return throwError('their is error in code');
  }
  public getrequest():Observable<request[]>{
    return this.http.get<request[]>(this.baseUrl).pipe(catchError(this.handleError));
    }
    public addrequest(emp:any):Observable<request>{
      return this.http.post<request>(this.baseUrl,emp);
    }
    public deleterequest(id:number):Observable<request[]>{
      const url=`${this.baseUrl}/${id}`;
      return this.http.delete<request[]>(url).pipe(catchError(this.handleError));
    }
    public getUpdateUser(id: number): Observable<request> {

      const url = `${this.baseUrl}/${id}`;

      return this.http.get<request>(url,this.httpOption)

    }
    public updateUser(user: any): Observable<request> {
      debugger;
          const url = `${this.baseUrl}/${user.id}`;
          debugger;
          return this.http.put<request>(url,user);

        }
        public approval(id: number, changes:Partial<request>): Observable<request> {

          const url = `${this.baseUrl}/${id}`;


          return this.http.put<request>(url,changes)

        }
        public addcomment(emp:any):Observable<comment>{
         // const url = `${this.commentURL}/${emp.id}`;
          debugger;
          return this.http.post<comment>(this.commentURL,emp);
        }
}
