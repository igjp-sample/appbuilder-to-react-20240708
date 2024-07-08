import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Card from './card';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders Card component', () => {
  const wrapper = render(<Card />);
  expect(wrapper).toBeTruthy();
});