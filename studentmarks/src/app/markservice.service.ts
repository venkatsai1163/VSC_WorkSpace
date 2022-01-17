import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarkserviceService {

  constructor(private http:HttpClient) { }

  private url:string="http://localhost:8080/studentsMarks";

  getStudentsMarkData():Observable<any>{
    return this.http.get(this.url);
  }

  createStudentMarkData(req:any):Observable<any>{
    return this.http.post(this.url,req);
  }

  updateStudentMarkData(req:any):Observable<any>{
    return this.http.put(this.url,req);
  }

  deleteStudentMarkDataById(id:any):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }

  getStudentMarkDataById(id:any):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }
}
