import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyRoutePage } from './my-route.page';

describe('MyRoutePage', () => {
  let component: MyRoutePage;
  let fixture: ComponentFixture<MyRoutePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyRoutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
