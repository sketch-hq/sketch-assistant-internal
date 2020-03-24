# sketch-assistant-internal

Activates and configures rules from the [Core Rules Sketch Assistant](https://github.com/sketch-hq/sketch-assistant-core-rules). This Assistant aims to provide a set of usefully configured rules suitable for dogfooding internally at Sketch.

The Assistant configuration is available to view and update here:

- [./config.json](config.json)

## Usage

### Add to Sketch

TODO: Add a Sketch Assistant installation link/button here when ready.

### As a local development assistant

To package this assistant as a local development assistant, perform the following steps,

1. Ensure you have Node and Yarn installed
1. Check out this repo
1. Install the dependencies with `yarn`
1. Run `yarn package-tarball` and the local assistant package will be written to the current folder

TODO: Add documentation about how to work with local development assistants where when ready.

## Development

The following section of the readme only relates to developing the Assistant, not using it in your
own projects.

### Scripts

Interact with the tooling in this repository via the following scripts.

| Script               | Description                            |
| -------------------- | -------------------------------------- |
| yarn build           | Builds the Assistant                   |
| yarn package-tarball | Packages the Assistant as a local file |

### Updating the configuration

Update the configuration for existing rules, or add configuration for a new rule like so:

1. Make changes to [./config.json](config.json) file.
1. Open a pull request to `master` and request a code review.
1. Once ready to release a new version to npm too, follow the [instructions below](#releases).

### Releases

This repository uses [Atlassian Changesets](https://github.com/atlassian/changesets) to automate the
npm release process. Read the docs for more information, but the top-level summary is:

- A GitHub Action maintains a permanently open PR that when merged will publish the package to npm
  with the latest changes and an automatically determined semver.
- If the work you do in a PR should affect the next release, then you need to commit a "changeset"
  to the repository together with the rest of your code changes - do this by running
  `yarn changeset`. You'll be asked to provide a change type (major, minor or patch) and a message.
