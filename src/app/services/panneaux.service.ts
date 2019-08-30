import { Injectable } from '@angular/core';
import { Panneaux } from './panneaux';
import { Categories } from '../services/categories';
import { CategoriesService} from '../services/categories.service';

// tslint:disable:max-line-length
@Injectable({
  providedIn: 'root'
})
export class PanneauxService {
panneau: Panneaux[] = [
    {id: 0, categorie: this.categorieservice.getCategorieById(0), nom: 'chicane', description: 'panneau indiquant une chicane', img: 'assets/image/chicane.png'},
    {id: 1, categorie: this.categorieservice.getCategorieById(0), nom: 'retrecissement de voie', description: 'panneau indiquant un rétrécissement de voie', img: 'assets/image/voie.png'},
    {id: 2, categorie: this.categorieservice.getCategorieById(0), nom: 'passage d\'un train', description: 'panneau indiquant la traversée d\'une voie ferrée', img: 'assets/image/train.png'},
    {id: 3, categorie: this.categorieservice.getCategorieById(0), nom: 'chaussee glissante', description: 'panneau indiquant une portion de route glissante', img: 'assets/image/glissant.png'},
    {id: 4, categorie: this.categorieservice.getCategorieById(1), nom: 'sens interdit', description: 'panneau interdisant la circulation dans un sens', img: 'assets/image/sens.png'},
    {id: 5, categorie: this.categorieservice.getCategorieById(1), nom: 'fin de limitation', description: 'panneau indiquant la fin d\'une limitation de vitesse', img: 'assets/image/fin.png'},
    {id: 6, categorie: this.categorieservice.getCategorieById(1), nom: 'circulation interdite', description: 'panneau interdisant la circulation de véhicule', img: 'assets/image/interdit.png'},
    {id: 7, categorie: this.categorieservice.getCategorieById(1), nom: 'limitation de vitesse', description: 'panneau indiquant la vitesse maximale', img: 'assets/image/limitation.png'},
    {id: 8, categorie: this.categorieservice.getCategorieById(2), nom: 'ceder le passage', description: 'panneau indiquant qu\'il faut céder le passage à un usager à la prochaine intersection' , img: 'assets/image/ceder.png'},
    {id: 9, categorie: this.categorieservice.getCategorieById(2), nom: 'stop', description: 'panneau indiquant qu\'il faut marquer un arrêt à l\'intersection', img: 'assets/image/stop.png'},
    {id: 10, categorie: this.categorieservice.getCategorieById(2), nom: 'axe prioritaire', description: 'panneau indiquant que cette voie est prioritaire aux intersections', img: 'assets/image/axe.png'},
    {id: 11, categorie: this.categorieservice.getCategorieById(2), nom: 'fin de priorite', description: 'panneau indiquant que la voie n\'est plus prioritaire à la prochaine intersection', img: 'assets/image/priorite.png'},
    {id: 12, categorie: this.categorieservice.getCategorieById(3), nom: 'stationnement interdit', description: 'panneau interdisant le stationnement', img: 'assets/image/stationnement.png'},
    {id: 13, categorie: this.categorieservice.getCategorieById(3), nom: 'places bleues', description: 'panneau indiquant une place bleue', img: 'assets/image/bleu.png'},
    {id: 14, categorie: this.categorieservice.getCategorieById(3), nom: 'stationnement alterne', description: 'panneau indiquant qu\'il faut se stationner d\'un coté la première partie du mois et de l\'autre le reste du mois', img: 'assets/image/alterne.png'},
    {id: 15, categorie: this.categorieservice.getCategorieById(3), nom: 'stationnement et arret interdit', description: 'panneau interdisant l\'arrêt et le stationnement', img: 'assets/image/arret.png'},
    {id: 16, categorie: this.categorieservice.getCategorieById(4), nom: 'entree autoroute', description: 'panneau indiquant l\'entrée d\'une autoroute', img: 'assets/image/autoroute.png'},
    {id: 17, categorie: this.categorieservice.getCategorieById(4), nom: 'sens de circulation', description: 'panneau autisant à ne circuler que dans un sens', img: 'assets/image/circulation.png'},
    {id: 18, categorie: this.categorieservice.getCategorieById(4), nom: 'virage a droite', description: 'panneau indiquant qu\'il faut tourner à droite', img: 'assets/image/droite.png'},
    {id: 19, categorie: this.categorieservice.getCategorieById(4), nom: 'virage a gauche', description: 'panneau indiquant qu\'il faut tourner à gauche', img: 'assets/image/gauche.png'},

];
categorie: Categories[] = null;
  constructor(private categorieservice: CategoriesService ) { }
  getAll() {
    return this.panneau;
  }
  getPanneauById(id) {
    return this.panneau[id];
  }
  getPanneauByCategorie(categorie) {
    return this.panneau[categorie];
  }
}
