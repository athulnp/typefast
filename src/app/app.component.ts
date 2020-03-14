import { Component, AfterViewInit } from '@angular/core';
import { words } from "./words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'TypeFast';
  userword = "";
  wordArray = words;
  score = 0;
  timeLeft = 10;
  currentWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
  IsNotTimeOut = true;
  lastWord = "";
  userName = "";

  constructor() { }

  ngAfterViewInit(): void {
    window.setInterval(this.countDown.bind(this), 1000);
  }

  onValidateWord() {
    if (this.currentWord.ignoreEqual(this.userword)) {
      this.userword = "";
      this.score = this.score + 1;
      this.timeLeft = 10;
      this.lastWord = this.currentWord;
      this.currentWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
      this.setHighestScore();
      if (this.lastWord.ignoreEqual(this.currentWord)) {
        this.currentWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
      }
    }
  }

  countDown() {
    if (this.timeLeft > 0) {
      this.timeLeft = this.timeLeft - 1;
    }
    else {
      this.IsNotTimeOut = false;
    }
  }

  setHighestScore() {
    if (this.score > this.getHighestScore()) {
      localStorage.setItem("score", this.score.toString());
    }
  }
  getHighestScore() {
    return +window.localStorage.getItem("score");
  }

}
