import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIntroComponent } from './recipe-intro.component';

describe('RecipeIntroComponent', () => {
  let component: RecipeIntroComponent;
  let fixture: ComponentFixture<RecipeIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
