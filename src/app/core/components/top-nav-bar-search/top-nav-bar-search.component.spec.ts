import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavBarSearchComponent } from './top-nav-bar-search.component';

describe('TopNavBarSearchComponent', () => {
  let component: TopNavBarSearchComponent;
  let fixture: ComponentFixture<TopNavBarSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavBarSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavBarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
