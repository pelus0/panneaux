import { Component, OnInit } from '@angular/core';
import { Questions } from '../services/questions';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
  counter: number;
  click: boolean;
  response: string;
questions: Questions = null;
  constructor(private questionservice: QuestionsService) {
    this.click = false;
    this.counter = 0;
    this.getQuestions(this.counter);
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
  nextQuestion() {
    this.click = false;
    this.counter = this.counter + 1;
    this.getQuestions(this.counter);
  }

}
