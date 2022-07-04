import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkordComponent } from './skord.component';

describe('SkordComponent', () => {
  let component:SkordComponent;
  let fixture: ComponentFixture<SkordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
