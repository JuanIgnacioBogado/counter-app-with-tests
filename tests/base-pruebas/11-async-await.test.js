import { getImagen } from '../../src/base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
  test('debe retornar una url de un gif', async () => {
    try {
      const url = await getImagen();
      expect(typeof url).toBe('string');
    } catch (error) {
      expect(error).toBe('No se encontró la imagen');
    }
  });
});
