module.exports = [
  require('@sketch-hq/sketch-assistant-core-rules'),
  async () => ({
    name: '@sketch-hq/sketch-assistant-internal',
    description: 'Activates and configures rules from the Core Rules Sketch Assistant',
    title: 'Sketch Assistant Internal',
    rules: [],
    config: { rules: require('./config.json') }
  })
]
