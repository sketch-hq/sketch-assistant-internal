# @sketch-hq/sketch-assistant-internal

## 3.0.0-next.2

### Patch Changes

- 183794e: Update deps

## 3.0.0-next.1

### Patch Changes

- 1557db1: Make package public

## 3.0.0-next.0

### Major Changes

- d9b66a2: Release first next pre prelease

## 2.1.1

### Patch Changes

- 734c0a6: Update dependencies and add human readable metadata to package.json

## 2.1.0

### Minor Changes

- 75d94ab: Added additional rules `exported-layers-no-blend-mode`, `artboards-max-ungrouped-layers`
  and `images-no-undersized`.

### Patch Changes

- 9f0f1ba: Bug fix: handle layer positions with more than two decimal places when checking subpixel
  positioning
- 9f0f1ba: Bug fix: do not check styles in combined shapes

## 2.0.0

### Major Changes

- a2b087f: Add `shared-styles-no-unused`
- a2b087f: Add `fills-no-disabled`
- a2b087f: Add `symbols-no-unused`
- a2b087f: Add `shadows-no-disabled`
- a2b087f: Add `inner-shadows-no-disabled`
- a2b087f: Add `text-styles-no-dirty`
- a2b087f: Add `name-pattern-artboards`
- a2b087f: Add `name-pattern-pages`
- a2b087f: Add `name-pattern-symbols`
- a2b087f: Add `name-pattern-shapes`
- a2b087f: Add `name-pattern-groups`
- a2b087f: Add `layers-no-loose`
- a2b087f: Add `layer-styles-no-dirty`

### Patch Changes

- a2b087f: Add some basic Jest testing

## 1.0.6

### Patch Changes

- 73389e5: Use `on.release.types.created` event for triggering tgz upload

## 1.0.5

### Patch Changes

- 60f3782: Testing on.release.created GitHub Action

## 1.0.4

### Patch Changes

- 09d1bae: Use v1 of release action

## 1.0.3

### Patch Changes

- ee2bfc6: Tweak GitHub Action syntax

## 1.0.2

### Patch Changes

- e2fc3b0: Use custom PAT for release action

## 1.0.1

### Patch Changes

- 7ff2920: Add GitHub Action to copy package tgz to release

## 1.0.0

### Major Changes

- 3a0c1c4: Initial release
