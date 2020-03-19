// @ts-check

let reRenderFunction = null

export const initRerender = cb => (reRenderFunction = cb)

export const reRender = () => reRenderFunction()
