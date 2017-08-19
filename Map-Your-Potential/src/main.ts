//put bootstrap logic in this file


import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

//thplatformBrowserDynamic function will return an instance of a platform object
//and we call bootstrapModule, and it expects a root module
platformBrowserDynamic().bootstrapModule(AppModule);
