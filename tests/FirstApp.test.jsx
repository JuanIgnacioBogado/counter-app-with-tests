import { render /*  screen */ } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en FirstApp', () => {
  // test('debe de hacer match con el snapshot', () => {
  //   const title = 'Hola soy Goku';
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test('debe de mostrar el titulo en un h1', () => {
    const title = 'Hola soy goku';
    const { getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();
    // otra forma de hacerlo
    // expect(screen.getByText(title)).toBeTruthy();

    expect(getByTestId('test-title').innerHTML).toContain(title);

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
  });

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hola soy Goku';
    const subtitle = 'Soy un subtitulo';
    const { getAllByText } = render(<FirstApp {...{ title, subtitle }} />);

    expect(getAllByText(subtitle)).toHaveLength(2);
  });
});
