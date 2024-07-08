import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import LoginSuccess from './login-success';
import 'element-internals-polyfill';

test('renders LoginSuccess component', () => {
  const wrapper = render(<LoginSuccess />, { wrapper: MemoryRouter });
  expect(wrapper).toBeTruthy();
});