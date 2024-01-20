import originFormatter from './origin'
import hashFormatter from './hash'
import uuidFormatter from './uuid'
import timeFormatter from './time'
import timestampFormatter from './timestamp'

export const formatterMap = [
  originFormatter,
  hashFormatter,
  uuidFormatter,
  timeFormatter,
  timestampFormatter
].reduce((map, formatter) => {
  return {
    ...map,
    [formatter.formatterType]: formatter
  }
}, {})
