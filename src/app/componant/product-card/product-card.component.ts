import { Component, input, Input } from '@angular/core';
import { ProductApiService } from '../../services/product-api.service';
import { SchemasModule } from '../../module/schemas/schemas.module';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() dynamicProduct!: SchemasModule;
constructor(private productService:ProductApiService){}
}
