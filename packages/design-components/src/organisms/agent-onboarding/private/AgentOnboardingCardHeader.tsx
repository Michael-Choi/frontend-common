import React from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { CenterTextWrapper } from '../../../molecules'

const { Title } = Typography;

export type AgentOnboardingCardHeaderProps = {
    icon?: React.ReactNode;
    title: React.ReactNode;
}

export const AgentOnboardingCardHeader: React.FC<AgentOnboardingCardHeaderProps> = (props) => {
  const { icon, title } = props;

  return (
    <Row wrap={false}>
      <Col style={{ width: 30 }}>
        <Button
          icon={<ArrowLeftOutlined />}
          type="text"
          style={{ width: "inherit", paddingLeft: 0 }}
        />
      </Col>
      <Col flex={1}>
        <CenterTextWrapper>
          {icon}
          <Title level={3} style={{ marginTop: 5 }}>{title}</Title>
        </CenterTextWrapper>
      </Col>
      <Col style={{ width: 30 }} />
    </Row>
  );
};