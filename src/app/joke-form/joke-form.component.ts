import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Joke } from '../joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup:string, punchline:string) {
    console.log("in create joke of joke-form componentS")
    this.jokeCreated.emit(new Joke(setup, punchline, true));
  }

  constructor() { }

  
  ngOnInit() {
  }
}
