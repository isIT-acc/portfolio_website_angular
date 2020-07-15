import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css'],
})
export class MyWorksComponent implements OnInit {
  works: Object[];
  constructor() {}

  ngOnInit(): void {
    this.works = [
      {
        path: './assets/imgs/my_works_screenshots/bootstrap.png',
        category: 'bootstrap',
        name: 'веб-сайт "#работа_удалённо"',
      },
      {
        path: './assets/imgs/my_works_screenshots/calc_calories_js_1.png',
        category: 'js',
        name: 'веб-приложение "Калькулятор суточных калорий"',
      },
      {
        path: './assets/imgs/my_works_screenshots/hotel_website.png',
        category: 'HTML/CSS',
        name: 'веб-сайт отеля',
      },
      {
        path:
          './assets/imgs/my_works_screenshots/clients_panel_app_angular.png',
        category: 'angular/firebase',
        name: 'веб-приложение "ClientPanel"',
      },
      {
        path: './assets/imgs/my_works_screenshots/company_website.png',
        category: 'html/css',
        name: 'веб-сайт компании "TransFormer"',
      },
      {
        path: './assets/imgs/my_works_screenshots/git_hub_search_js.png',
        category: 'js',
        name: 'веб-приложение "GitHub поиск" ',
      },
    ];
  }
}
