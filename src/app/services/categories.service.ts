import { Injectable } from '@angular/core';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
categorie: Categories[] = [
    {id: 0, nom: 'Signaux de danger', description: 'Ces signaux préviennent d\'un danger', img: 'assets/image/chicane.png'},
    {id: 1, nom: 'Signaux d\'interdictions', description: 'Ces signaux interdisent certaines actions', img: 'assets/image/sens.png'},
    {id: 2, nom: 'Signaux réglant la priorité', description: 'Ces signaux définissent le véhicule prioritaire', img: 'assets/image/ceder.png'},
    {id: 3, nom: 'Signaux réglant l\'arrêt et le sationnement', description: 'Ces signaux donnent des informations sur le stationnement', img: 'assets/image/bleu.png'},
    {id: 4, nom: 'Signaux d\'obligation', description: 'Ces signaux obligent à effectuer certaines actions', img: 'assets/image/circulation.png'}] ;
  constructor() { }
  getAllCatgories() {
    return this.categorie;
  }

  getCategorieById(id) {
    return this.categorie[id];
  }
}
