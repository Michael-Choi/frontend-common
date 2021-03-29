import React from 'react';
import { Button, Form, Input, Select } from 'antd';

type AgentRequestOnboardingFormData = {
    fname: string;
    lname: string;
    email: string;
    mobile_number: string;
    title: string;
    agent_count: number;
    current_boards: string;
    current_provider: any;
}

export type AgentRequestOnboardingFormProps = {
    onSubmit: (data: AgentRequestOnboardingFormData) => void;
}

export const AgentRequestOnboardingForm: React.FC<AgentRequestOnboardingFormProps> = (props) => {
  const { onSubmit } = props;

  return (
    <Form name="agentRequestOnboardingForm" onFinish={onSubmit}>
      <Form.Item>
        <Input.Group compact>
          <Form.Item noStyle name="fname" rules={[{ required: true }]}>
            <Input style={{ width: "50%" }} placeholder="First Name" />
          </Form.Item>
          <Form.Item noStyle name="lname" rules={[{ required: true }]}>
            <Input
              style={{ width: "calc(50% - 10px)", marginLeft: 10 }}
              placeholder="Last Name"
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item name="email" rules={[{ type: "email", required: true }]}>
        <Input placeholder="E-mail" />
      </Form.Item>
      <Form.Item>
        <Input.Group compact>
          <Form.Item noStyle name="mobile_number" rules={[{ required: true }]}>
            <Input style={{ width: "50%" }} placeholder="Mobile Number" />
          </Form.Item>
          <Form.Item noStyle name="office_number" rules={[{ required: true }]}>
            <Input
              style={{ width: "calc(50% - 10px)", marginLeft: 10 }}
              placeholder="Office Number"
            />
          </Form.Item>
        </Input.Group>
      </Form.Item>
      <Form.Item name="brokerage_name">
        <Input placeholder="Brokerage Name" />
      </Form.Item>
      <Form.Item name="title">
        <Input placeholder="Title" />
      </Form.Item>
      <Form.Item name="agent_count">
        <Input placeholder="Number of Agents" />
      </Form.Item>
      <Form.Item name="current_boards">
        <Input placeholder="What boards are you a part of?" />
      </Form.Item>
      <Form.Item name="current_provider" id="AgentRequestOnboardingForm_current_provider">
        <Select placeholder="Select existing provider" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Contact Sales
        </Button>
      </Form.Item>
    </Form>
  );
};