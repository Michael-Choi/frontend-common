import React from 'react';
import { Typography } from 'antd';

import { Alert, FocusedCard, Spacer } from '../../molecules'
import { AgentOnboardingCardHeader } from './private/AgentOnboardingCardHeader'
import { AgentRequestOnboardingForm } from './private/AgentRequestOnboardingForm'
import { SVGLetterIcon } from './private/SVGLetterIcon';

const { Link } = Typography;

export type AgentOnboardingContactCardProps = {
    noBrokerage?: boolean;
    noMemberId?: boolean;
    onContactSales: () => void;
}

export const AgentOnboardingContactCard: React.FC<AgentOnboardingContactCardProps> = (props) => {
  const { noBrokerage = false, noMemberId = false, onContactSales } = props;

  return (
    <FocusedCard>
      <AgentOnboardingCardHeader
        icon={<SVGLetterIcon />}
        title="Contact our sales team"
      />

      {noBrokerage && (
        <Alert
          type="error"
          message={
            <>
              Your brokerage doesn't have access. To get access, please contact
              our sales team at: <Link>sales@brokerbay.ca</Link>
            </>
          }
        />
      )}
      {noMemberId && (
        <Alert
          type="error"
          showIcon
          message={`
          We can't seem to find your member ID in out database. To get
          access, please contact our sales team at sales@brokerbay.ca
        `}
        />
      )}

      <Spacer />

      <AgentRequestOnboardingForm onSubmit={onContactSales} />
    </FocusedCard>
  );
};