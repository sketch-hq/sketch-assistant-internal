const { resolve } = require('path')
const utils = require('@sketch-hq/sketch-assistant-utils')

const assistant = require('./index')
const config = require('./config')

test('borders-no-disabled', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/disabled-border.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('fills-no-disabled', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/disabled-fill.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('shadows-no-disabled', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/disabled-shadow.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('inner-shadows-no-disabled', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/disabled-inner-shadow.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('groups-no-empty', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/empty-group.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('layer-styles-no-dirty', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/dirty-style.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('groups-no-redundant', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/redundant-group.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('layers-no-hidden', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/hidden-layer.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('images-no-outsized', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/outsized-image.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('images-no-outsized', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/outsized-image.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('text-styles-prefer-shared', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/multiple-text-styles.sketch'), config, assistant)
  expect(violations).toHaveLength(2)
  expect(errors).toHaveLength(0)
})

test('layer-styles-prefer-shared', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/multiple-layer-styles.sketch'), config, assistant)
  expect(violations).toHaveLength(2)
  expect(errors).toHaveLength(0)
})

test('layers-subpixel-positioning', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/subpixel-positioning.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('name-pattern-artboards', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/named-artboards.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('name-pattern-symbols', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/named-symbols.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('name-pattern-pages', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/named-pages.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('name-pattern-shapes', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/named-shapes.sketch'), config, assistant)
  expect(violations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})