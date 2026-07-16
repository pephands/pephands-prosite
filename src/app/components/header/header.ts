import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MaterialModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private timeoutIds: Map<MatMenuTrigger, any> = new Map();
  isMobileMenuOpen = false;

  openMenu(trigger: MatMenuTrigger) {
    if (this.timeoutIds.has(trigger)) {
      clearTimeout(this.timeoutIds.get(trigger));
      this.timeoutIds.delete(trigger);
    }
    if (!trigger.menuOpen) {
      trigger.openMenu();
    }
  }

  closeMenu(trigger: MatMenuTrigger) {
    const timeout = setTimeout(() => {
      trigger.closeMenu();
    }, 150); // Small delay allows mouse to move into the dropdown
    this.timeoutIds.set(trigger, timeout);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
