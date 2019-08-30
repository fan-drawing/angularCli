import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
  public AppPerson: any = {
    name: '陈佳兴',
    color: '蓝色'
  };
  public province: any;
  constructor() { }
  recPro(event: any) {
    this.province = event;
  }
  ngOnInit() {
  }

}
