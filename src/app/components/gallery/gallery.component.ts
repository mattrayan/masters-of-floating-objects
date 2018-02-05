import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

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
    this.getAlbums();
  }

  public getAlbums(): void {
    this.albums = this.news.getAlbums();
    console.log(this.albums);
  }

  public goToAlbum(id: number): void {
    this.router.navigate([ 'album', id ]);
  }

}
