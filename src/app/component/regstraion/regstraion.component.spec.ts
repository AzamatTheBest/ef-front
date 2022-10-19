import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegstraionComponent } from './regstraion.component';

describe('RegstraionComponent', () => {
  let component: RegstraionComponent;
  let fixture: ComponentFixture<RegstraionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegstraionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegstraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
