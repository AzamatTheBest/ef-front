import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationDetailsComponent } from './foundation-details.component';

describe('FoundationDetailsComponent', () => {
  let component: FoundationDetailsComponent;
  let fixture: ComponentFixture<FoundationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
