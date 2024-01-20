import { Formatter, FormatterFunc } from '@/types'

const originFormatter: FormatterFunc = (originName) => originName

Reflect.defineProperty(originFormatter, 'formatterType', { value: 'origin' })

export default originFormatter as Formatter
