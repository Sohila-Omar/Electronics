import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  constructor(private productService: ProductApiService){}
addproduct(formRef:any){

  // this.productService.addproduct(formRef.value).subscribe({
  //   next: (data) => {console.log(data)},
  //   error: (error) => {console.error(error)},
  //   complete: () => {console.log('Post request completed')},
  // })
}
}
