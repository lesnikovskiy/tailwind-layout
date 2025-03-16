import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
})
export class AppComponent {
  isMobileMenuVisible = signal<boolean>(false);

  showMobileMenu() {
    this.isMobileMenuVisible.update(state => !state);
  }
}
