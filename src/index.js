// @ts-check

import { html, render } from 'lit-html'
import { initRerender, reRender } from './common'

import drawControls from './controls'
import drawMatrix from './matrix'

const header = html`
  <h1>BRIXIT</h1>
`

const footer = html`<div class="container">Made by Alireza Balouch with lit-html and parcel.</div>
  <div class="container"><a href="https://github.com/swape/brixit" target="_blank" rel="noopener">github.com/swape/brixit</a></div>`

const myTemplate = () => html`
  ${header}
  <div class="container">${drawMatrix()}${drawControls()}</div>
  ${footer}
`

const body = document.body

initRerender(() => render(myTemplate(), body))

reRender()
