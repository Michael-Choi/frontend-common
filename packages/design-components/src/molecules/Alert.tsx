import React from 'react';
import styled from 'styled-components';
import { Alert as AntAlert, AlertProps as AntAlertProps } from 'antd';

export type AlertProps = AntAlertProps;

export const StyledAlert = styled((props: AntAlertProps) => (
  <AntAlert {...props} />
))`
  align-items: flex-start !important;

  & > .anticon {
    margin-top: 5px;
  }
`;

export const Alert: React.FC<AlertProps> = props => {
  return <StyledAlert showIcon {...props} />;
};
