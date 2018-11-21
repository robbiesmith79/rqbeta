import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RealQuikService {

  constructor(private http: HttpClient) {}

  public response;

  /* customers helper */
  
  public listUsers() {
    this.http.get("http://localhost:8000/api/users").subscribe((response)=>{ 
      this.response = response;
    });
    return this.response;
  }

}
