import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockoneComponent } from './blockone.component';

describe('BlockoneComponent', () => {
  let component: BlockoneComponent;
  let fixture: ComponentFixture<BlockoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
