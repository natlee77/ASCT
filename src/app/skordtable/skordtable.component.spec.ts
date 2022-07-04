import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkordtableComponent } from './skordtable.component';

describe('SkordtableComponent', () => {
  let component:SkordtableComponent;
  let fixture: ComponentFixture<SkordtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkordtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkordtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
