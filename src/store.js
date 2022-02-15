// @ts-check

const store = {
  selectedColor: 'red',
  pos: {},
}

export function setStore(value) {
  if (value?.pos) {
    store.pos = value.pos
  }
}

export default store
