export const pagination = (input, limit, offset) => {
  let output = []

  if (offset && offset > 0 && limit && limit > 0) {
    output = input.slice(offset, input.len).slice(0, limit)
  } else if (limit && limit > 0) {
    output = input.slice(0, limit)
  } else {
    output = input
  }

  return output
}
