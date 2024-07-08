import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import GridCRUD from './grid-crud';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders GridCRUD component', () => {
  const wrapper = render(<GridCRUD />);
  expect(wrapper).toBeTruthy();
});