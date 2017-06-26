import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerEleComponent } from './server-ele.component';

describe('ServerEleComponent', () => {
  let component: ServerEleComponent;
  let fixture: ComponentFixture<ServerEleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerEleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
