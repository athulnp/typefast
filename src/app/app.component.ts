import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'TypeFast';
  userword = "";
  wordArray = this.GetWords();
  score = 0;
  timeLeft = 10;
  currentWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
  IsNotTimeOut = true;
  lastWord = "";

  constructor() {
  }


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
      if (this.lastWord.ignoreEqual(this.currentWord)) {
        this.currentWord = this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
      }
    }
  }
  countDown() {
    // console.log(this, this.timeLeft)
    if (this.timeLeft > 0) {
      this.timeLeft = this.timeLeft - 1;
      console.log(this.timeLeft);
    }
    else {
      this.IsNotTimeOut = false;
    }
  }


  public GetWords(): Array<string> {
    const words = ["Dial", "Direction", "Team", , "Worker", "Social", "Counsellors", "Helpline", "Even", "Return", "Kerala",
      "Step", "House", "quarantine", "Decision", "However", "Proceed", "Travel", "Plan", "Inform", "Airport", "Request", "Speak"
      , "Caller", "Father", "Mother", "Sister", "Brother", "Wife", "Husband", "Children", "Home", "Society", "Save", "Safe", "Want"
      , "Beacuse", "Ofcourse", "Alright", "Although", "Anyway", "Country", "India", "State", "Weather", "Where", "Height", "Weight"
      , "Race", "Right", "Wrong", "Teflon", "Teacher", "Writer", "Engineer", "Nurse", "Doctor", "Politics", "Develop", "Emapathise"
      , "Situation", "Creation", "Outbreak", "Predicament", "Attend", "Attention", "Before", "After", "Never", "Neither", "Either"
      , "None", "Another", "Time", "Place", "Plane", "Service", "Security", "Server", "Computer", "Television", "Camera", "Phone",
      "Furniture", "Labourious", "Hilarious", "Arrival", "Departure", "Designer", "Architect", "Findings", "Earnigs", "Fashion"
      , "Mask", "Persistent", "Dream", "Great", "Goat", "Good", "Food", "Sisterhood", "Collaboration", "Season", "Winter", "Summer",
      "Today", "Yesterday", "Tomorrow", "Days", "Years", "Weekend", "Sunday", "Monday", "Teusday", "Wednesday", "Friday", "Saturday"
      , "Often", "Growth", "Opportunity", "Technology", "Something", "Someone", "Special", "Knowledge", "Transfer", "Building",
      "Reality", "Women", "Emotion", "Rejection", "Acceptance", "Criteria", "Problem", "Solution", "Correction", "Direction", "Adherence"
      , "Excited", "Extrovert", "Introvert", "Provider", "Subscriber", "Elasticated", "Instagram", "Pharmaceutical", "Manufacturers"
      , "Presidential", "Tournaments"]
    return words;
  }


}
