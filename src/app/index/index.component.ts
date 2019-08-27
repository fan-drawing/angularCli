import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  arr = [{ name: 'poetries', age: 22 }, { name: 'jing' , age: 31}];
  public test: any = '这是一个测试（数据展示）';
  public inputVal: any = '';
  getData() {
    alert( this.inputVal);
    this.test = '更改' + this.test;
  }
  constructor() { }

  ngOnInit() {
  }

}
