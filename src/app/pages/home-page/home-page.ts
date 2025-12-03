import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Project, ProjectsService} from '../../service/projects';
import {NgForOf, NgIf} from '@angular/common';
import {ProjectCard} from '../../components/project-card/project-card';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgForOf,
    NgIf,
    ProjectCard
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit{
  /*title: string = "HomePage";*/
  projects: Project[] = [];

  recentProjects: Project[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {

    this.projectService.getProjects().subscribe(data => {
      this.projects = data;

      if (this.projects && this.projects.length > 0) {
        this.recentProjects = this.projects.slice(-2);
      }
    });
  }
}
