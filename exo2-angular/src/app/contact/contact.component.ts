import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { FormDataService } from '../gestion/form-data.service';
import {NgIf} from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isEmailHidden = false;

  constructor(private fb: FormBuilder, private router: Router, private formDataService: FormDataService) {
    this.contactForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      commentaire: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

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
    console.log('onSubmit() appelée');

    if (this.contactForm.valid) {
      console.log('Formulaire valide, données soumises :', this.contactForm.value);
      this.formDataService.saveData(this.contactForm.value); // Sauvegarde les données
      console.log('Données envoyées au service');
      alert('Le formulaire est valide');
      this.router.navigate(['/gestion']); // Utilisation de Router pour éviter le rechargement
    } else {
      console.log('Formulaire invalide');
      alert('Veuillez remplir correctement le formulaire.');
    }
  }






}
