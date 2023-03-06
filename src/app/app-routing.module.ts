import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'animals', component: AnimalsPageComponent },
  { path: 'movies', component: MoviesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
