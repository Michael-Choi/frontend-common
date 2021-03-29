import React from 'react';
import styled from 'styled-components';
import { Card, CardProps } from 'antd'

const StyledCard = styled(Card)`
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
    0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
`;

const DEFAULT_FOCUSED_CARD_WIDTH = 356;

export type FocusedCardProps = CardProps & {
    width?: number;
}

export const FocusedCard: React.FC<FocusedCardProps> = (props) => {
  const { children, width = DEFAULT_FOCUSED_CARD_WIDTH } = props;

  return <StyledCard style={{ width }}>{children}</StyledCard>;
};