import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiblingA } from './sibling-a';

describe('SiblingA', () => {
  let component: SiblingA;
  let fixture: ComponentFixture<SiblingA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiblingA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiblingA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
