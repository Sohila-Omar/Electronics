import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-dynamic-product',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-product.component.html',
  styleUrl: './dynamic-product.component.css'
})
export class DynamicProductComponent implements OnInit  {
constructor(private ProductApiService:ProductApiService){}
  ngOnInit(): void {
   this.ProductApiService.getAllProducts().subscribe({
     next: (data) => {console.log(data)},
     error: (error) => {console.error(error)},
     complete: () => {console.log('Get request completed')},
   })
  }
}
