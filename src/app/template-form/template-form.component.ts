import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { Signup } from '../signup';
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit, OnChanges {

 @ViewChild('f') form : any;

  model : Signup = new Signup ();
  langs:String[] = [
    'English',
    'Marathi',
    'Hind'
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("in onChange" + this.model.email)
    throw new Error("Method not implemented.");
  }

  onSubmit() {
    console.log("form Submitted");
    this.form.reset();
  }
}
