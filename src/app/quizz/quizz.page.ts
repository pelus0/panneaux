import { Component, OnInit } from '@angular/core';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';
import {Storage} from '@ionic/Storage';
import random from '@angular-devkit/schematics/src/rules/random';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
  nbrep: number;
  LastScore = 0
  counter: number;
  start: boolean;
  click: boolean;
  response: string;
questions: Questions = null;
  constructor(private questionservice: QuestionsService, private storage: Storage) {
    this.nbrep = 0;
    this.start = false;
    this.click = false;
    this.counter = 0;
    this.getQuestions(this.counter);
    storage.get('LastScore').then((data) => {
      this.LastScore = data;
    });
  }

  ngOnInit() {
  }
  getQuestions(id) {
    this.questions = this.questionservice.getQuestionById(id);
  }
  hasClicked(r) {
    this.click = true;
    this.response = r;
  }
  startQuiz() {
    this.start = true;
  }
  bonnerep() {
    this.nbrep = (this.nbrep + 1);
  }
  nextQuestion() {
    this.click = false;
    this.counter = this.counter + 1;
    this.getQuestions(this.counter);
  }
  setLastScore() {
    this.storage.set('LastScore', this.nbrep / 2);
  }
}
