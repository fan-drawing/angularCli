import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id = '';
  name = '';
  constructor(private routerinfo: ActivatedRoute) { }

  ngOnInit() {
    const getItem = 'id';
    const getName = 'name';
    this.id = this.routerinfo.snapshot.queryParams[getItem];
    this.name = this.routerinfo.snapshot.params[getName];
    // console.log( this.routerinfo.snapshot.queryParams['id']);
  }

}
