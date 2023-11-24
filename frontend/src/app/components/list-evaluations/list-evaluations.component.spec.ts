import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvaluationsComponent } from './list-evaluations.component';

describe('ListEvaluationsComponent', () => {
  let component: ListEvaluationsComponent;
  let fixture: ComponentFixture<ListEvaluationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEvaluationsComponent]
    });
    fixture = TestBed.createComponent(ListEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
