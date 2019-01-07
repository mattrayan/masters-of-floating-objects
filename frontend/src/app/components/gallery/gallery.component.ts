import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { ContentService } from '../../services/content.service';

import { Album } from '../../models/content';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: [ './gallery.component.scss' ]
})
export class GalleryComponent implements OnInit {

  public albums: Album[];

  constructor(private content: ContentService) { }

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
    this.content.getAlbums()
      .subscribe((response: Album[]) => this.albums = response);
  }

}
