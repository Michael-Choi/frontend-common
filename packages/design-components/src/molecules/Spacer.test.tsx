import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { Spacer } from './Spacer';

describe('Spacer', () => {
  it('should pass a simple a11y test', async () => {
    const { container } = render(
      <Spacer />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

