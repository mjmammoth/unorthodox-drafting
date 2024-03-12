export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  legs: number;
  img: string;
}

export interface HeroCard {
  hero: Hero;
}
