import { Routes } from '@angular/router';
import { HomePage} from './pages/home-page/home-page';
import {ProjectPage} from './pages/projects/project-page/project-page';
import {ProjectDetail} from './pages/projects/project-detail/project-detail';
import {Skills} from './pages/skills/skills';

export const routes: Routes = [
  { path: 'project', component: ProjectPage },
  { path: 'project/:id', component: ProjectDetail },
  { path: 'home', component: HomePage },
  { path: 'skills', component: Skills },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', },

];
