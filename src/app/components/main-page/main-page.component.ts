import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  spec_items: Object[];
  specs_achieves: Object[];
  workflow_content_items: Object[];
  soc_icons: Object[];
  constructor() {}

  ngOnInit(): void {
    this.spec_items = [
      {
        item_icon: 'fa-camera',
        item_name: 'ФОТОГРАФИЯ',
        item_descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus, earum deserunt repellat numquam similique quae doloremque quasi nihil esse enim ab! Voluptate placeat obcaecati excepturi animi nesciunt, eveniet expedita.',
      },
      {
        item_icon: 'fa-file',
        item_name: 'АНАЛИТИКА',
        item_descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus, earum deserunt repellat numquam similique quae doloremque quasi nihil esse enim ab! Voluptate placeat obcaecati excepturi animi nesciunt, eveniet expedita.',
      },
      {
        item_icon: 'fa-desktop',
        item_name: 'UI/UX ДИЗАЙН',
        item_descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus, earum deserunt repellat numquam similique quae doloremque quasi nihil esse enim ab! Voluptate placeat obcaecati excepturi animi nesciunt, eveniet expedita.',
      },
      {
        item_icon: 'fa-object-ungroup',
        item_name: 'ВЁРСТКА',
        item_descr:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus, earum deserunt repellat numquam similique quae doloremque quasi nihil esse enim ab! Voluptate placeat obcaecati excepturi animi nesciunt, eveniet expedita.',
      },
    ];

    this.specs_achieves = [
      {
        achieve_icon: 'fa-user-friends',
        achieve_name: 'Клиенты',
        achieve_num: 114,
      },
      {
        achieve_icon: 'fa-user-clock',
        achieve_name: 'Рабочих часов',
        achieve_num: 4700,
      },
      {
        achieve_icon: 'fa-tasks',
        achieve_name: 'Проектов завершено',
        achieve_num: 172,
      },
      {
        achieve_icon: 'fa-medal',
        achieve_name: 'Награды',
        achieve_num: 3,
      },
    ];

    this.workflow_content_items = [
      {
        icon_name: 'fa-user-friends',
        number: 1,
        subheader: 'обсуждение проекта',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nisi rem molestias. Fugiat tempora voluptas nam. Aut eos accusantium natus.',
      },
      {
        icon_name: 'fa-file',
        number: 2,
        subheader: 'анализ',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nisi rem molestias. Fugiat tempora voluptas nam. Aut eos accusantium natus.',
      },
      {
        icon_name: 'fa-object-ungroup',
        number: 3,
        subheader: 'первый набросок проекта',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nisi rem molestias. Fugiat tempora voluptas nam. Aut eos accusantium natus.',
      },
      {
        icon_name: 'fa-thumbs-up',
        number: 4,
        subheader: 'взаимодействие',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nisi rem molestias. Fugiat tempora voluptas nam. Aut eos accusantium natus.',
      },
    ];
    this.soc_icons = [
      { name: 'fa-vk' },
      { name: 'fa-facebook-square' },
      { name: 'fa-instagram' },
      { name: 'fa-linkedin' },
    ];
  }
}
