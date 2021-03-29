import React from "react";

import { Spacer } from '@brokerbay/design-components'

// FIXME: move this into preview.js or something better
import '../antd.less'

export default {
  title: "molecules/Spacer",
  component: Spacer,
};

export const Default = () => (
    <>
        <p>Before the spacer</p>
        <Spacer />
        <p>After the spacer</p>
    </>
)