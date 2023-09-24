import { Component } from '@angular/core';
import { Fournisseur } from '../Core/Fournisseur';

@Component({
  selector: 'app-fournisseur',
  template: './fournisseur.component.html',
  styleUrls: ['./Fournisseur.component.css']
})
export class FournisseurComponent {
  idFournisseur: number = 105;
  code: string = 'A104B89';
  libelle: string = 'MyTeck'; 
  hide: boolean = false; 

  toggleHide() {
    this.hide = !this.hide; // Bascule la valeur de 'hide' entre true et false
    console.log('hide:', this.hide); // Affiche la valeur de 'hide' dans la console
  }
}
