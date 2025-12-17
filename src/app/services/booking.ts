import { Injectable } from '@angular/core';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private db: any;

  constructor() {
    // Initializing Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyBFhtJT1ZOe-70R-QhQn3XeWPoaVe1jvG0",
      projectId: "listme-dc189",
    };
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  async addBooking(booking: Booking): Promise<void> {
    // Logic to add booking to Firestore
    const bookingsCollection = collection(this.db, 'bookings');
    await addDoc(bookingsCollection, booking);
  }
}