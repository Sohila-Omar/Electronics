import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  searchEmployeeByName($event:Event){
    const input =$event.target as HTMLInputElement;
    
    console.log(input.value);
    
  }
}