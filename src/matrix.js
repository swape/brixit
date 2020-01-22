import { html } from 'lit-html'
import { myMatrix } from './constants'
import { reRender } from './common'
import { repeat } from 'lit-html/directives/repeat.js'
import store from './store'

const toggleShape = shapeName => {
  if (!store.shapes[shapeName]) {
    store.shapes[shapeName] = store.selectedColor
  } else {
    store.shapes[shapeName] = ''
  }
}

const clickHandler = shapeName => {
  toggleShape(shapeName)
  reRender()
}

document.addEventListener(
  'dragover',
  function(event) {
    event.preventDefault()
    if (event.target.dataset.shapename) {
      store.shapes[event.target.dataset.shapename] = store.selectedColor
      reRender()
    }
  },
  false
)

const getColor = shapeName => store.shapes[shapeName] || ''

// templates
const cellSpan = cell => html`
  <span
    class="cell ${getColor(cell.shapeName)}"
    @click=${() => clickHandler(cell.shapeName)}
    data-shapename="${cell.shapeName}"
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
