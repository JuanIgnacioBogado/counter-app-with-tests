import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp', () => {
  const value = 10;

  test('debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={100} />);
    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain(
      '100'
    );
  });

  test('debe de incrementar con el boton +1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'));

    expect(screen.getByText(11)).toBeTruthy();
  });

  test('debe de decrementar con el boton -1', () => {
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'));

    expect(screen.getByText(9)).toBeTruthy();
  });

  test('debe de funcionar el boton de reset', () => {
    render(<CounterApp value={value} />);

    fireEvent.click(screen.getByLabelText('btn-add'));
    fireEvent.click(screen.getByLabelText('btn-add'));
    fireEvent.click(screen.getByLabelText('btn-add'));

    fireEvent.click(screen.getByLabelText('btn-reset'));
    expect(screen.getByText(value)).toBeTruthy();
  });
});
