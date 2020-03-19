// @ts-check

import { html } from 'lit-html'
import { myMatrix } from './constants'
import { reRender } from './common'
import { repeat } from 'lit-html/directives/repeat.js'
import store from './store'

const togglePosColor = posName => {
  if (!store.pos[posName]) {
    store.pos[posName] = store.selectedColor
  } else {
    store.pos[posName] = ''
  }
}

const clickHandler = posName => {
  togglePosColor(posName)
  reRender()
}

document.addEventListener(
  'dragover',
  function(event) {
    event.preventDefault()
    if (event.target.dataset.posname) {
      store.pos[event.target.dataset.posname] = store.selectedColor
      reRender()
    }
  },
  false
)

const getColor = posName => store.pos[posName] || ''

// templates
const cellSpan = cell => html`
  <span
    class="cell ${getColor(cell.posName)}"
    @click=${() => clickHandler(cell.posName)}
    data-posname="${cell.posName}"
    draggable="true"
  ></span>
`

const rowDiv = row => html`
  <div class="row">
    ${repeat(row, cell => cellSpan(cell))}
  </div>
`

const drawMaterix = () => html`
  <div class="matrix">
    ${repeat(myMatrix, row => rowDiv(row))}
  </div>
`

export default drawMaterix
