import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est singleton
})
export class FormDataService {
  private readonly STORAGE_KEY = 'contactData'; // Clé pour localStorage

  saveData(data: any) {
    console.log('saveData() appelée avec les données :', data);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data)); // Sauvegarde dans localStorage
    console.log('Données sauvegardées dans localStorage :', data);
  }

  getData() {
    console.log('getData() appelée');
    const data = localStorage.getItem(this.STORAGE_KEY); // Récupère les données depuis localStorage
    console.log('Données récupérées depuis localStorage :', data ? JSON.parse(data) : null);
    return data ? JSON.parse(data) : null;
  }

  clearData() {
    localStorage.removeItem(this.STORAGE_KEY); // Supprime les données de localStorage
    console.log('Données supprimées de localStorage');
  }
}
