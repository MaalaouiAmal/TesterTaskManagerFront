import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false 
  email : any;
  password: any;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("login button clicked") ;
    console.log("this is the password", this.password);
    console.log("this is the email", this.email);
  }

}
