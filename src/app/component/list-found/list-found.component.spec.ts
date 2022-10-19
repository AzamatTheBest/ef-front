import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFoundComponent } from './list-found.component';

describe('ListFoundComponent', () => {
  let component: ListFoundComponent;
  let fixture: ComponentFixture<ListFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
