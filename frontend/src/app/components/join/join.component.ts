import { Component, OnInit } from '@angular/core';

import { JoinData } from '../../models/join';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: [ './join.component.scss' ]
})
export class JoinComponent implements OnInit {

  public joinData: JoinData = new JoinData();
  public genders: string[] = [ 'male', 'female' ];
  public experience: number[] = new Array(11).fill(0).map((x, i) => i);
  public preferences: string[] = [ 'none', 'left', 'right', 'drummer', 'cox' ];

  constructor() { }

  ngOnInit() {
  }

}
