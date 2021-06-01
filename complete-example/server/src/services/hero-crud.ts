import { MOCK_HEROES, Hero } from '../model/hero';

class HeroService {
  private heroes: Hero[];
  constructor(heroes: Hero[]) {
    // because we did not want to override default heroes
    this.heroes = [...heroes];
  }

  getHeroById(id: number): Hero {
    const hero = this.heroes.find(h => h.id === id);
    if(!hero) {
      throw new Error('Hero not found exception');
    }
    return hero;
  }

  getAll(): Hero[] {
    return this.heroes;
  }
 
  addHero(hero: Partial<Hero>): Hero {
    // noobs way to generate uniq Id, not the most effective one TBH
    const id = this.heroes.map(h => h.id).reduce((v, acc) => v > acc ? v : acc ,0) + 1;
    // noobs validation
    if (hero.name && hero.power) {
      const newHero = {
      name: hero.name,
      power: hero.power,
      id
    };
      this.heroes = [...this.heroes, newHero];
      return newHero;
    } else {
      throw Error('Bad request');
    }
  }
}

export default new HeroService(MOCK_HEROES);