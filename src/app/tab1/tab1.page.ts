import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { Property } from '../models/property.model';
import { PropertyService } from '../services/property';
import { Router } from '@angular/router';
import { Identity } from '../services/identity';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle
  ],
})
export class Tab1Page implements OnInit {
  properties: Property[] = [];

  constructor(
    private propertyService: PropertyService, 
    private router: Router,
    private identity: Identity) {}

  viewPropertyInfo(id: string) {
    this.router.navigate(['/property-info', id]);
  }

  ngOnInit() {
    this.propertyService.getProperties().subscribe(
      (data) => this.properties = data
    );
  }
}