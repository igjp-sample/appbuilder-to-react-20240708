import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Stteper from './stteper';
import 'element-internals-polyfill';

test('renders Stteper component', () => {
  const wrapper = render(<Stteper />);
  expect(wrapper).toBeTruthy();
});