import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './design.component.html',
  host: {
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class DesignComponent {
  isMobileMenuVisible = signal<boolean>(false);

  showMobileMenu() {
    this.toggleMobileMenu();

    if (this.isMobileMenuVisible()) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#mobile-menu') && !target.closest('#hamburger')) {
      this.hideMobileMenu();
    }
  }

  private hideMobileMenu() {
    this.isMobileMenuVisible.set(false);
  }

  private toggleMobileMenu() {
    this.isMobileMenuVisible.update(state => !state);
  }
}
