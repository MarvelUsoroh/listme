import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/angular/standalone';
import { Identity } from 'src/app/services/identity';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonButton,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink,
  ],
})
export class RegisterPage implements OnInit {
  error: string = '';
  constructor(
    private identity: Identity,
    private router: Router
  ) {}

  ngOnInit() {}

  register(email: string, pass: string) {
    // tries to create the account then bounces back to tabs or shows message
    this.identity.register(email, pass).subscribe((response) => {
      if (response.success) {
        this.error = '';
        this.router.navigate(['/tabs']);
      } else {
        this.error = response.message;
      }
    });
  }
}
