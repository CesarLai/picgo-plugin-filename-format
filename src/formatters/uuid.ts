import { v4 as uuidv4 } from 'uuid'
import { getExt } from '@/utils'
import { Formatter, FormatterFunc } from '@/types'

export const uuidFormatter: FormatterFunc = (originName) => {
  const ext = getExt(originName)
  return `${uuidv4()}${ext}`
}

Reflect.defineProperty(uuidFormatter, 'formatterType', { value: 'uuid' })

export default uuidFormatter as Formatter
