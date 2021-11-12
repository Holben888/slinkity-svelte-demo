export async function renderToStaticMarkup({ Component, props }) {
  const {html, css} = Component.default.render()
  return {
    html,
    css: css.code,
  }
}