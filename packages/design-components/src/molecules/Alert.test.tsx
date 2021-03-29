import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  it('should pass a simple a11y test', async () => {
    const { container } = render(
      <Alert message="alert message" />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
