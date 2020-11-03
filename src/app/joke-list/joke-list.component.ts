import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  jokes : Joke[];

  constructor() { 

    this.jokes = [

      new Joke("What did the cheeze say when it looked in the mirror?","Hello-Me(Halloumi)",true),
      new Joke("What kind of cheese do you use to distguiese a small horse?","Mask-a-Pony",true),
      new Joke("A kid threw a lump of cheddar at me","I thought that is not very mature",true)
  
    ]

  }

  addJoke(joke){
    console.log("working");
    this.jokes.unshift(joke);
  }

  deleteJoke(joke){
    let indexToDelete = this.jokes.indexOf(joke);
    if(indexToDelete !== -1){
      this.jokes.splice(indexToDelete,1);
    }
  }

  ngOnInit() {
  }

}
