// @ts-check

import { colors } from './constants'
import { html } from 'lit-html'
import { reRender } from './common'
import store from './store'

const setColor = colorName => {
  store.selectedColor = colorName
  reRender()
}

const selectedColor = () => html`
  <div class="selected-color ${store.selectedColor}">
    Selected color: ${store.selectedColor}
  </div>
`

const colorSpan = color => html`
  <span class="color ${color}" @click=${() => setColor(color)}>${color}</span>
`

const controlColors = html`
  <div class="colors">
    ${colors.map(color => colorSpan(color))}
  </div>
`

const options = html`
  <div class="options">
    <div>Load</div>
    <div>Save</div>
    <div>Clear</div>
  </div>
`

const drawControlls = () => html`
  <div class="controls">
    ${selectedColor()} ${controlColors} ${options}
  </div>
`

export default drawControlls
