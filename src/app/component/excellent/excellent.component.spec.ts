import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcellentComponent } from './excellent.component';

describe('ExcellentComponent', () => {
  let component: ExcellentComponent;
  let fixture: ComponentFixture<ExcellentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcellentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcellentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
