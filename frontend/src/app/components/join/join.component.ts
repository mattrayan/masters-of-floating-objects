import { Component, OnInit } from '@angular/core';

import { ContactService } from '../../services/contact.service';

import { Join } from '../../models/contact';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: [ './join.component.scss' ]
})
export class JoinComponent implements OnInit {

  public join: Join = new Join();
  public genders: string[] = [ 'male', 'female' ];
  public experience: number[] = new Array(11).fill(0).map((x, i) => i);
  public preferences: string[] = [ 'none', 'left', 'right', 'drummer', 'cox' ];

  constructor(private contact: ContactService) { }

  ngOnInit() {
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
