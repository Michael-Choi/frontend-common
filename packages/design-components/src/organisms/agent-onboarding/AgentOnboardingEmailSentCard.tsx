import React from 'react';

import { Typography } from 'antd'
import { CenterTextWrapper, FocusedCard, Spacer } from '../../molecules';

import { SVGSuccessLetterIcon } from './private/SVGSuccessLetterIcon';

const { Text, Title, Link } = Typography;

export type AgentOnboardingEmailSentCardProps = {}

export const AgentOnboardingEmailSentCard: React.FC<AgentOnboardingEmailSentCardProps> = () => {
  return (
    <FocusedCard>
      <CenterTextWrapper>
        <Title level={3}>Email sent!</Title>
        <Spacer />
        <SVGSuccessLetterIcon />
        <Spacer />
        <Text strong>
          A member of our sales team will be in touch with your shortly.
        </Text>
        <Spacer />
        <Link>Return to log in</Link>
      </CenterTextWrapper>
    </FocusedCard>
  );
};