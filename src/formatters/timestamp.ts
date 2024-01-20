import { getExt } from '@/utils'
import { Formatter, FormatterFunc, TimestampFormatOptions } from '@/types'

const timestampFormatter: FormatterFunc = (originName, config) => {
  const ext = getExt(originName)
  const { length } = (config.options || {}) as TimestampFormatOptions
  let timestamp = new Date().getTime()
  if (length === 10) {
    timestamp = Math.ceil(timestamp / 1000)
  }
  return `${timestamp}${ext}`
}

Reflect.defineProperty(timestampFormatter, 'formatterType', {
  value: 'timestamp'
})

export default timestampFormatter as Formatter
