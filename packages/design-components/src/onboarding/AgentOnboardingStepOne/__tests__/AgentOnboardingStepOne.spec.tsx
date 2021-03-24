import React from 'react';
import { axe } from 'jest-axe';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { AgentOnboardingStepOne } from '..';

describe('StyledLayout', () => {
  it('should pass a simple a11y test', async () => {
    const { container } = render(<AgentOnboardingStepOne />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('clicking Next calls the submit prop', async () => {
    const handleOnSubmit = jest.fn();

    render(<AgentOnboardingStepOne onSubmit={handleOnSubmit} />);

    const input = screen.getByPlaceholderText('Enter Member Number or ID');

    fireEvent.change(input, { target: { value: '12345' } });
    fireEvent.click(screen.getByText('Next'));

    await waitFor(() =>
      expect(handleOnSubmit).toHaveBeenCalledWith({ memberId: '12345' })
    );
  });
});
