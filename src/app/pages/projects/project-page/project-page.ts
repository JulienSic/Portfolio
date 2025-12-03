import {Component, OnInit} from '@angular/core';
import {Project, ProjectsService} from '../../../service/projects';
import {ProjectCard} from '../../../components/project-card/project-card';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-project-page',
  imports: [ProjectCard, CommonModule],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage implements OnInit{
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {

    this.projectService.getProjects().subscribe(data => this.projects = data);
  }
}
