import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginOpj:Login;
  constructor(private httpClient: HttpClient , private router: Router) {
    this.loginOpj = new Login();
  }



onLogin(){
  debugger;
this.httpClient.post(`https://api.escuelajs.co/api/v1/users/login`, this.loginOpj).subscribe((res:any)=>{
  if(res.result){
    alert(" login Success")
    this.router.navigateByUrl('/dashboard')
  }else{
    alert(res.message)
  }
})
}
}



export class Login{
  EmailId: string;
  Password: string;

  constructor() {
    this.EmailId = '';
    this.Password = '';
  }

  
}
