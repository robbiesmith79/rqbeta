import { Component, OnInit } from '@angular/core';
import { RealQuikService } from './realquik.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private svc: RealQuikService) {
    //this.svc.printToConsole("Hello World");
  }

  ngOnInit() {
    
  }

  public grabUsers() {
    // get is an asynchoronous call returns async object (observable)
    //let obs = this.http.get("http://localhost:8000/api/users");

    // hand this obs to a function when you're done
    //obs.subscribe(() => console.log('Got the response', obs));

    //return obs;
  }

  /* these functions will call out to a localhost server on localhost:8000 (PHP Laravel server) */



}
