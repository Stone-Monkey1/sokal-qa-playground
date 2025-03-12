import { Component, ViewEncapsulation } from '@angular/core';
import { HomeInteractionBarComponent } from "./home-interaction-bar/home-interaction-bar.component";
import { HomeQuickLinksComponent } from './home-quick-links/home-quick-links.component';
import { HomeVehicleCarouselComponent } from './home-vehicle-carousel/home-vehicle-carousel.component';
import { HomeTabbedSearchFilterComponent } from './home-tabbed-search-filter/home-tabbed-search-filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None // Disables Angular's style scoping
  ,
  imports: [HomeInteractionBarComponent, HomeQuickLinksComponent, HomeVehicleCarouselComponent, HomeTabbedSearchFilterComponent]
})
export class HomeComponent {
  // Fix: Define DEALER_NAME
  DEALER_NAME = 'Your Dealer Name';
}
