import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'joke',
  templateUrl: './joke-component.html',
  styleUrls: ['./joke-component.css']
})
export class JokeComponent implements OnInit {

  jokeAuthor : String = "Umesh Jadhav"

  setup : String = 'setup';
  punchline: String = 'punchline';

  // This is a output property, child component raise this event and parent component listen to it
  // we can also pass some data while raising event, check following
  // we are passing joke model to parent component which is joke-list.component
  @Output() deleteJoke = new EventEmitter<Joke>();
  

  // joke is a input property, Parent component set this one check out joke-list.component.html
  @Input('joke') data  : Joke;


  deletJoke1(joke) {
    this.deleteJoke.emit(joke);
  }
  constructor() {
   this.setup = 'What did the cheeze say when it looked in the mirror';
   this.punchline = 'uj - ' + this.jokeAuthor;

 /*  
  this.jokes = [
    {
      setup : 'What did the cheeze say when it looked in the mirror?',
      punchline : 'Hello-Me(Halloumi)',
      hide : true
    },
    {
      setup : 'What kind of cheese do you use to distguiese a small horse?',
      punchline : 'Mask-a-Pony',
      hide : true      
    }, 
    {
      setup : 'A kid threw a lump of cheddar at me',
      punchline : 'I thought that is not very mature',
      hide : true
    },       

    
  ]*/

    console.log("Inside joke component constructor  " + this.punchline)
   }

  ngOnInit() {

    console.log("in ngOnInit life cycle hook")
  }
  


}
