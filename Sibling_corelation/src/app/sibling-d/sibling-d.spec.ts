import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingD } from './sibling-d';

describe('SiblingD', () => {
  let component: SiblingD;
  let fixture: ComponentFixture<SiblingD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiblingD]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingD);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
