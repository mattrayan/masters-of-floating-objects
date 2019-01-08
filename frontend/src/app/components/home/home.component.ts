import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as $ from 'jquery';

import { ContactService } from '../../services/contact.service';
import { ContentService } from '../../services/content.service';

import { Message } from '../../models/contact';
import { News } from '../../models/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  public about: string = '';
  public news: News[] = [];
  public message: Message = new Message;
  public teamAge: number = (new Date()).getFullYear() - 2002;

  constructor(
    private contact: ContactService,
    private content: ContentService,
  ) { }

  ngOnInit() {
    $(document).ready(() => {
      this.setSplashHeight();

      $(window).resize(() => {
        this.setSplashHeight();
      });
    });

    const initObservables: Observable<any>[] = [
      this.content.getAbout(),
      this.content.getNews()
    ];

    Observable.forkJoin(initObservables)
      .subscribe(([ about, news ]) => {
        this.about = about;
        this.news = news;
      });
  }

  public setSplashHeight(): void {
    const splashHeight: number = $(window).height() - $('.navbar').outerHeight();
    $('.splash').height(splashHeight);
  }

  public scrollToContent(): void {
    const navbarBufferHeight: number = $('.fixed-navbar-buffer').height();
    const contentPosition: number = $('#news-block').offset().top - $(window).scrollTop();

    $('html, body').animate({scrollTop: `+=${contentPosition - navbarBufferHeight}px`}, 500);
  }

  public scrollToAbout(): void {
    const navbarBufferHeight: number = $('.fixed-navbar-buffer').height();
    const contentPosition: number = $('#about-block').offset().top - $(window).scrollTop();

    $('html, body').animate({scrollTop: `+=${contentPosition - navbarBufferHeight}px`}, 500);
  }

  public sendMessage(): void {
    if (!this.message.name || !this.message.email || !this.message.message) {
      return;
    }

    this.message.processing = true;

    this.contact.message(this.message)
      .finally(() => this.message.processing = false)
      .subscribe((response: Message) => this.message.sent = true);
  }

  public goToResults(): void {
    window.open('http://www.mofosdragonboat.com/Rankings/RankingsIndex.php');
  }

}
