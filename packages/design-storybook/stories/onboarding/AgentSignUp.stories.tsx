import React from "react";

import './antd.less';

import { AgentOnboardingStepOne } from '@brokerbay/design-components'


export default {
  title: "Onboarding/Agent Sign Up",
  component: AgentOnboardingStepOne,
};

export const SearchForOrgs = () => <AgentOnboardingStepOne />;

export const SendVerificationEmail = () => <AgentOnboardingStepOne />;

export const UserIsDeactivated = () => <AgentOnboardingStepOne />;

export const AlreadyLoggedIn = () => <AgentOnboardingStepOne />;

export const NoUserWithRoster = () => <AgentOnboardingStepOne />;

export const NoUserOrRoster = () => <AgentOnboardingStepOne />;
