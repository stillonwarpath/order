import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ElementModule } from './app/element.module';

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(ElementModule)
  .catch(err => console.error(err));