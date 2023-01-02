import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  lstorage:any;
  constructor(public fb: FormBuilder, public router: Router) {
    this.loginForm = fb.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
    this.lstorage = JSON.parse(localStorage.getItem('register')!);
   }

  ngOnInit(): void {
  }

  login(data:any){
    for(let i of this.lstorage){
      if((i.email == data.username || i.fullName == data.username) && i.password == data.password){
      this.router.navigate(['/home'])
      return;}
    }
    alert('invalid username or password')
  }
}
