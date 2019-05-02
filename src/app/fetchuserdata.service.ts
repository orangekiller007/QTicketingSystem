import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class FetchuserdataService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('http://localhost:3000/home').map((res)=>{console.log(res);return res;})
  }
}
