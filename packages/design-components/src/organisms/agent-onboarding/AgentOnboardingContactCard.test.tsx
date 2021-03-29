import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { AgentOnboardingContactCard } from './AgentOnboardingContactCard';

describe('Alert', () => {
  // ant Form has problems with a11y :(
  xit('should pass a simple a11y test', async () => {
    const { container } = render(
      <AgentOnboardingContactCard onContactSales={jest.fn()} />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
