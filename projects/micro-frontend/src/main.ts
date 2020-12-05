import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MFModule } from './app/app.module';
import { environment } from './environments/environment';

try{
  if (environment.production) {
    enableProdMode();
  }
} catch(e){}

platformBrowserDynamic().bootstrapModule(MFModule)
  .catch(err => console.error(err));
