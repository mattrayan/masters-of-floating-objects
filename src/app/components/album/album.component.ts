import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private news: NewsService
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      let id: number;

      if (url.length == 2) {
        id = parseInt(url[1].path);
        this.getAlbum(id);
      }
    });
  }

  public getAlbum(id: number): void {
    this.album = this.news.getAlbum(id);
    this.pictures = this.news.getAlbumPictures(id);
  }

}
