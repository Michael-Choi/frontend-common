import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react'
import { StyledLayout } from '..';

describe('StyledLayout', () => {
    it('should pass a simple a11y test', async () => {
        const { container } = render(
            <StyledLayout>
                <div>
                    <p>Hello, world!</p>
                </div>
            </StyledLayout>
        )

        const results = await axe(container)
        expect(results).toHaveNoViolations();
    })
})