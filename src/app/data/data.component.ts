import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  isImage1PopupVisible: boolean = false;

  showImage1Popup() {
    this.isImage1PopupVisible = true;
  }

  closeImage1Popup() {
    this.isImage1PopupVisible = false;
  }
}
