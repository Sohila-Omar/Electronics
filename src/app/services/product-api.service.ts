import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductApiService {

  constructor(private httpClient:HttpClient) { }

  // getAllProducts(): Observable<Schemas[]>{
  //   return this.httpClient.get<Schemas[]>(`https://api.escuelajs.co/api/v1/products`);
  // }


}
