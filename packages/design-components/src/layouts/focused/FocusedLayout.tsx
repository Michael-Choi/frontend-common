import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../theme';

import { SVGLogoV2 } from './SVGLogoV2';
import { SVGFooter } from './SVGFooter';

// FIXME: static asset extraction needs absolute paths. Idea: create @brokerbay/design-assets and use like this
import backgroundSvg from '@brokerbay/design-components/static-assets/focused-background.svg';

export const FocusedLayout: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledHeaderLogo />
        {children}
      <StyledFooterLogo />
    </StyledWrapper>
  );
};

const StyledHeaderLogo = styled(SVGLogoV2)`
  position: absolute;
  margin: auto;
  top: calc(5px + 2vh);
  left: 0;
  right: 0;
  width: calc(95px + 3.8vw);
`;

const StyledFooterLogo = styled(SVGFooter)`
  position: absolute;
  margin: auto;
  bottom: 10vmax;
  left: 0;
  right: 0;
  width: calc(10px + 2vmax);
`;

const StyledWrapper = styled.main`
  min-height: 100vh;
  position: relative;
  padding-top: calc(35px + 4vh);
  padding-bottom: calc(200px + 5vw);
  background-image: url(${backgroundSvg});
  /* 1320px is slightly larger than the default width of the bg picture. At 300% this will only show the middle
  portion of the image without growing too large. This helps with small phones in landscape view */
  background-size: min(300%, 1320px) auto;
  background-repeat: no-repeat;
  background-position: bottom center;
  @media (min-width: ${breakpoints.sm}px) {
    background-size: 90% auto;
    padding-bottom: calc(100px + 1vw);
    & > ${StyledFooterLogo} {
      width: calc(12.5px + 1vw);
      bottom: calc(5px + 5vw);
    }
  }
  @media (min-width: ${breakpoints.lg}px) {
    background-size: 80% auto;
    padding-bottom: calc(150px + 2vw);
    & > ${StyledFooterLogo} {
      width: calc(15px + 1vw);
      bottom: 5vw;
    }
  }
`;
