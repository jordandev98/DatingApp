import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../components/primary-button/primary-button.component';
import { OutlineButtonComponent } from '../components/outline-button/outline-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PrimaryButtonComponent , OutlineButtonComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
