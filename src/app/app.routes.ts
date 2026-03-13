import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './components/home/home';
import { Courses } from './components/courses/courses';
import { Databindings } from './components/databindings/databindings';
import { Contactus } from './pages/contactus/contactus';

export const routes: Routes = [

  // Default → go to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Main pages
  { path: 'home', component: Home },
  { path: 'about', component: About },

  // TEMP pages (point to Home for now)
  { path: 'courses', component: Courses },
  { path: 'user-exams', component: Home },
  { path: 'videos', component: Home },
  { path: 'contact-us', component: Contactus },
  { path: 'databindings', component: Databindings },
  

  // FUTURE (commented, ready for later)
  /*
  { path: 'admin/question/list', component: QuestionsListComponent },
  { path: 'admin/question/create', component: CreateQuestionChoiceComponent },
  */

  // Catch-all route (invalid URL → home)
  { path: '**', component: Home },
];