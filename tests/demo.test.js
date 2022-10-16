describe('Pruebas en <DemoComponent />', () => {
  test('esta prueba no debe de fallar', () => {
    const message1 = 'hola mundo';

    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});
