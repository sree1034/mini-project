import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleactionComponent } from './singleaction.component';

describe('SingleactionComponent', () => {
  let component: SingleactionComponent;
  let fixture: ComponentFixture<SingleactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
