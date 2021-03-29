import React from "react";

import { Story } from '@storybook/react/types-6-0';
import { AgentOnboardingEmailSentCard, CenterWrapper, FocusedLayout } from '@brokerbay/design-components'

// FIXME: move this into preview.js or something better
import "../../antd.less";

export default {
  title: "organisims/AgentOnboarding/AgentOnboardingEmailSentCard",
  component: AgentOnboardingEmailSentCard,
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

export const Default = () => (
    <AgentOnboardingEmailSentCard />
);
