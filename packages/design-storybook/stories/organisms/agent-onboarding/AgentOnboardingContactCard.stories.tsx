import React from "react";

import { Story } from '@storybook/react/types-6-0';
import { AgentOnboardingContactCard, CenterWrapper, FocusedLayout } from '@brokerbay/design-components'

// FIXME: move this into preview.js or something better
import "../../antd.less";

export default {
  title: "organisims/AgentOnboarding/AgentOnboardingContactCard",
  component: AgentOnboardingContactCard,
  decorators: [
      (Story: Story) => (
          <FocusedLayout>
              <CenterWrapper>
                <Story />
              </CenterWrapper>
          </FocusedLayout>
      )
  ]
};

const noop = () => {};

export const NoBrokerage = () => (
    <AgentOnboardingContactCard noBrokerage onContactSales={noop} />
);

export const NoMemberId  = () => (
    <AgentOnboardingContactCard noMemberId onContactSales={noop} />
);
