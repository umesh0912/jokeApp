import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from "rxjs/operators";

@Component({
  selector: 'app-model-demo',
  templateUrl: './model-demo.component.html',
  styleUrls: ['./model-demo.component.css']
})
export class ModelDemoComponent implements OnInit {

  langs: String[] = [
    'English',
    'Marathi',
    'Hindi'
  ]

  searchField : FormControl;
  searches : String[] = [];

  myForm : FormGroup;

  firstName : FormControl;
  lastName : FormControl;
  email: FormControl;
  password : FormControl;
  language : FormControl;

  constructor() { }

  ngOnInit() {

    this.creatFormControls ();
    this.createForm ();

    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(item=> console.log(item))
      )
      .subscribe(item => {
        this.searches.push(item);
      })
  }

  creatFormControls () {
    this.firstName = new FormControl("", Validators.required);
    this.lastName = new FormControl("", Validators.required);
    this.email = new FormControl("", [
      Validators.required,
      Validators.pattern("[^@]*@[^@]*")
    ]);
    this.password = new FormControl ("", [
      Validators.minLength(8),
      Validators.required
    ]);
    this.language =new FormControl();
  }

  createForm () {
    this.myForm = new FormGroup ({
      name : new FormGroup ({
        firstName : this.firstName,
        lastName : this.lastName
      }),
      email: this.email,
      password: this.password,
      language: this.language
    })
  }

  onSubmit () {
    if(this.myForm.valid) {
      console.log("form submitted");
      this.myForm.reset();
    }

  }

}
