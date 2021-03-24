# Use a Monorepo to store common frontend components

* Status: proposed
* Deciders: Peter MacMillan
* Date: 2021-03-23

## Context and Problem Statement

We have a number of design related artifacts in our codebase. The best
iteration of this is the storybook driven component library in `app`.
However, it is not usable outside of app as it is tightly coupled with that
monorepo application.

Our forward-looking architecture at Brokerbay is to create more frontends that are largely independent of each other. This will allow us flexibility in deployment, as well as other considerations.

## Considered Options

* Copy-paste styles between applications
* Extract the existing component library as a starting point
* Create a monorepo that could incubate small bundle development

## Decision Outcome

A new mono-repo/multiple-package approach, built with the initial requirements of the onboarding UI. This allows us to move quickly towards breaking things into smaller bundles and easily manage related changes.

### Positive Consequences

* We can rapidly develop a design-oriented package independent of `app`
* If proven successful, we could begin migrating components as necessary
* Next-gen projects can leverage an early preview as we mature our process
* More consistent versioning between independent apps

### Negative Consequences

* We are not paying down the debt incurred by the monorepo
* We are creating some duplication (albet with a path to consolidation)