import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe retornar un objeto', () => {
    const testUser = {
      nombreClave: 'Porfirio',
      anios: 24,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    };

    const user = usContext({ clave: 'Porfirio', edad: 24 });

    expect(user).toEqual(testUser);
  });
});
