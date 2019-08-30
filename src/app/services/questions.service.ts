import { Injectable } from '@angular/core';
import { Questions} from './questions';

@Injectable({
  providedIn: 'root'
})
// tslint:disable:max-line-length
export class QuestionsService {
  questions: Questions[] = [
      {id: 0, img: 'assets/image/limitation.png', question: 'Faut-il dépasser la vitesse indiquée sur les panneaux?', r1: 'oui, absolument', r2: 'non', r3: 'ce panneau n\'existe pas' , r4: 'ca dépend', correction: 'non'},
      {id: 1, img: 'assets/image/alterne.png', question: 'Peut-on se stationner ici ?', r1: 'oui', r2: 'non', r3: 'ce panneau n\'existe pas' , r4: 'oui mais en début de mois du coté des numéros impairs et de l\'autre coté en fin de mois', correction: 'oui mais en début de mois du coté des numéros impairs et de l\'autre coté en fin de mois'},
      {id: 2, img: 'assets/image/chicane.png', question: 'Que signifie ce panneau?', r1: 'un danger', r2: 'une maison', r3: 'une interdiction' , r4: 'faire des zigzags', correction: 'un danger'},
      {id: 3, img: 'assets/image/limitation.png', question: 'A combiens de mètres un panneau s\'applique en campagne?', r1: '10m', r2: '250m', r3: '0m' , r4: '150m', correction: '150m'},
      {id: 4, img: 'assets/image/sens.png', question: 'Que signifie ce panneau?', r1: 'sens interdit', r2: 'passage d\'un train', r3: 'circulation interdite' , r4: 'rond point', correction: 'sens interdit'}
      ];

  constructor(private questionservice: QuestionsService) { }
    getQuestionById(id) {
        return this.questions[id];
    }
}

