// @ts-check

let reRenderFunction = null

export const initRerender = cb => (reRenderFunction = cb)

export const reRender = () => reRenderFunction()

export const downloadAsFile = (filename, text) => {
  const element = document.createElement('a')
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

export const uploadJson = () => {
  const element = document.createElement('input')

  function cleanUp() {
    element.removeEventListener('change', handleFile, true)
    element.remove()
  }

  function handleFile(e) {
    return new Promise((resolve, reject) => {
      const file = e.target?.files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = ev => {
          const content = ev.target.result

          try {
            const jsonContent = JSON.parse(content)
            cleanUp()
            resolve(jsonContent)
          } catch (error) {
            cleanUp()
            reject(error)
          }
        }
        reader.readAsText(file)
      } else {
        cleanUp()
        reject('no file')
      }
    })
  }

  return new Promise((resolve, reject) => {
    element.setAttribute('type', 'file');
    element.setAttribute('accept', 'application/JSON');
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click();
    element.addEventListener('change', (e) => handleFile(e).then(resolve).catch(reject), true)
  })


}
