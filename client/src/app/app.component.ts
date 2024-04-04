import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , CommonModule , MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent implements OnInit{
  title : string = 'client';
  users : any;

  constructor(private http : HttpClient) {}
  ngOnInit(): void {
    
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
}
