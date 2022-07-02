import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibnavComponent } from './libnav.component';

describe('LibnavComponent', () => {
  let component: LibnavComponent;
  let fixture: ComponentFixture<LibnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
