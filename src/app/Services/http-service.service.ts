import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getProducts() : Observable<any>
  {
    return this.http.get('http://localhost:8080/api/products');
  }

  getByProductId(id:number)
  {
    return this.http.get('http://localhost:8080/api/products/'+id);
  }
}
