# sketch-assistant-internal

This Assistant aims to provide a set of usefully configured rules suitable for dogfooding internally at Sketch. Activates and configures rules from the [Core Rules Sketch Assistant](https://github.com/sketch-hq/sketch-assistant-core-rules).

## Rules

The following rules are part of this Assistant:

- No Disabled Borders [docs](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/borders-no-disabled)
- No Empty Groups [docs](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/groups-no-empty)
- No Redundant Groups [docs](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/groups-no-redundant)
- No Hidden Layers [docs](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/layers-no-hidden)
- No Outsized Images (maxRatio: 2) [docs](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/images-no-outsized)
- Prefer Shared Text Styles (maxIdentical: 1) [docs](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/text-styles-prefer-shared)
- Prefer Shared Layer Styles (maxIdentical: 1) [docs](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/layer-styles-prefer-shared)
- Subpixel Positioning (scaleFactors: @1x and @2x) [docs](https://github.com/sketch-hq/sketch-assistant-core-rules/tree/master/src/rules/layers-subpixel-positioning)

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
