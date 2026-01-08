import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Project, ProjectsService} from '../../service/projects';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {ProjectCard} from '../../components/project-card/project-card';
import {BreakpointObserver, Breakpoints, LayoutModule} from '@angular/cdk/layout';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NgForOf,
    NgIf,
    ProjectCard,
    LayoutModule
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit{
  /*title: string = "HomePage";*/
  projects: Project[] = [];

  recentProjects: Project[] = [];

  isMobile= false;


  constructor(private projectService: ProjectsService, private responsive: BreakpointObserver) {}

  ngOnInit() {

    this.projectService.getProjects().subscribe(data => {
      this.projects = data;

      if (this.projects && this.projects.length > 0) {
        this.recentProjects = this.projects.slice(-2);
      }
    });
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
