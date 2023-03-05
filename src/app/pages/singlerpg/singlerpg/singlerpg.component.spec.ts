import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglerpgComponent } from './singlerpg.component';

describe('SinglerpgComponent', () => {
  let component: SinglerpgComponent;
  let fixture: ComponentFixture<SinglerpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglerpgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglerpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
