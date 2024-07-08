import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Login from './login';
import 'element-internals-polyfill';

test('renders Login component', () => {
  const wrapper = render(<Login />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});