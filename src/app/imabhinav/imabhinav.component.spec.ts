import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImabhinavComponent } from './imabhinav.component';

describe('ImabhinavComponent', () => {
  let component: ImabhinavComponent;
  let fixture: ComponentFixture<ImabhinavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImabhinavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImabhinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
