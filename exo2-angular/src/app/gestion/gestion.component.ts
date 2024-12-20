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

  ngOnInit(): void {
    console.log('ngOnInit() de GestionComponent appelée');
    this.contactData = this.formDataService.getData(); // Récupère les données depuis localStorage
    console.log('Données récupérées dans GestionComponent :', this.contactData);
  }
}
