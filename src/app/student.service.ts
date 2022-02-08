import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }

  showTodayDate(name:String,email:string,message:string) {
    console.log(name +":"+email+":"+message);
    let ndate = new Date();
    return ndate;
 }

 getServiceResponse(userName:string):Observable<any>{

  var docUrl = this.baseURL+"export-employees";
  var helloUrl = this.baseURL+"getDoc";
  console.log(helloUrl + "  Service URL ");
  //return this.http.get(url);
  return this.http.get(docUrl);

 }
// Promise example 

}
