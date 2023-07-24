import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() showPopup: boolean = false;
  @Output() closePopup = new EventEmitter<void>();

  onClosePopup() {
    this.closePopup.emit();
  }
}
