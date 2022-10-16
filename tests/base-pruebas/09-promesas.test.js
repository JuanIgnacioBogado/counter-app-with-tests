import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un heroe', done => {
    getHeroeByIdAsync(1).then(hero => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      });
      done();
    });
  });

  test('getHeroeByIdAsync debe obtener un error si no existe heroe', done => {
    const id = 10;
    getHeroeByIdAsync(id)
      .then(hero => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch(message => {
        expect(message).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });
});
