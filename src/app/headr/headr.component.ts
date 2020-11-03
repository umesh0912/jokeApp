import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headr',
  templateUrl: './headr.component.html',
  styleUrls: ['./headr.component.css']
})
export class HeadrComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
