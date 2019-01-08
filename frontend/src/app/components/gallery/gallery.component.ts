import { Component, OnInit } from '@angular/core';

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
    this.getAlbums();
  }

  public getAlbums(): void {
    this.content.getAlbums()
      .subscribe((response: Album[]) => this.albums = response);
  }

}
