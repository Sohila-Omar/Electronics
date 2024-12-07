import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemasModule } from '../module/schemas/schemas.module';
import { ProductCardComponent } from '../componant/product-card/product-card.component';
@Injectable({
  providedIn: 'root'
})

export class ProductApiService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts(): Observable<SchemasModule>{
    return this.httpClient.get<SchemasModule>(`https://api.escuelajs.co/api/v1/products`);
  }


}
