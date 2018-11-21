import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RealQuikService } from '../api/realquik.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private svc: RealQuikService,private http: HttpClient) { }

  public userName: string = "";
  public response: any;
  public followers: any;

  public users: any;

  ngOnInit() {
    this.listUsers();
  }

  search() {
    // this.http.get("https://api.github.com/users/" + this.userName).subscribe((response)=>{ 
    //   this.response = response;
    //   console.log(this.response);
    //   this.http.get("https://api.github.com/users/" + this.userName + "/followers").subscribe((followers) => {
    //     this.followers = followers;
    //     console.log(this.followers);
    //   })
    // });
  }

  listUsers() {
    //this.users = this.svc.listUsers();
    //console.log(this.svc.response,this.users);

    this.http.get("http://localhost:8000/api/users").subscribe((response)=>{ 
      this.response = response;
    });
  }
}
