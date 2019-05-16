import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdatailsComponent } from './postdatails.component';

describe('PostdatailsComponent', () => {
  let component: PostdatailsComponent;
  let fixture: ComponentFixture<PostdatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostdatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
