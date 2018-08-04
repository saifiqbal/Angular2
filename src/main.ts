import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(success=>console.log("App Module Started"))
.catch(error=>console.log(error));
console.log("test");
console.log("saifiqbal");
console.log("Ang-2245");
console.log("Ang-22456");
