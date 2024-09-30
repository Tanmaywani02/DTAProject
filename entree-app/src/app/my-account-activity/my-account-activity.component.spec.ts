import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountActivityComponent } from './my-account-activity.component';

describe('MyAccountActivityComponent', () => {
  let component: MyAccountActivityComponent;
  let fixture: ComponentFixture<MyAccountActivityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAccountActivityComponent]
    });
    fixture = TestBed.createComponent(MyAccountActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
