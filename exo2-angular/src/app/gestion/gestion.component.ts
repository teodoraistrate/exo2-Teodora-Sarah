/*
import {Component, OnInit} from '@angular/core';
import {ContactService} from "../contact/contact.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent implements OnInit {
  contactData: any;

  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
    console.log(this.contactService.getContactData());
    this.contactData = this.contactService.getContactData();
  }
}*/
/*
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
})
export class GestionComponent implements OnInit {
  contactData: any;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactData = this.contactService.getContactData();
    console.log('Données récupérées dans GestionComponent:', this.contactData);
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact/contact.service';
import { FormDataService } from './form-data.service';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css'],
})
export class GestionComponent implements OnInit {
  contactData: any;

  constructor(private contactService: ContactService, private formDataService: FormDataService) {}

  /*ngOnInit(): void {
    this.contactData = this.formDataService.getData();
    console.log(this.contactData)
    // S'abonner à lastContact$ pour recevoir les mises à jour
    this.contactService.lastContact$.subscribe((data) => {
      console.log('Données réactives récupérées:', data);
      this.contactData = data;
    });
  }*/
  ngOnInit(): void {
    console.log('ngOnInit() de GestionComponent appelée');
    this.contactData = this.formDataService.getData(); // Récupère les données depuis localStorage
    console.log('Données récupérées dans GestionComponent :', this.contactData);
  }



}
