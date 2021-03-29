import React from "react";

import { FocusedCard } from "@brokerbay/design-components";

// FIXME: move this into preview.js or something better
import "../antd.less";

export default {
  title: "molecules/FocusedCard",
  component: FocusedCard,
};

export const Default = () => (
    <FocusedCard title="FocusedCard">
        A card with styling intended to be on pages with a singular flow.
    </FocusedCard>
);
