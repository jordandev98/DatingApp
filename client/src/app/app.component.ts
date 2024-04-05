import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, MatListModule, NavbarComponent, FormsModule, HomeComponent],
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  title: string = 'client';


  constructor(private accountService: AccountService) { }
  ngOnInit(): void {


    this.setCurrentUser();
  }




  setCurrentUser() {
    const userString = localStorage.getItem("user")
    if (!userString) {
      return;
    }

    const user: User = JSON.parse(userString)!;
    this.accountService.setCurrentUser(user);
  }

}
