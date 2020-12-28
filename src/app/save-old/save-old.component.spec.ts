import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOldComponent } from './save-old.component';

describe('SaveOldComponent', () => {
  let component: SaveOldComponent;
  let fixture: ComponentFixture<SaveOldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveOldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveOldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
