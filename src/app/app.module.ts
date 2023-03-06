import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';import { AnimalFormComponent } from './components/animals/animal-form/animal-form.component';
import { AnimalListComponent } from './components/animals/animal-list/animal-list.component';
import { AnimalListItemComponent } from './components/animals/animal-list-item/animal-list-item.component';
import { AnimalSwitchComponent } from './components/animals/animal-switch/animal-switch.component';
import { AnimalsPageComponent } from './pages/animals-page/animals-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    AnimalListComponent,
    AnimalListItemComponent,
    AnimalSwitchComponent,
    AnimalsPageComponent,
    MoviesPageComponent,
    MainNavComponent,
    HomePageComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
