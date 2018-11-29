import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarContentComponent } from './similar-content.component';

describe('SimilarContentComponent', () => {
  let component: SimilarContentComponent;
  let fixture: ComponentFixture<SimilarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
