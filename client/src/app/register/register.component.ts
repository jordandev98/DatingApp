import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterDto } from '../_models/registerDto';
import { AccountService } from '../_services/account.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  registerDto : RegisterDto = {username : null , password : null}; 
  users : any;

  constructor (private accountService : AccountService , private http : HttpClient) {
    
  }
  ngOnInit(): void {
    
    this.fetchAllUsers();
    
  }

  fetchAllUsers() {
    this.http.get("https://localhost:5001/api/users").subscribe({
        next : (res) => {
          this.users = res;
        },
        error : (error) => {
         console.error(error) 
        },
        complete : () => {
          console.log(this.users)
        }
      });
  }

  register() {
    this.accountService.register(this.registerDto);
  }

}
