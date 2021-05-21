import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomgifComponent } from './randomgif.component';

describe('RandomgifComponent', () => {
  let component: RandomgifComponent;
  let fixture: ComponentFixture<RandomgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
