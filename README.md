# Frontend Common

Common component monorepo for the BrokerBay Frontend.

Status: ***WIP***

## Contents

- **@brokerbay/design-components**
    - Components that are shared across brokerbay
    - Will develop as a monolith at first but may be broken down in the future.
- **@brokerbay/design-storybook**
    - Components that are shared across brokerbay
- **@brokerbay/frontend-misc**
    - utilities and imports

## Overview

(not implemented yet)

### Start watching and building the libraries

    yarn watch

### Launch Storybook

    yarn start-storybook

Note: Storybook may have issues if the build process *replaces* a target
directory. In most cases, running `yarn watch` first will work fine. If you
have to restart the watch, or change some configuration, you may need to
restart storybook to.

## Decision Records

See decision records in `adr/` for information about choices made while
building this codebase.