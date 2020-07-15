import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  achieve_items: Object[];
  prog_bars: Object[];
  logos_urls: Object[];
  feedbacks: Object[];
  constructor() {}

  ngOnInit(): void {
    this.achieve_items = [
      {
        icon_name: 'fa-file-image',
        achieve_name: 'сертификат 1',
        descr:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ipsum.',
      },
      {
        icon_name: 'fa-file-image',
        achieve_name: 'сертификат 2',
        descr:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ipsum.',
      },
      {
        icon_name: 'fa-medal',
        achieve_name: 'награда',
        descr:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ipsum.',
      },
    ];
    this.prog_bars = [
      { knowl_name: 'фотография', width: 100 },
      { knowl_name: 'adobe photoshop', width: 80 },
      { knowl_name: 'adobe illustrator', width: 70 },
      { knowl_name: 'adobe xd', width: 70 },
      { knowl_name: 'figma', width: 90 },
      { knowl_name: 'html/css', width: 100 },
      { knowl_name: 'bootstrap', width: 80 },
      { knowl_name: 'javascript', width: 70 },
      { knowl_name: 'wordpress', width: 70 },
    ];
    this.logos_urls = [
      { path: './assets/imgs/about-logos/html.png' },
      { path: './assets/imgs/about-logos/css.png' },
      { path: './assets/imgs/about-logos/js.png' },
      { path: './assets/imgs/about-logos/wordpress.png' },
    ];
    this.feedbacks = [
      {
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quas dicta laboriosam perspiciatis, praesentium aut cum quia ea dolorem aperiam, aspernatur adipisci accusantium magni! Non a repellendus similique.',
        photo: './assets/imgs/feedback/person1.jpg',
        name: 'Андрью Джонсон',
        city: 'Брюссель',
      },
      {
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quas dicta laboriosam perspiciatis, praesentium aut cum quia ea dolorem aperiam, aspernatur adipisci accusantium magni! Non a repellendus similique.',
        photo: './assets/imgs/feedback/person2.jpg',
        name: 'София Киз',
        city: 'Филадельфия',
      },
      {
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quas dicta laboriosam perspiciatis, praesentium aut cum quia ea dolorem aperiam, aspernatur adipisci accusantium magni! Non a repellendus similique.',
        photo: './assets/imgs/feedback/person3.jpg',
        name: 'Николай Старов',
        city: 'Москва',
      },
      {
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quas dicta laboriosam perspiciatis, praesentium aut cum quia ea dolorem aperiam, aspernatur adipisci accusantium magni! Non a repellendus similique.',
        photo: './assets/imgs/feedback/person4.jpg',
        name: 'Мэйсон Браун',
        city: 'Бостон',
      },
    ];
  }
}
