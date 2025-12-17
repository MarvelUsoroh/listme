import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { Observable, from } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Identity {
  private firebaseConfig = environment.firebaseConfig;
  private app: any;
  private loggedInUser: any = null;

  constructor() {
    this.app = initializeApp(this.firebaseConfig);
  }

  test() {
    console.log('Identity service is working!');
  }

  // wraps Firebase sign in inside an Observable so the pages can subscribe and react to it
  login(
    email: string,
    password: string,
  ): Observable<{ success: boolean; message: string; user?: any }> {
    return new Observable((observer) => {
      const auth = getAuth(this.app);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          this.loggedInUser = userCredential.user;
          observer.next({
            success: true,
            message: 'Login successful',
            user: this.loggedInUser,
          });
          observer.complete();
        })
        .catch((error) => {
          observer.next({ success: false, message: error.message });
          observer.complete();
        });
    });
  }

  // same pattern for creating accounts so UI logic stays nice and tidy
  register(email: string, password: string): Observable<{success: boolean, message: string, user?: any}> {
    return new Observable(observer => {
      const auth = getAuth(this.app);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          this.loggedInUser = userCredential.user;
          observer.next({ success: true, message: 'Registration successful', user: userCredential.user });
          observer.complete();
        })
        .catch((error) => {
          observer.next({ success: false, message: error.message });
          observer.complete();
        });
    });
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  logout(): void {
    this.loggedInUser = null;
  }

}
