import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getListProduct():Observable<any>{
    return this.http.get<any>('https://tano-api.herokuapp.com/products')
  }
  addProduct(data:string):Observable<any>{
    return this.http.post<any>('https://tano-api.herokuapp.com/products/add',data )
  }
  deleteProduct(id:number):Observable<any>{
    return this.http.delete<any>(`https://tano-api.herokuapp.com/products/delete/${id}`)
  }
  getDetail(id:number):Observable<any>{
    return this.http.get<any>(` https://tano-api.herokuapp.com/products/${id}`)
  }
  editProduct(data:any):Observable<any>{
    return this.http.post<any>('https://tano-api.herokuapp.com/products/edit',data)
  }
}
