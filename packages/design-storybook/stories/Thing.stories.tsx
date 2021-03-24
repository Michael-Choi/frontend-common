import React from 'react';

import { StyledLayout, Thing } from '@brokerbay/design-components';

export default {
  title: 'Components/Thing',
  component: Thing,
};

const Template = (args: any) => <StyledLayout><Thing {...args} /></StyledLayout>;

export const Default = Template.bind({});