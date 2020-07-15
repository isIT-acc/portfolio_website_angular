import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

// import { Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu_items: any;
  choosed_item: string;
  constructor(public router: Router) {
    router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        //choose item for underlying
        this.menu_items.forEach((element) => {
          if (element.link === e.url) {
            this.choosed_item = element.name;
          }
        });
      });
  }

  ngOnInit(): void {
    // get current link
    // this.curLink = this.route.snapshot;
    this.menu_items = [
      { name: 'главная', link: '/' },
      { name: 'обо мне', link: '/about' },
      { name: 'мои работы', link: '/my_works' },
      { name: 'свяжитесь со мной', link: '/contact_with_me' },
    ];

    this.choosed_item = this.menu_items[0].name;
  }
  clickOnLogo() {
    this.choosed_item = this.menu_items[0].name;
  }
}
