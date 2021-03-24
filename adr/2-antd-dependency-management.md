
# Implement ant design as a peer dependency

* Status: proposed
* Deciders: Peter MacMillan
* Date: 2021-03-23

## Context and Problem Statement

Ant design is the design system already in use at BrokerBay. We have designs and projects using it, so swapping it out for somehting else is not a consideration at this point...

We wish to create a series of packages that promote code-reuse between independent applications.

## Considered Options

* Augment the library as a `peerDependency` and have a package that exposes shared components
* Encapsulate the library, re-exporting components, but overriding ones with custom improvements
* Substitute components through `babel-import`

## Decision Outcome

Augmenting the library as a `peerDependency` exposes the least amount of
implementation risk. Ant design cannot easily be encapsulated without losing
some features (for example, some customization is done by using
`babel-import` to swap out import statements in a clever way to include the
less files).

### Positive Consequences

* Projects can choose to:
  * Use ant-design as that currently do
  * Implement design components in our shared bundle
* flexibility to slowly migrate components to the new shared design system

### Negative Consequences

* The underlying design system is exposed and apps are not forced to standardize
* Fragmentation may make future global improvements difficult