import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';
import { getFirestore, collection, getDocs, Firestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private db: Firestore;

  constructor() {  
    const app = initializeApp(environment.firebaseConfig);
    this.db = getFirestore(app);
  }

  getProperties(): Observable<Property[]> {
    return new Observable((observer) => {
      const propertiesCollection = collection(this.db, 'properties');
      getDocs(propertiesCollection).then((snapshot) => {
        const properties: Property[] = snapshot.docs.map(doc => {
          const data = doc.data() as any;
          return { id: doc.id, ...data } as Property;
        });
        observer.next(properties);
        observer.complete();
      }).catch((error) => {
        observer.error(error);
      });
    });
  } 

}