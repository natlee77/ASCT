import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TSlistComponent } from './tslist.component';

describe('TSlistComponent', () => {
  let component:TSlistComponent;
  let fixture: ComponentFixture<TSlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TSlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TSlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
