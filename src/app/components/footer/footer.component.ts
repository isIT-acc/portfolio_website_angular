import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  soc_icons: Object[];
  constructor() {}

  ngOnInit(): void {
    this.soc_icons = [
      { name: 'fa-vk' },
      { name: 'fa-facebook-square' },
      { name: 'fa-instagram' },
      { name: 'fa-linkedin' },
    ];
  }
}
