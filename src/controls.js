// @ts-check

import {colors} from './constants'
import {html} from 'lit-html'
import {downloadAsFile, reRender, uploadJson} from './common'
import store, {setStore} from './store'

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

const saveFile = () => {
  downloadAsFile('brixit-file.json', JSON.stringify(store))
}


const loadFile = () => {
  uploadJson().then((data) => {
    setStore(data)
    reRender()
  }).catch(alert)
}

const cleanStore = () => {
  setStore({pos: {}})
  reRender()
}

const options = html`
  <div class="options">
    <button @click=${() => loadFile()}>Load</button>
    <button @click=${() => saveFile()}>Save</button>
    <button @click=${() => cleanStore()}>Clear</button>
  </div>
`

const drawControls = () => html`
  <div class="controls">
    ${selectedColor()} ${controlColors} ${options}
  </div>
`

export default drawControls
