import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { NewsItem, Picture } from '../models/news';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

  public getNews(): NewsItem[] {
    return [
      {
        id: 1,
        image: '/assets/images/news_preview_temp_1.jpg',
        title: 'Vivamus et Vestibulum Dolor',
        published: 'Jan 1, 2018',
        summary: 'Fusce sit amet arcu non velit tempor varius. Morbi hendrerit quam eu imperdiet pellentesque. Aenean sit amet neque a leo.',
        full: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a elit in odio volutpat convallis facilisis eget nisi. Donec non quam risus. Vestibulum sit amet dolor urna. Aenean porta vehicula imperdiet. Aliquam rhoncus orci vel dui tristique placerat. Etiam tincidunt egestas vehicula. In hac habitasse platea dictumst. Maecenas sit amet dolor commodo, tempus velit et, feugiat turpis. Suspendisse sed laoreet eros, non vehicula quam. Vestibulum finibus sem ut quam molestie eleifend. Mauris volutpat, eros vitae lobortis ultrices, ex nunc vulputate velit, ut auctor libero magna sed erat. Etiam ac posuere metus. Suspendisse malesuada turpis et nunc aliquet, at sodales enim euismod. Aliquam quis nisl velit. Fusce et ex sollicitudin, elementum ante non, rhoncus nunc. Curabitur at urna et lectus efficitur sagittis nec et mi.'
      },
      {
        id: 2,
        image: '/assets/images/news_preview_temp_2.jpg',
        title: 'Duis Interdum Felis Eget',
        published: 'Jan 2, 2018',
        summary: 'Mauris libero leo, blandit non consequat et, malesuada vitae dui. Quisque ac sem et mauris lacinia suscipit. Phasellus tristique risus.',
        full: 'Cras vitae nisi id augue varius luctus nec id ante. Duis venenatis commodo feugiat. Nam quis cursus nibh, a commodo lectus. Aliquam erat volutpat. Praesent nibh felis, ornare et metus nec, rhoncus mattis leo. Cras finibus mi sed rhoncus tempor. Aenean feugiat blandit felis a vehicula. Sed bibendum tempus accumsan.'
      },
      {
        id: 3,
        image: '/assets/images/news_preview_temp_3.jpg',
        title: 'Aliquam Non Ligula Eget',
        published: 'Jan 3, 2018',
        summary: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent consequat ut erat in sollicitudin. Vestibulum dictum, justo at.',
        full: 'Maecenas id egestas erat. Mauris luctus cursus massa vitae ultrices. Nullam quis dolor vulputate, tincidunt dolor vel, dapibus ipsum. Donec rhoncus orci vel risus egestas, laoreet efficitur lacus semper. Pellentesque tincidunt egestas tincidunt. Nullam lobortis placerat porta. Vivamus interdum ante nec lacinia facilisis. Fusce quis leo a felis laoreet ultrices. Morbi ornare enim a dui accumsan maximus. Donec rutrum sit amet massa eu sagittis. Phasellus tincidunt ultricies sollicitudin. Sed sem quam, interdum quis est vel, rutrum scelerisque urna. Donec vel viverra elit. Nullam imperdiet faucibus ligula sed pellentesque.'
      },
      {
        id: 4,
        image: '/assets/images/news_preview_temp_4.jpg',
        title: 'Lorem Ipsum Dolor Sit',
        published: 'Jan 4, 2018',
        summary: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent consequat ut erat in sollicitudin. Vestibulum dictum, justo at.',
        full: 'Donec sed quam sit amet libero tempor semper a accumsan sapien. Vestibulum ut risus ut enim ullamcorper tincidunt. Maecenas bibendum auctor turpis in porttitor. Donec tristique, turpis et elementum congue, elit nisl consequat mi, sed dictum arcu urna sed lorem. Duis porta elementum justo quis ullamcorper. Mauris massa velit, dictum sed nibh eget, lacinia efficitur ex. Nulla ullamcorper dignissim lacinia. Vivamus accumsan varius iaculis. Suspendisse varius fermentum neque, eu commodo nulla luctus eu. Sed ligula quam, tempus ut nisi non, tempus vestibulum ante.'
      },
      {
        id: 5,
        image: '/assets/images/news_preview_temp_5.jpg',
        title: 'Donec Interdum Nisl Nisi',
        published: 'Jan 5, 2018',
        summary: 'Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent consequat ut erat in sollicitudin. Vestibulum dictum, justo at.',
        full: 'Donec in diam ipsum. Aenean sodales velit id orci molestie maximus. Nulla nec nunc vulputate, gravida enim in, volutpat arcu. Praesent at suscipit turpis, nec dignissim felis. Mauris convallis sapien vel felis lobortis, sit amet interdum enim iaculis. Curabitur ullamcorper sapien et ligula elementum aliquet sed id libero. Integer et varius erat. Praesent ac dictum libero.'
      }
    ];
  }

  public getNewsItem(id: number): NewsItem {
    return this.getNews().find(n => n.id === id);
  }

  public getPictures(): Picture[] {
    return [
      {
        url: '/assets/images/picture_preview_temp_1.jpg',
        title: 'Lorem ipsum dolor sit amet',
        caption: 'Aliquam erat volutpat. Sed gravida mi ut orci faucibus, a interdum libero dapibus. Nam consequat gravida ex nec sagittis. Ut a est sed sem malesuada mollis. In tempus turpis quis libero congue rhoncus. Pellentesque non tristique tellus. Integer nisi odio, cursus semper metus ut, dapibus ornare augue. Vivamus ac dignissim ex, ut sagittis justo. Proin tempor ullamcorper vehicula.',
        published: 'Jan 1, 2018'
      },
      {
        url: '/assets/images/picture_preview_temp_2.jpg',
        title: 'Sed sodales sapien vitae nulla',
        caption: 'Quisque varius ligula at sem dapibus eleifend. Nunc semper euismod nisl sit amet convallis. Cras tortor metus, suscipit quis turpis in, placerat ornare quam. Aenean et neque nec metus consectetur sagittis. Maecenas iaculis eget nulla vitae lobortis. Fusce a libero vitae est bibendum scelerisque. Pellentesque sed mi ipsum. Phasellus at aliquet metus. Morbi in libero id dolor maximus ullamcorper. Curabitur quis est ex.',
        published: 'Jan 2, 2018'
      },
      {
        url: '/assets/images/picture_preview_temp_3.jpg',
        title: 'Donec commodo eros malesuada felis',
        caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla sed est bibendum finibus. Nullam efficitur feugiat libero nec sollicitudin. Duis mattis lectus eu massa egestas faucibus. Etiam nec condimentum ex. Maecenas imperdiet eu nunc id efficitur. Quisque ultrices tincidunt pharetra. Duis tincidunt tellus non risus tristique ornare. Quisque maximus, augue in interdum luctus, sem diam commodo mi, id auctor enim ligula vitae justo. Duis venenatis consectetur tellus, ut laoreet felis. Aenean quam risus, egestas in pulvinar ut, ullamcorper sed ex. Phasellus eu fermentum enim. Aenean eu lacus enim. Morbi feugiat congue vehicula.',
        published: 'Jan 3, 2018'
      },
      {
        url: '/assets/images/picture_preview_temp_4.jpg',
        title: 'Vestibulum ante ipsum primis in',
        caption: 'Etiam ex metus, hendrerit quis posuere a, rutrum vel orci. Vivamus tincidunt leo sit amet justo convallis tempus. Donec a volutpat diam. Praesent eu consequat erat, ac hendrerit est. Nam non velit quis risus imperdiet convallis ut ac mauris. Integer enim sapien, convallis vitae sodales a, eleifend sed orci. Praesent iaculis dolor in lorem rhoncus consectetur.',
        published: 'Jan 4, 2018'
      },
      {
        url: '/assets/images/picture_preview_temp_5.jpg',
        title: 'Pellentesque habitant morbi tristique senectus',
        caption: 'In molestie eget nulla in lacinia. Proin in diam faucibus, blandit tellus eu, interdum sapien. Aenean a erat suscipit, laoreet lectus et, ultricies massa. Nunc massa mi, pellentesque in nisl sed, interdum fermentum elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut nec augue eu lorem tincidunt maximus quis non dolor. Donec viverra faucibus mauris lobortis mollis. Nulla facilisi. Suspendisse tincidunt vehicula massa, et lacinia odio pretium sed. Proin porta eu mi vel laoreet. Integer nec mauris pretium, hendrerit tellus vitae, elementum arcu. Sed accumsan felis non erat ornare fringilla. Praesent varius condimentum aliquam. Integer ullamcorper, risus ut elementum dignissim, massa massa ornare nisl, non iaculis dolor justo ut enim.',
        published: 'Jan 5, 2018'
      },
      {
        url: '/assets/images/picture_preview_temp_6.jpg',
        title: 'Nam id euismod est id',
        caption: 'Phasellus et ultrices ex, at tincidunt nisl. Nam euismod, lacus iaculis mollis scelerisque, ex odio aliquet neque, in vehicula massa nisi sit amet magna. Nullam eget neque ullamcorper sapien lobortis accumsan ut ut erat. Suspendisse mollis sem tortor, eget rhoncus turpis fermentum et. Donec vestibulum sagittis ex, id gravida ex mollis vitae. Aliquam at elit consectetur, ultricies augue quis, hendrerit erat. Aenean quis lacus in leo dignissim laoreet. Nam lacinia eros dapibus accumsan elementum. Nam non nunc sapien. Maecenas faucibus et risus ac aliquam.',
        published: 'Jan 6, 2018'
      },
      {
        url: '/assets/images/picture_preview_temp_7.jpg',
        title: 'Phasellus hendrerit luctus placerat',
        caption: 'Suspendisse porta, metus sit amet bibendum fermentum, velit ipsum molestie est, at volutpat lectus massa sit amet augue. Morbi non cursus nulla. Suspendisse at nisi sem. Nullam pellentesque quam mi, id mattis metus auctor bibendum. Suspendisse feugiat, orci non tempor auctor, massa odio sollicitudin ligula, et maximus ligula orci ut risus. Sed nec lacus tellus. Pellentesque mattis ex vitae maximus congue. Suspendisse lorem nunc, rhoncus nec tellus sit amet, auctor fringilla metus. Praesent ac leo augue. Aliquam erat arcu, iaculis et enim vitae, mattis scelerisque augue. Suspendisse nec risus ut nulla consequat lobortis. Suspendisse egestas laoreet leo vel posuere. Praesent porttitor sapien tortor.',
        published: 'Jan 7, 2018'
      },
      {
        url: '/assets/images/picture_preview_temp_8.jpg',
        title: 'Morbi tristique quam purus',
        caption: 'Praesent elit sapien, imperdiet sed nibh quis, dictum lobortis lacus. Duis sit amet arcu vel massa sollicitudin ornare. Suspendisse porta sapien dolor, vitae porttitor nibh viverra sit amet. In fringilla quis dui sed tincidunt. Curabitur sed placerat turpis. Donec tincidunt cursus tincidunt. Nulla in dictum dolor, sit amet accumsan sapien.',
        published: 'Jan 8, 2018'
      },
      {
        url: '/assets/images/picture_preview_temp_9.jpg',
        title: 'Integer viverra sodales interdum',
        caption: 'Pellentesque sed euismod mauris. Maecenas felis nibh, elementum eu libero eget, rhoncus lobortis metus. Proin quis sapien hendrerit, viverra dui non, auctor nisl. Vivamus sit amet bibendum justo. Mauris facilisis tellus auctor felis efficitur pulvinar. Vivamus dictum mi eget purus ornare, ac imperdiet orci facilisis. Aenean imperdiet dui ac ante sodales, vel porttitor elit mollis. Phasellus tincidunt, risus ac finibus placerat, risus ligula elementum neque, non dignissim risus turpis non lectus. Ut vulputate nulla vel ex elementum sodales. Aliquam commodo, ex et dictum lacinia, tellus sapien gravida mi, quis rhoncus sapien magna tincidunt nulla.',
        published: 'Jan 9, 2018'
      },
    ];
  }
}
