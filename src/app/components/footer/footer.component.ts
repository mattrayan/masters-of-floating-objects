import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {

  public year: number = (new Date()).getFullYear();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToRoute(route: string): void {
    this.router.navigate([ route ]);
  }

}
