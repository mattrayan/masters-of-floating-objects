export class About {
  description: string;
}

export class JoinDescription {
  description: string;
}

export class News {
  id: number;
  title: string;
  image: string;
  body: string;
  published: Date;
}

export class Profile {
  first_name: string;
  last_initial: string;
  image: string;
  paddle: 'right' | 'left';
  joined: number;
  active: boolean;
  captain: boolean;
  coach: boolean;
  admin: boolean;
}

export class Picture {
  url: string;
  description: string;
}

export class Album {
  id: number;
  title: string;
  cover: string;
  pictures: Picture[];
}
