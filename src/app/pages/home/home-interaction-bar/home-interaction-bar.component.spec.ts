import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInteractionBarComponent } from './home-interaction-bar.component';

describe('HomeInteractionBarComponent', () => {
  let component: HomeInteractionBarComponent;
  let fixture: ComponentFixture<HomeInteractionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeInteractionBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInteractionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
