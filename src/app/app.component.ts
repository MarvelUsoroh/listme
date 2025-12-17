import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { AgmCoreModule } from 'ng-agm-core-lib';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey,
    }),
  ],
  exports: [AgmCoreModule],
})
export class MapModule {}