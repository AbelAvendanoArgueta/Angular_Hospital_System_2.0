import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDrugsComponent } from './list-drugs.component';

describe('ListDrugsComponent', () => {
  let component: ListDrugsComponent;
  let fixture: ComponentFixture<ListDrugsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDrugsComponent]
    });
    fixture = TestBed.createComponent(ListDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
