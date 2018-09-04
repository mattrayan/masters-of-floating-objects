import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContentService } from '../../services/content.service';

import { News } from '../../models/content';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: [ './news-item.component.scss' ]
})
export class NewsItemComponent implements OnInit {

  public item: News;

  constructor(
    private activatedRoute: ActivatedRoute,
    private content: ContentService
  ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => {
      let id: number;

      if (url.length == 2) {
        id = parseInt(url[1].path);
        this.getNewsItem(id);
      }
    });
  }

  public getNewsItem(id: number): void {
    this.content.getNewsItem(id)
      .subscribe((result: News) => this.item = result);
  }

}
