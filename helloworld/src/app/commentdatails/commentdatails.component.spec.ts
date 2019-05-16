import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentdatailsComponent } from './commentdatails.component';

describe('CommentdatailsComponent', () => {
  let component: CommentdatailsComponent;
  let fixture: ComponentFixture<CommentdatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentdatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentdatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
