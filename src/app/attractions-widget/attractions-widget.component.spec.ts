import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsWidgetComponent } from './attractions-widget.component';

describe('AttractionsWidgetComponent', () => {
  let component: AttractionsWidgetComponent;
  let fixture: ComponentFixture<AttractionsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
