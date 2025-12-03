import {Component, Input , OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Project} from '../../service/projects';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard implements OnInit {
  @Input() project!: Project;

  ngOnInit() {
    if (!this.project) {
      console.error('No project data');
    }
  }
}
