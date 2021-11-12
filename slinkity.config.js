const { defineConfig } = require('slinkity')
const reactRenderer = require('@slinkity/renderer-react')
const { resolve } = require('path')
const { svelte } = require('@sveltejs/vite-plugin-svelte')
const svelteRenderer = require('./_renderer-svelte')

const client = resolve('client.js')
const server = resolve('server.js')

console.log({client, server, __dirname})

module.exports = defineConfig({
  renderers: [reactRenderer, {
    name: 'svelte',
    extensions: ['svelte'],
    client,
    server,
    viteConfig: () => ({
      plugins: [svelte({
        compilerOptions: {
          hydratable: true,
        }
      })],
      optimizeDeps: {
        include: [client, 'svelte'],
      }
    })
  }]
})