import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { NewsItem } from '../models/news';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

  public getNews(): NewsItem[] {
    return [
      {
        image: '/assets/images/news_preview_temp_1.jpg',
        title: 'Title 1',
        published: 'Jan 1, 2018',
        summary: 'Fusce sit amet arcu non velit tempor varius. Morbi hendrerit quam eu imperdiet pellentesque. Aenean sit amet neque a leo.',
        full: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a elit in odio volutpat convallis facilisis eget nisi. Donec non quam risus. Vestibulum sit amet dolor urna. Aenean porta vehicula imperdiet. Aliquam rhoncus orci vel dui tristique placerat. Etiam tincidunt egestas vehicula. In hac habitasse platea dictumst. Maecenas sit amet dolor commodo, tempus velit et, feugiat turpis. Suspendisse sed laoreet eros, non vehicula quam. Vestibulum finibus sem ut quam molestie eleifend. Mauris volutpat, eros vitae lobortis ultrices, ex nunc vulputate velit, ut auctor libero magna sed erat. Etiam ac posuere metus. Suspendisse malesuada turpis et nunc aliquet, at sodales enim euismod. Aliquam quis nisl velit. Fusce et ex sollicitudin, elementum ante non, rhoncus nunc. Curabitur at urna et lectus efficitur sagittis nec et mi.'
      },
      {
        image: '/assets/images/news_preview_temp_2.jpg',
        title: 'Title 2',
        published: 'Jan 2, 2018',
        summary: 'Mauris libero leo, blandit non consequat et, malesuada vitae dui. Quisque ac sem et mauris lacinia suscipit. Phasellus tristique risus.',
        full: 'Cras vitae nisi id augue varius luctus nec id ante. Duis venenatis commodo feugiat. Nam quis cursus nibh, a commodo lectus. Aliquam erat volutpat. Praesent nibh felis, ornare et metus nec, rhoncus mattis leo. Cras finibus mi sed rhoncus tempor. Aenean feugiat blandit felis a vehicula. Sed bibendum tempus accumsan.'
      },
      {
        image: '/assets/images/news_preview_temp_3.jpg',
        title: 'Title 3',
        published: 'Jan 3, 2018',
        summary: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent consequat ut erat in sollicitudin. Vestibulum dictum, justo at.',
        full: 'Maecenas id egestas erat. Mauris luctus cursus massa vitae ultrices. Nullam quis dolor vulputate, tincidunt dolor vel, dapibus ipsum. Donec rhoncus orci vel risus egestas, laoreet efficitur lacus semper. Pellentesque tincidunt egestas tincidunt. Nullam lobortis placerat porta. Vivamus interdum ante nec lacinia facilisis. Fusce quis leo a felis laoreet ultrices. Morbi ornare enim a dui accumsan maximus. Donec rutrum sit amet massa eu sagittis. Phasellus tincidunt ultricies sollicitudin. Sed sem quam, interdum quis est vel, rutrum scelerisque urna. Donec vel viverra elit. Nullam imperdiet faucibus ligula sed pellentesque.'
      }
    ];
  }
}
