import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductApiService } from '../../services/product-api.service';
import { CommonModule } from '@angular/common';
import { DynamicProductComponent } from '../dynamic-product/dynamic-product.component';

type Schemas = {
  title: string
  price: number
  description: string
  categoryId: number
  images: string
}

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductCardComponent,],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  Schemas!: Schemas[]
  constructor(
    private httpClient: HttpClient) { }
  ngOnInit(): void {

    this.httpClient.get<Schemas[]>(`https://api.escuelajs.co/api/v1/products`).
      subscribe({
        next: (data) => { 
          this.Schemas = data; 
          console.log(this.Schemas);
        }
      });

  }

}

