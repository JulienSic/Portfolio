import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule, LayoutModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isMenuOpen = false;
  isMobile= false;

  constructor(private router: Router, private responsive: BreakpointObserver) {

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overscrollBehavior = 'auto';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
  }

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
    ])
    .subscribe(result => {
      this.isMobile = false;

      if (result.matches) {
        this.isMobile = true;
      }
    });
  }
}
