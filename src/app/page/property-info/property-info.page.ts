import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonLabel, IonItemDivider, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { Property } from '../../models/property.model';
import { PropertyService } from '../../services/property';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.page.html',
  styleUrls: ['./property-info.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, CommonModule, FormsModule, IonLabel, IonItemDivider, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle]
})
export class PropertyInfoPage implements OnInit {
  propertyId: string | null = null;
  property: Property | null = null;
  allProperties: Property[] = [];

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private router: Router
  ) { }

  viewPropertyInfo(id: string) {
    // this helper lets us push deeper into detail view when the user taps a related card
    this.router.navigate(['/property-info', id]);
  }

  ngOnInit() {
    // pulls the id from the route and renders the matching property from the service
    this.propertyId = this.route.snapshot.paramMap.get('id');

    this.propertyService.getProperties().subscribe(
      (data) => {
        this.allProperties = data;
        if (this.propertyId) {
          this.property = this.allProperties.find(prop => prop.id === this.propertyId) || null;
        }
      }
    );
  }

}
