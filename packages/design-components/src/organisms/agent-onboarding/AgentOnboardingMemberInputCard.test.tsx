import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react';
import { AgentOnboardingMemberInputCard } from './AgentOnboardingMemberInputCard';

describe('AgentOnboardingEmailSentCard', () => {
  it('should pass a simple a11y test', async () => {
    const { container } = render(
      <AgentOnboardingMemberInputCard onSubmitMemberId={jest.fn()} />
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
