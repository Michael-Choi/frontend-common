import React from "react";

import { FocusedLayout } from '@brokerbay/design-components'

// FIXME: move this into preview.js or something better
import '../antd.less'

export default {
  title: "layouts/FocusedLayout",
  component: FocusedLayout,
};

export const Default = () => <FocusedLayout><p>Your content goes here.</p></FocusedLayout>;