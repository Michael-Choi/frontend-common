import React from 'react';

import { Button, Progress } from 'antd';
import { Alert, CenterWrapper, FocusedCard, Spacer } from '../../molecules';

import { AgentOnboardingCardHeader } from './private/AgentOnboardingCardHeader';
import { AgentOnboardingMemberIdForm } from './private/AgentOnboardingMemberIdForm';
import { SVGBrokerageIcon } from './private/SVGBrokerageIcon';

type DeactivatedErrorType = {
  type: 'deactivated';
};

type AccountExistsErrorType = {
  type: 'accountExists';
  info: {
      emailAddress: string;
  };
};

type ErrorType = AccountExistsErrorType | DeactivatedErrorType;

export type AgentOnboardingMemberInputCardProps = {
  emailSent?: { emailAddress: string; };
  error?: ErrorType;
  onSubmitMemberId: (data: any) => void;
};

export const AgentOnboardingMemberInputCard: React.FC<AgentOnboardingMemberInputCardProps> = props => {
  const { emailSent, error, onSubmitMemberId } = props;
  let title;
  let alert;
  let nextButton;

  if (error?.type === 'deactivated') {
    title = 'You already have an account';
    alert = (
      <Alert
        type="warning"
        showIcon
        message={`
          The account associated with this member ID appears to be
          deactivated. Please contact your office for assistance.
        `}
      />
    );

    nextButton = (
      <Button block type="primary">
        Back to login
      </Button>
    );
  } else if (error?.type === 'accountExists') {
    title = 'You already have an account';
    alert = (
      <Alert
        type="warning"
        showIcon
        message={
          <>
            This member number / ID already appears to have an active BrokerBay
            account with <b>{error.info}</b>. Try logging in or contact your
            office for assisstance.
          </>
        }
      />
    );
    nextButton = (
      <Button block type="primary">
        Back to login
      </Button>
    );
  } else if (emailSent) {
    title = <>Check your email</>;
    alert = (
      <Alert
        type="info"
        showIcon
        message={
          <>
            A verification email has been sent to {emailSent.emailAddress}.
            Please click the link in the email to continue.
          </>
        }
      />
    );
    nextButton = (
      <Button block type="primary">
        Resend Verification
      </Button>
    );
  } else {
    title = <>What is your board member number or ID?</>;
  }

  return (
    <FocusedCard>
      <AgentOnboardingCardHeader icon={<SVGBrokerageIcon />} title={title} />
      {alert && (
        <>
          {alert}
          <Spacer />
        </>
      )}

      <AgentOnboardingMemberIdForm
        onSubmit={!error && !emailSent && onSubmitMemberId || undefined}
        nextButton={nextButton}
      />

      <CenterWrapper style={{ padding: '0 25%' }}>
        <Progress percent={30} size="small" showInfo={false} />
      </CenterWrapper>
    </FocusedCard>
  );
};
