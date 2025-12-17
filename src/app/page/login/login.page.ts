import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Identity } from 'src/app/services/identity';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class LoginPage implements OnInit {
  constructor(
    private identity: Identity,
    private router: Router,
  ) {}
  error: string = '';

  ngOnInit() {}

  login(email: string, pass: string) {
    // calls the service then either pushes to tabs or shows the error text
    this.identity.login(email, pass).subscribe((response) => {
      if (response.success) {
        this.error = '';
        this.router.navigate(['/tabs']);
      } else {
        this.error = response.message;
      }
    });
  }
}
