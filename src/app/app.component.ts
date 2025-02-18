import { Component } from '@angular/core';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { DEALER_NAME } from './constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private titleService: Title) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setPageTitle();
      });
  }

  setPageTitle() {
    const routeTitle = this.getTitleFromRoute(this.router.url);
    this.titleService.setTitle(routeTitle);
  }

  getTitleFromRoute(url: string): string {
    const titleMap: { [key: string]: string } = {
      '/': `Home - ${DEALER_NAME}`,
      '/about': `About Us`,
      '/contact': `Contact Us - ${DEALER_NAME}`,
      '/products': `Our Products`,
    };

    return titleMap[url] || DEALER_NAME; // Default title if no match
  }
}

