import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

import { NewsService } from '../../services/news.service';

import { Album, Picture } from '../../models/news';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [ './album.component.scss' ]
})
export class AlbumComponent implements OnInit {

  public album: Album;
  public pictures: Picture[];
  public activeId: string = '0';

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngbCarouselConfig: NgbCarouselConfig,
    private news: NewsService
  ) {
    this.ngbCarouselConfig.interval = 0;
  }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      let id: number;

      if (url.length == 2) {
        id = parseInt(url[1].path);
        this.getAlbum(id);
      }
    });

    $(document).ready(() => {
      this.setCarouselDimensions();

      $(window).resize(() => {
        this.setCarouselDimensions();
      });
    });
  }

  public setCarouselDimensions(): void {
    const windowHeight: number = $(window).height();
    const windowWidth: number = $(window).width();

    const carouselContainer: HTMLElement = $('.carousel-container');
    $(carouselContainer).height(windowHeight);
    $(carouselContainer).width(windowWidth);

    const carouselContainerImg: HTMLElement = $('.carousel-container img');
    $(carouselContainerImg).css('max-height', `${windowHeight}px`);
    $(carouselContainerImg).css('max-width', `${windowWidth}px`);
  }

  public getAlbum(id: number): void {
    this.album = this.news.getAlbum(id);
    this.pictures = this.news.getAlbumPictures(id);
  }

  public startCarousel(id: number): void {
    $('.carousel-container').css('display', 'flex');
    $('.content-page-container').hide();
    this.activeId = id.toString();
  }

  public closeCarousel(): void {
    $('.carousel-container').css('display', 'none');
    $('.content-page-container').show();
  }

}
