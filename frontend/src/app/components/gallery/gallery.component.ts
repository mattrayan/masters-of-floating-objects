import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import * as $ from 'jquery';

import { NewsService } from '../../services/news.service';

import { Album } from '../../models/news';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.scss' ]
})
export class GalleryComponent implements OnInit {

  public albums: Album[];

  constructor(
    private router: Router,
    private news: NewsService
  ) { }

  ngOnInit() {
    $(document).ready(() => {
      this.setAlbumHeight();

      $(window).resize(() => {
        this.setAlbumHeight();
      });
    });

    this.getAlbums();
  }

  public setAlbumHeight(): void {
    const albums: any = $('.album');

    if (albums.length) {
      const width: number = $(albums[0]).width();
      $(albums).height(width);
    }
  }

  public getAlbums(): void {
    this.albums = this.news.getAlbums();
    console.log(this.albums);
  }

  public goToAlbum(id: number): void {
    this.router.navigate([ 'album', id ]);
  }

}
