import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingC } from './sibling-c';

describe('SiblingC', () => {
  let component: SiblingC;
  let fixture: ComponentFixture<SiblingC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiblingC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
