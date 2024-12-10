/*import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HeaderComponent, FooterComponent) // Import standalone components
  ]
}).catch(err => console.error(err));

