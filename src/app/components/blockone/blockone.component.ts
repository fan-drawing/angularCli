/*这里是从Angular核心模块里面引入了component装饰器*/
import { Component, Input,  Output, EventEmitter, OnInit , OnChanges,
   AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
// import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-blockone',
  templateUrl: './blockone.component.html',
  styleUrls: ['./blockone.component.css']
})
export class BlockoneComponent implements OnChanges , OnInit,
  AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked , OnDestroy {
  public stock: string = '12';
  @Input() person: any;
  @Output() provinceOut = new EventEmitter<any>();
  constructor() { }

  provinceChange() {
    // 选择省份的时候发射省份给父组件
    console.log(this.stock);
    this.provinceOut.emit(this.stock);
  }

  ngOnChanges() {
    console.log('-- ngOnChanges' + 'currentVal');
  }
  ngOnInit() {
    console.log('-- ngOnInit方法');
  }

  //  ngDoCheck() {
  //   console.log('-- ngDoCheck');
  //  }

   ngAfterContentInit() {
    console.log('-- ngAfterContentInit');
   }

   ngAfterContentChecked() {
    console.log('-- ngAfterContentChecked');
   }

   ngAfterViewInit() {
    console.log('-- ngAfterViewInit');
   }

   ngAfterViewChecked() {
    console.log('-- ngAfterViewChecked');
   }

   ngOnDestroy() {
    console.log('-- ngOnDestroy');
   }

}
