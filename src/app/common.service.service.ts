import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(public http:HttpClient) {

  }
  getList()
  {
    return this.http.get(`https://localhost:7165/api/Brand`);
  }
  getlistdata(controller:string) {
    debugger
    return this.http.get(`https://localhost:7165/${controller}`);
  }
  getById(id:any,controller:string) {
    debugger
    return this.http.get(`https://localhost:7165/${controller}/${id}`);
  }
  InsertData(data:any,controller:string) {
    debugger
    return this.http.post(`https://localhost:7165/${controller}`,data);
  }
  Delete(id:any,controller:string)
  {
    return this.http.delete(`https://localhost:7165/${controller}/${id}`)
  }
}
