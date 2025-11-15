import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() project: any;
  @Output() close = new EventEmitter<void>();

  currentImageIndex = 0;

  closeModal() {
    this.close.emit();
  }

  prevImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.project.slideshowImages.length - 1;
    }
  }

  nextImage() {
    if (this.currentImageIndex < this.project.slideshowImages.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }
}
