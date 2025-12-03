import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface Project {
  id: number;
  title: string;
  timeline: string;
  description: string;
  descDetail: string;
  thumbnail: string;
  image1: string;
  image2: string;
  tags: string[];
  link: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projectsUrl = 'assets/data/projects.json';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectsUrl);
  }

  getProject(id: number): Observable<Project | undefined>{
    return this.getProjects().pipe(map(projects => projects.find(p => p.id === id)));
  }
}
