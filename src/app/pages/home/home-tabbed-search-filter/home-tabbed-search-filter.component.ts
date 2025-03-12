import { Component, AfterViewInit } from '@angular/core';
declare var $: any; // Ensure jQuery is available

@Component({
  selector: 'app-home-tabbed-search-filter',
  templateUrl: './home-tabbed-search-filter.component.html',
  styleUrl: './home-tabbed-search-filter.component.css'
})
export class HomeTabbedSearchFilterComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Initialize Bootstrap tooltips
    $('[data-toggle="tooltip"]').tooltip();
  }
}
