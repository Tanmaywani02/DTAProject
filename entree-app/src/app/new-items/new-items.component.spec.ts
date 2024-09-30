import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewItemsComponent } from './new-items.component';

describe('NewItemsComponent', () => {
  let component: NewItemsComponent;
  let fixture: ComponentFixture<NewItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewItemsComponent]
    });
    fixture = TestBed.createComponent(NewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
