
import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react'
import { FocusedCard } from './FocusedCard';

describe('FocusedCard', () => {
    it('should pass a simple a11y test', async () => {
        const { container } = render(
            <FocusedCard>
                <div>
                    Content goes here
                </div>
            </FocusedCard>
        )

        const results = await axe(container)
        expect(results).toHaveNoViolations();
    })
})