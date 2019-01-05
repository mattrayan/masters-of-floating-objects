import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';
import { ContentService } from '../../services/content.service';

import { Join } from '../../models/contact';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: [ './join.component.scss' ]
})
export class JoinComponent implements OnInit {

  public JoinDescription: string = '';
  public join: Join = new Join();
  public genders: string[] = [ 'male', 'female' ];
  public experience: number[] = new Array(11).fill(0).map((x, i) => i);
  public preferences: string[] = [ 'none', 'left', 'right', 'drummer', 'cox' ];

  constructor(
    private contact: ContactService,
    private content: ContentService
  ) { }

  ngOnInit() {
    this.content.getJoinDescription()
      .subscribe((result: string) => this.JoinDescription = result);
  }

  public sendJoin(): void {
    if (!this.join.email) {
      return;
    }

    this.join.processing = true;

    this.contact.join(this.join)
      .finally(() => this.join.processing = false)
      .subscribe((result: Join) => this.join.sent = true)
  }

}
