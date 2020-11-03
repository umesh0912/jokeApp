import { Component } from '@angular/core';
import { JokeComponent } from './joke/joke-component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokeApp';

  joke : JokeComponent;

  //console.log("hi  " + this.joke.punchline);

  constructor () {

    this.joke = new JokeComponent();

    console.log("hi  " + this.joke.punchline)
  }

}
