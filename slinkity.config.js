const { defineConfig } = require('slinkity')
const reactRenderer = require('@slinkity/renderer-react')
const { resolve } = require('path')
const { svelte } = require('@sveltejs/vite-plugin-svelte')

module.exports = defineConfig({
  renderers: [reactRenderer, {
    name: 'svelte',
    extensions: ['svelte'],
    client: resolve('client.js'),
    server: resolve('server.js'),
    viteConfig: () => ({
      plugins: [svelte({
        compilerOptions: {
          hydratable: true,
        }
      })],
      optimizeDeps: {
        include: ['svelte'],
      }
    })
  }]
})