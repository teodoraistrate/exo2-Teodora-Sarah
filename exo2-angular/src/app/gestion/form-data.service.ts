import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class FormDataService {
  private formData: any = null;

  saveData(data: any) {
    console.log('saveData() appelée avec les données :', data); // Vérifiez les données reçues
    this.formData = data; // Stockez les données
    console.log('Données sauvegardées dans formData :', this.formData); // Vérifiez que formData est bien mis à jour
  }



  getData() {
    console.log('getData() appelée'); // Log de vérification
    console.log('Données actuellement dans formData :', this.formData); // Vérifiez les données disponibles
    return this.formData;
  }

}
