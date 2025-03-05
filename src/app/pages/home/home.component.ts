import { Component } from '@angular/core';
import { DEALER_NAME } from '../../constants';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  nissanAltimaCarousel = 'assets/nissan-altima-carousel.png';
  nissanLeafCarousel = 'assets/nissan-leaf-carousel.png';
  nissanSentraCarousel = 'assets/nissan-sentra-carousel.png';
  nissanVersaCarousel = 'assets/nissan-versa-carousel.png';
  nissanAriyaCarousel = 'assets/nissan-ariya-carousel.png';
  nissanZCarousel = 'assets/nissan-z-carousel.png';
  nissanArmadaCarousel = 'assets/nissan-armada-carousel.png';
  nissanFrontierCarousel = 'assets/nissan-frontier-carousel.png';
  nissanKicksCarousel = 'assets/nissan-kicks-carousel.png';
  nissanRogueCarousel = 'assets/nissan-rogue-carousel.png';
  nissanPathfinderCarousel = 'assets/nissan-pathfinder-carousel.png';
  nissanMuranoCarousel = 'assets/nissan-murano-carousel.png';
  DEALER_NAME = DEALER_NAME;
}
