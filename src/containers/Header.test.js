import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Header renders correctly', () => {
  act(() => {
    render(<Header />, container);
  });

  expect(container.innerHTML).toBe('<header><img src="logo.png" id="logo" alt="logo"></header>');
});
