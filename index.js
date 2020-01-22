import { html, render } from 'lit-html'
import { initRerender, reRender } from './src/common'

import drawControls from './src/controls'
import drawMatrix from './src/matrix'

const header = html`
  <h1>BRIXIT</h1>
`

const myTemplate = () => html`
  ${header}
  <div class="container">${drawMatrix()}${drawControls()}</div>
  <div class="container">
    Made by Alireza Balouch with lit-html, parcel and stylus.
  </div>
`

const body = document.body

initRerender(() => render(myTemplate(), body))

reRender()
