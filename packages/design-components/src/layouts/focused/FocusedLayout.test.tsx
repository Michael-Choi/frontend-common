import React from 'react';
import { axe } from 'jest-axe';
import { render } from '@testing-library/react'
import { FocusedLayout } from '.';

describe('FocusedLayout', () => {
    it('should pass a simple a11y test', async () => {
        const { container } = render(
            <FocusedLayout>
                <div>
                    <p>Hello, world!</p>
                </div>
            </FocusedLayout>
        )

        const results = await axe(container)
        expect(results).toHaveNoViolations();
    })
})