import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpXsrfInterceptor } from './interceptors/http.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AlbumComponent } from './components/album/album.component';
import { JoinComponent } from './components/join/join.component';
import { TeamComponent } from './components/team/team.component';
import { TeamProfilesComponent } from './components/team-profiles/team-profiles.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

import { CacheService } from './services/cache.service';
import { ContactService } from './services/contact.service';
import { ContentService } from './services/content.service';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { StripHtmlPipe } from './pipes/strip-html.pipe';

const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'news', component: NewsComponent, pathMatch: 'full' },
  { path: 'news/:id', component: NewsItemComponent, pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent, pathMatch: 'full' },
  { path: 'album/:id', component: AlbumComponent, pathMatch: 'full' },
  { path: 'join', component: JoinComponent, pathMatch: 'full' },
  { path: 'team', component: TeamComponent, pathMatch: 'full' },
  { path: 'team/roster', component: TeamProfilesComponent, pathMatch: 'full' },
  { path: 'team/alumni', component: TeamProfilesComponent, pathMatch: 'full' },
  { path: 'schedule', component: ScheduleComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    NewsItemComponent,
    GalleryComponent,
    AlbumComponent,
    JoinComponent,
    TeamComponent,
    TeamProfilesComponent,
    ScheduleComponent,
    CapitalizePipe,
    TruncatePipe,
    StripHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'csrftoken', headerName: 'X-CSRFToken' }),
    RouterModule.forRoot(routes),
    NgbCarouselModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true },
    CacheService,
    ContactService,
    ContentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
