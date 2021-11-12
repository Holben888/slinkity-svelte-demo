export default function ({ target, Component, props }) {
  new Component({
    target,
    props,
    hydrate: true,
  })
}