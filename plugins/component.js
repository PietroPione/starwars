import Vue from 'vue'

const requireComponent = require.context(
  '~/components',
  true,
  /met[A-Z]\w+\/index\.vue$/
)
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName.split('/')[1]
  Vue.component(componentName, componentConfig.default || componentConfig)
})
