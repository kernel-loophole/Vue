/* eslint-disable eol-last */
/* eslint-disable indent */
import { createApp } from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
const requireComponent = require.context(
    // Look for files in the current directory
    './components',
    // Do not look in subdirectories
    false,
    // Only include "_base-" prefixed .vue files
    /Base[A-Z]\w+\.(vue|js)$/
)
const app = createApp(App)
requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName)
        // Get PascalCase name of component
    const componentName = upperFirst(
            camelCase(
                // Gets the file name regardless of folder depth
                fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
            )
        )
        // Register component globally
    app.component(componentName, componentConfig.default || componentConfig)
})

app.mount('#app')
    // eslint-disable-next-line no-console