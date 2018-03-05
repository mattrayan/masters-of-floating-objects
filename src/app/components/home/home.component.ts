import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import * as $ from 'jquery';

import { NewsService } from '../../services/news.service';

import { NewsItem, Picture } from '../../models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {

  public newsItems: NewsItem[];
  public pictures: Picture[];
  public teamAge: number = (new Date()).getFullYear() - 2002;

  constructor(
    private router: Router,
    private news: NewsService
  ) { }

  ngOnInit() {
    $(document).ready(() => {
      this.setSplashHeight();

      $(window).resize(() => {
        this.setSplashHeight();
      });
    });

    this.getNews();
  }

  public setSplashHeight(): void {
    const splashHeight: number = $(window).height() - $('.navbar').outerHeight();
    $('.splash').height(splashHeight);
  }

  public getNews(): void {
    this.newsItems = this.news.getNews();
    console.log(this.newsItems);
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
    window.open('http://www.mofosdragonboat.com/Rankings/RankingsIndex.php', '_blank');
  }

}
