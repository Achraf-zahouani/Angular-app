import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const bootstrapApp = async () => {
  try {
    await platformBrowserDynamic().bootstrapModule(AppModule, {
      ngZoneEventCoalescing: true,
    });
    console.log('Application bootstrapped successfully!');
  } catch (error) {
    console.error('Error during application bootstrap:', error);
  }
};

bootstrapApp();