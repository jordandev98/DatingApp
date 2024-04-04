import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatMenuModule , PrimaryButtonComponent],
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {

  showFiller: boolean = false;


  user: User | null = null;

  constructor(protected accountService: AccountService) { }

  ngOnInit(): void {

  }


  logout() {
    this.accountService.logout();
  }
}
