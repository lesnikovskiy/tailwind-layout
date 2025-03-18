import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DesignComponent } from './app/design/design.component';

bootstrapApplication(DesignComponent, appConfig)
  .catch((err) => console.error(err));
