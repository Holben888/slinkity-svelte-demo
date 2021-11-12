export async function renderToStaticMarkup({ Component, props }) {
  console.log({Component})
  return Component.default.render(props)
}