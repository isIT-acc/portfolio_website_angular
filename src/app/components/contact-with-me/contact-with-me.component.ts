import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientAnswer } from '../../interfaces/ClientAnswer';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact-with-me',
  templateUrl: './contact-with-me.component.html',
  styleUrls: ['./contact-with-me.component.css'],
})
export class ContactWithMeComponent implements OnInit {
  contact_items: Object[] = [
    {
      icon: 'fa-envelope',
      type: 'ЭЛЕКТРОННАЯ ПОЧТА',
      body: 'jBerg@company.org',
    },
    {
      icon: 'fa-phone',
      type: 'ТЕЛЕФОН',
      body: '+46 8 34 20 12',
    },
    {
      icon: 'fa-address-card',
      type: 'АДРЕС',
      body: 'Pontonjärgatan 30, 112 37 Стокгольм, Швеция',
    },
  ];
  clientAnswer: ClientAnswer = {
    id: '',
    firstName: '',
    email: '',
    theme: '',
    phone: '',
    message: '',
  };

  showErrorMess: any = {
    onEmail: false,
    onPhone: false,
    onMess: false,
  };

  constructor(private _flashMessagesService: FlashMessagesService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      // error flags up
      if (form.value.message === '') {
        this.showErrorMess.onMess = true;
      }
      if (form.value.email === '') {
        this.showErrorMess.onEmail = true;
      }
      if (form.value.phone === '') {
        this.showErrorMess.onPhone = true;
      }
      this._flashMessagesService.show('Заполните поля корректно!', {
        cssClass: 'error',
      });
    } else {
      this.showErrorMess.onMess = false;
      this.showErrorMess.onEmail = false;
      this.showErrorMess.onPhone = false;
      // send clientAnswer to email
      this._flashMessagesService.show('Ваше сообщение отправлено!', {
        cssClass: 'success',
      });
      console.log(form.value);

      form.reset();
    }
  }
  onClickPhoneInput() {
    this.showErrorMess.onPhone = false;
  }
  onClickEmailInput() {
    this.showErrorMess.onEmail = false;
  }

  onClickMessInput() {
    this.showErrorMess.onMess = false;
  }
}
