let reRenderFunction = ''

export const initRerender = cb => (reRenderFunction = cb)

export const reRender = () => reRenderFunction()
