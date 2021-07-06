import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSequenceComponent } from './images-sequence.component';

describe('ImagesSequenceComponent', () => {
  let component: ImagesSequenceComponent;
  let fixture: ComponentFixture<ImagesSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
