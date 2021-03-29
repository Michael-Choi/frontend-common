import React from 'react';

import { Button, Form, Input } from 'antd'

export type AgentOnboardingMemberIdFormProps = {
    onSubmit?: (data: any) => void;
    nextButton?: React.ReactNode;
}

export const AgentOnboardingMemberIdForm: React.FC<AgentOnboardingMemberIdFormProps> = (props) => {
  const { onSubmit, nextButton } = props;

  return (
    <Form name="agentOnboardingMemberIdForm" onFinish={onSubmit}>
      <Form.Item name="member_id" rules={[{ required: true }]}>
        <Input placeholder="Enter Member ID" disabled={!onSubmit} />
      </Form.Item>
      <Form.Item>
        {onSubmit && (
          <Button block type="primary" htmlType="submit">
            Next
          </Button>
        )}
        {nextButton}
      </Form.Item>
    </Form>
  );
};
