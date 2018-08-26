export class JoinData {
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  gender: 'male' | 'female' = 'male';
  age: number;
  paddling_experience: number = 0;
  previous_teams: string = '';
  paddling_preference: 'none' | 'left' | 'right' | 'drummer' | 'cox' = 'none';
  weight: string = '';
  height: string = '';
  max_bench_press: string = '';
  max_number_chinups: string = '';
  five_km_jog_time: string = '';
  comments: string = '';
}
