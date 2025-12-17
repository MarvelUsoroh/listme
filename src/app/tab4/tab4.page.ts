import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { MapModule } from 'src/app/app.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    MapModule,
  ],
})
export class Tab4Page implements OnInit {
  lat: number = 37.7749; // Default latitude (San Francisco)
  lng: number = -122.4194; // Default longitude (San Francisco)
  zoom: number = 12; // Default zoom level
  constructor() {}

  ngOnInit() {}
}
