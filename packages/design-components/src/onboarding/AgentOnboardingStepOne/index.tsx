import React from 'react';
import { Form, Input, Progress } from 'antd';

import { SVGBankIcon } from './SVGBankIcon';

import { StyledLayout } from '../../StyledLayout';
import { StyledButton, StyledCard, StyledForm, StyledTitle } from './styles';

export type AgentOnboardingStepOneProps = {
  onSubmit?: (arg0: { memberId: string }) => void;
};

export const AgentOnboardingStepOne = (props: AgentOnboardingStepOneProps) => {
  const { onSubmit } = props;

  const handleOnFinished = (values: any) => {
    onSubmit?.(values);
  };

  return (
    <StyledLayout>
      <StyledCard>
        <SVGBankIcon />
        <StyledTitle level={3}>
          What is your board member number or ID?
        </StyledTitle>

        <StyledForm onFinish={handleOnFinished}>
          <Form.Item name="memberId">
            <Input
              placeholder="Enter Member Number or ID"
              type="text"
              required
              size="large"
            />
          </Form.Item>
          <StyledButton type="primary" htmlType="submit" size="large">
            Next
          </StyledButton>

          <Progress percent={(1 / 3) * 100} showInfo={false} />
        </StyledForm>
      </StyledCard>
    </StyledLayout>
  );
};
