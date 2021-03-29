import React from "react";

import { Story } from '@storybook/react/types-6-0';
import { AgentOnboardingMemberInputCard, CenterWrapper, FocusedLayout } from '@brokerbay/design-components'

// FIXME: move this into preview.js or something better
import "../../antd.less";

export default {
  title: "organisims/AgentOnboarding/AgentOnboardingMemberInputCard",
  component: AgentOnboardingMemberInputCard,
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
    <AgentOnboardingMemberInputCard onSubmitMemberId={() => {}} />
);

export const EmailSent = () => (
    <AgentOnboardingMemberInputCard emailSent={{ emailAddress: 'user@example.org' }} onSubmitMemberId={() => {}} />
);

export const DeactivatedAccountError = () => (
    <AgentOnboardingMemberInputCard error={{ type: 'deactivated' }} onSubmitMemberId={() => {}} />
);

export const AccountExistsError = () => (
    <AgentOnboardingMemberInputCard error={{ type: 'accountExists', info: 'Name of Existing Account'}} onSubmitMemberId={() => {}} />
);
