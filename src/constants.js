// @ts-check

export const colors = ['red', 'blue', 'black', 'pink', 'green', 'yellow']

export const width = 16

export const height = 16

export const myMatrix = []

for (let x = 0; x <= width; x++) {
  const row = []
  for (let y = 0; y <= height; y++) {
    row.push({posName: `pos-${x}-${y}`})
  }
  myMatrix.push(row)
}
