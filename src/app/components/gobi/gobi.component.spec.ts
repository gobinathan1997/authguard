import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiComponent } from './gobi.component';

describe('GobiComponent', () => {
  let component: GobiComponent;
  let fixture: ComponentFixture<GobiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GobiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GobiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
