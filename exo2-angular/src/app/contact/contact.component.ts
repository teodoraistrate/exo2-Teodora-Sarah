import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  //providers: [ContactService]
})
export class ContactComponent {
  private fb: FormBuilder = new FormBuilder();
  contactForm: FormGroup = this.fb.group({
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    age: [''],
    email: ['', [Validators.required, Validators.email]],
    commentaire: ['', Validators.required]
  });
  isEmailHidden = false;
  //private contactService = new ContactService();

  constructor(private router: Router, private contactService: ContactService) {
    this.contactService = contactService;
  }

  toggleEmail() {
    this.isEmailHidden = !this.isEmailHidden;
    const emailControl = this.contactForm.get('email');
    if (this.isEmailHidden) {
      emailControl?.clearValidators();
    } else {
      emailControl?.setValidators([Validators.required, Validators.email]);
    }
    emailControl?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Le formulaire est valide');
      const formData = this.contactForm.value;
      // console.log(formData);
      // Stocke les données dans un service
      this.contactService.setContactData(formData);
      // Navigate to home page
      this.router.navigate(['/']);
    }
  }
}
