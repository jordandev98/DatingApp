import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-outline-button',
  standalone: true,
  imports: [],
  templateUrl: './outline-button.component.html',
})
export class OutlineButtonComponent {
  @Input() label: string = "Click";
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }

}