const { resolve } = require('path')
const utils = require('@sketch-hq/sketch-assistant-utils')

const assistant = require('./index')
const config = require('./config')

const queryViolationsByRuleName = (violations, rule) => violations.filter((v) =>
  v.ruleName.includes(rule)
)

test('borders-no-disabled', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/disabled-border.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'borders-no-disabled')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('fills-no-disabled', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/disabled-fill.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'fills-no-disabled')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('shadows-no-disabled', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/disabled-shadow.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'shadows-no-disabled')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('inner-shadows-no-disabled', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/disabled-inner-shadow.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'inner-shadows-no-disabled')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('groups-no-empty', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/empty-group.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'groups-no-empty')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('layer-styles-no-dirty', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/dirty-style.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'layer-styles-no-dirty')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('groups-no-redundant', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/redundant-group.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'groups-no-redundant')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('layers-no-hidden', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/hidden-layer.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'layers-no-hidden')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('images-no-outsized', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/outsized-image.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'images-no-outsized')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('text-styles-prefer-shared', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/multiple-text-styles.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'text-styles-prefer-shared')

  expect(ruleViolations).toHaveLength(2)
  expect(errors).toHaveLength(0)
})

test('layer-styles-prefer-shared', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/multiple-layer-styles.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'layer-styles-prefer-shared')

  expect(ruleViolations).toHaveLength(2)
  expect(errors).toHaveLength(0)
})

test('layers-subpixel-positioning', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/subpixel-positioning.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'layers-subpixel-positioning')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('name-pattern-artboards', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/named-artboards.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'name-pattern-artboards')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('name-pattern-symbols', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/named-symbols.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'name-pattern-symbols')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('name-pattern-pages', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/named-pages.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'name-pattern-pages')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('name-pattern-shapes', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/named-shapes.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'name-pattern-shapes')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('artboards-max-ungrouped-layers', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/artboards-max-ungrouped-layers.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'artboards-max-ungrouped-layers')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('images-no-undersized', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/images-no-undersized.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'images-no-undersized')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})

test('shared-styles-no-unused', async () => {
  const { violations, errors } = await utils.testRule(resolve(__dirname, './fixtures/shared-styles-no-unused.sketch'), config, assistant)
  const ruleViolations = queryViolationsByRuleName(violations, 'shared-styles-no-unused')

  expect(ruleViolations).toHaveLength(1)
  expect(errors).toHaveLength(0)
})


