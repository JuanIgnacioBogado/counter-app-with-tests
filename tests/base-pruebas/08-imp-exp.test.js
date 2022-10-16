import {
  getHeroeById,
  getHeroesByOwner
} from '../../src/base-pruebas/08-imp-exp';

import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  const heroeMock = {
    id: 1,
    name: 'Batman',
    owner: 'DC'
  };

  test('getHeroeById debe retornar un heroe por id', () => {
    const hero = getHeroeById(1);

    expect(hero).toEqual(heroeMock);
  });

  test('getHeroeById debe retornar undefined si no existe', () => {
    const hero = getHeroeById(40);

    expect(hero).toBeFalsy();
  });

  test('getHeroesByOwner debería retornar un array con 3 elementos con heroes de DC', () => {
    const owner = 'DC'
    const heroByOwner = getHeroesByOwner(owner);
    const dcHeroes = heroes.filter(hero => hero.owner === owner)

    expect(heroByOwner).toHaveLength(3);
    expect(heroByOwner).toEqual(dcHeroes);
  });

  test('getHeroesByOwner debería retornar un array con 2 elementos', () => {
    const owner = 'Marvel';
    const heroByOwner = getHeroesByOwner(owner);
    const marvelHeroes = heroes.filter(hero => hero.owner === owner);

    expect(heroByOwner).toHaveLength(2);
    expect(heroByOwner).toEqual(marvelHeroes);
  });
});
