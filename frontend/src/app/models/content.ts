export class About {
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
  active: boolean;
  captain: boolean;
  coach: boolean;
  admin: boolean;
}
