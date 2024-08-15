import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessCardBackComponent } from './buisness-card-back.component';

describe('BuisnessCardBackComponent', () => {
  let component: BuisnessCardBackComponent;
  let fixture: ComponentFixture<BuisnessCardBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuisnessCardBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuisnessCardBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
