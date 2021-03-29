import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { AgentOnboardingEmailSentCard } from './AgentOnboardingEmailSentCard';

describe('AgentOnboardingEmailSentCard', () => {
  it('should pass a simple a11y test', async () => {
    const { container } = render(
      <AgentOnboardingEmailSentCard />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
