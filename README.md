# sketch-assistant-internal

This Assistant aims to provide a set of usefully configured rules suitable for dogfooding internally at Sketch. Activates and configures rules from the [Core Rules Sketch Assistant](https://github.com/sketch-hq/sketch-assistant-core-rules).


## Rules

The following rules are part of this Assistant:

- [No Disabled Borders](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/borders-no-disabled)
- [No Disabled Fills](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/fills-no-disabled)
- [No Disabled Shadows](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/shadows-no-disabled)
- [No Disabled Inner Shadows](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/inner-shadows-no-disabled)
- [No Dirty Layer Styles](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/layer-styles-no-dirty)
- [No Dirty Text Styles](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/text-styles-no-dirty)
- [No Empty Groups](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/groups-no-empty)
- [No Redundant Groups](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/groups-no-redundant)
- [No Hidden Layers](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/layers-no-hidden)
- [No Outsized Images](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/images-no-outsized)
  - maxRatio: `2`
- [Prefer Shared Text Styles](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/text-styles-prefer-shared)
  - maxIdentical: `1`
- [Prefer Shared Layer Styles](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/layer-styles-prefer-shared)
  - maxIdentical: `1`
- [Subpixel Positioning](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/layers-subpixel-positioning)
  - scaleFactors: `@1x` and `@2x`
- [Artboard Layer Names](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/name-pattern-artboards)
  - must be numbered. e.g. `1.1 Splash Screen`
- [Symbol Layer Names](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/name-pattern-artboards)
  - names must take advantage of forward-slash grouping, e.g. `Icon/Frog`
- [Group Layer Names](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/name-pattern-artboards)
  - default layer names are forbidden
- [Page Names](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/name-pattern-artboards)
  - must start with an emoji, e.g. `🚧 Work in Progress`
- [Shape Names](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/name-pattern-shapes)
  - default layer names are forbidden
- [No Unused Shared Styles](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/shared-styles-no-unused)
- [No Unused Symbols](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/symbols-no-unused)
- [No Loose Layers](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/layers-no-loose)

> For the raw config information check [./config.json](config.json)

## Usage

### Add to Sketch

> 🚧 TODO: Add a Sketch Assistant installation link/button here when the feature is ready.

### As a local development Assistant

#### Using an official release

1. Go to the [latest release](https://github.com/sketch-hq/sketch-assistant-internal/releases/latest).
1. Read the release notes - they'll let you know what's changed, and if any new rules have been added.
1. Expand the _Assets_ dropdown, and download the file named in the format `sketch-hq-sketch-assistant-internal-v#.#.#.tgz`.
1. Once downloaded, add the local Assistant file to your Sketch document using the _Install from disk..._ option.

#### From source

1. Ensure you have Node and Yarn installed.
1. Check out this repo.
1. Install the dependencies with `yarn`.
1. Run `yarn package-tarball` and the local assistant package will be written to the current folder as a `.tgz` file.
1. Add the local Assistant to your Sketch document using the _Install from disk..._ option.


## Development

The following section of the readme only relates to developing the Assistant, not using it in your
own projects.


### Scripts

Interact with the tooling in this repository via the following scripts.

| Script               | Description                            |
| -------------------- | -------------------------------------- |
| yarn build           | Builds the Assistant                   |
| yarn package-tarball | Packages the Assistant as a local file |


### Configure rules

Update the configuration for existing rules, or add configuration for a new rule like so:

1. Make changes to [./config.json](config.json) file.
1. Make sure to update the [Rules](#rules) section of this readme with an entry
1. Add a [changeset](#releases)
1. Open a pull request to `master` and request a code review.


### Releases

This repository uses [Atlassian Changesets](https://github.com/atlassian/changesets) to automate the
npm release process. Read the docs for more information, but the top-level summary is:

- A GitHub Action maintains a permanently open PR that when merged will publish the package to npm
  with the latest changes and an automatically determined semver.
- If the work you do in a PR should affect the next release, then you need to commit a "changeset"
  to the repository together with the rest of your code changes - do this by running
  `yarn changeset`. You'll be asked to provide a change type (major, minor or patch) and a message.
