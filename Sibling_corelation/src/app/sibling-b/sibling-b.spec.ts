import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingB } from './sibling-b';

describe('SiblingB', () => {
  let component: SiblingB;
  let fixture: ComponentFixture<SiblingB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiblingB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
