import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatButton} from "@angular/material/button";
import {NgClass, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MenuItems} from "../../core/menu/menu";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatButton,
    MatDrawer,
    NgClass,
    MatIcon,
    NgIf,
    MatTooltip,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  isDrawerOpen = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  protected readonly MenuItems = MenuItems;
}
