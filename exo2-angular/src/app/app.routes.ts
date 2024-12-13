import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { GestionComponent } from './gestion/gestion.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'gestion', component: GestionComponent }
    ]),
    AppComponent
  ]
})
export class AppModule { }

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }, //test
  { path: 'gestion', component: GestionComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

