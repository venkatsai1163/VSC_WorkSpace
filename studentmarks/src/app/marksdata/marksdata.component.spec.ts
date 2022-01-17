import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksdataComponent } from './marksdata.component';

describe('MarksdataComponent', () => {
  let component: MarksdataComponent;
  let fixture: ComponentFixture<MarksdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
