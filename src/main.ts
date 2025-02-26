import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
  ],
} ).catch((err) => console.error(err));
