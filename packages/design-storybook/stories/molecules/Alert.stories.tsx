import React from "react";

import { Alert, Spacer } from "@brokerbay/design-components";

// FIXME: move this into preview.js or something better
import "../antd.less";

export default {
  title: "molecules/Alert",
  component: Alert,
};

export const Default = () => (
  <>
    <Alert message="A customized Alert that does not require a title but keeps the icon on top" />

    <Spacer />

    <Alert
      type="info"
      message="A customized Alert that does not require a title but keeps the icon on top"
    />

    <Spacer />

    <Alert
      type="warning"
      message="A customized Alert that does not require a title but keeps the icon on top"
    />

    <Spacer />

    <Alert
      type="error"
      message="A customized Alert that does not require a title but keeps the icon on top"
    />
  </>
);
