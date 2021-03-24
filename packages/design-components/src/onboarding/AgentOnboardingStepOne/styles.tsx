import React from 'react';
import styled from 'styled-components';
import { Button as AntDButton, ButtonProps, Card, Form, FormProps, Typography } from 'antd'

export const StyledTitle = styled(Typography.Title)`
  && {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const StyledButton = styled((props:ButtonProps) => <AntDButton {...props} />)`
  height: auto;
  font-weight: 400;
`;

export const StyledErrorMessage = styled(Typography.Paragraph)`
  && {
    text-align: left;
    margin: 5px 0 0;
  }
`;

export const StyledLink = styled(Typography.Link)`
  display: block;
  margin-top: 25px;
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledCard = styled(Card)`
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 25px;
`;

export const StyledForm = styled((props: FormProps) => <Form {...props} />)`
  display: grid;
  gap: 25px;
  & label {
    text-align: left;
    display: block;
    margin-bottom: 8px;
  }
`;

export const StyledWrapper = styled.div`
  width: 90%;
  margin: 10px auto;
  max-width: 350px;
  text-align: center;
`;