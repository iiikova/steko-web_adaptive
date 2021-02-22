import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'steko-web';
  isDisplay = false;
  Images = [
    '../assets/images/slide1.jpg',
    '../assets/images/slide2.jpg',
    '../assets/images/slide3.jpg',
    '../assets/images/slide4.jpg',
    '../assets/images/slide5.jpg',
    '../assets/images/slide6.jpg',
    '../assets/images/slide7.jpg',
    '../assets/images/slide8.jpg',
  ];

  SlideOptions = { items: 1, dots: true, nav: false, loop: true, autoplay: true };
  CarouselOptions = { items: 3, dots: true, nav: false };

  showMenu() {
    this.isDisplay = !this.isDisplay;
    console.log('menu');

  }


}
