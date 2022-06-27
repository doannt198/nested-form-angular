import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const urlApi="https://tano-api.herokuapp.com"
const hhqapi="https://hhq.somee.com"
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getListProduct():Observable<any>{
    return this.http.get<any>(`${urlApi}/products`)
  }
  addProduct(data:string):Observable<any>{
    return this.http.post<any>(`${urlApi}/products/add`,data )
  }
  deleteProduct(id:number):Observable<any>{
    return this.http.delete<any>(`${urlApi}/products/delete/${id}`)
  }
  getDetail(id:number):Observable<any>{
    return this.http.get<any>(`${urlApi}/products/${id}`)
  }
  editProduct(data:any):Observable<any>{
    return this.http.post<any>(`${urlApi}/products/edit`,data)
  }

  getListSlide(queryParams: any):Observable<any> {
    return this.http.get<any>(`${hhqapi}/api/Slide?`+ queryParams)
  }
}
