import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

import { ContentService } from '../../services/content.service';

import { Album, Picture } from '../../models/content';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: [ './album.component.scss' ]
})
export class AlbumComponent implements OnInit, AfterViewInit {

  public album: Album;
  public activeId: string = '0';

  constructor(
    private activatedRoute: ActivatedRoute,
    private ngbCarouselConfig: NgbCarouselConfig,
    private content: ContentService
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
  }

  ngAfterViewInit() {
    this.setCarouselDimensions();
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
    this.content.getAlbum(id)
      .subscribe((response: Album) => this.album = response);
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
