import Express from 'express';
import HeroService from './services/hero-crud'
export const heroRouter = Express();

heroRouter.get('/', (req, res) => {
  res.json(HeroService.getAll());
});

heroRouter.get('/:id', (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  try {
    const hero = HeroService.getHeroById(id);
    res.json(hero);
  } catch(error) {
    if(error.message === 'Hero not found exception') {
      res.status(404);
    } else {
      res.status(500);
    }
  }
});
