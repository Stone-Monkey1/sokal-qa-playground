import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTabbedSearchFilterComponent } from './home-tabbed-search-filter.component';

describe('HomeTabbedSearchFilterComponent', () => {
  let component: HomeTabbedSearchFilterComponent;
  let fixture: ComponentFixture<HomeTabbedSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTabbedSearchFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTabbedSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
