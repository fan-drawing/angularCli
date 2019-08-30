import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../models/tutorial.model';
import { AppState } from '../../turorial.state';
import * as TutorialActions from '../../actions/toturial.actions';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  arr = [{ name: 'poetries', age: 22 }, { name: 'jing' , age: 31}];
  public test: any = '这是一个测试（数据展示）';
  public inputVal: any = '';
  tutorials: Observable<Tutorial[]>;
  public tutorialadd: any = {name: '', url: ''};

  public someValue: any = 'this is a string';
  public strLength: number = (this.someValue as string).length;
  // 测试 方法返回属性值
  warp(): string {
    return '12';
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }
  addTutorial() {
    this.tutorialadd.name = '12';
    this.tutorialadd.url = '12';
    this.store.dispatch(new TutorialActions.AddTutorial(this.tutorialadd));
  }
  getData() {
    this.test = '更改' + this.test;
  }
  constructor(private store: Store<AppState>) {
    // 选择一个store为tutorial名字
    console.log(store.select('tutorial'));
    this.tutorials = store.select('tutorial');
    // console.log(this.warp());
    // console.log(this.strLength);
  }
  ngOnInit() {
  }

}
