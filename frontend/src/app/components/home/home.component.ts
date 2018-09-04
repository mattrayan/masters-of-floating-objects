import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { Observable } from 'rxjs/Rx';
import * as $ from 'jquery';

import { ContentService } from '../../services/content.service';
import { NewsService } from '../../services/news.service';

import { News } from '../../models/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  public about: string = '';
  public news: News[] = [];

  public teamAge: number = (new Date()).getFullYear() - 2002;

  constructor(
    private router: Router,
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
        console.log(news);
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

  public goToNews(): void {
    this.router.navigate([ 'news' ]);
  }

  public goToNewsItem(id: number): void {
    this.router.navigate([ 'news', id ]);
  }

  public goToJoin(): void {
    this.router.navigate([ 'join' ]);
  }

  public goToRoster(): void {
    this.router.navigate([ 'team', 'roster' ]);
  }

  public goToAlumni(): void {
    this.router.navigate([ 'team', 'alumni' ]);
  }

  public goToResults(): void {
    window.open('http://www.mofosdragonboat.com/Rankings/RankingsIndex.php');
  }

}
