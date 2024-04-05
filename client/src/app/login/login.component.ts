import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  template: `
  <!-- Your app template here -->
  <app-toast></app-toast>
`
})
export class LoginComponent {

  credentials: any = { username: '', password: '' };

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {


  }

  async login(): Promise<void> {
    this.accountService.login(this.credentials)
  }

  logout(): void {
    this.accountService.logout();
  }

}
