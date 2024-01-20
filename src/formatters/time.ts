import dayjs from 'dayjs'
import {
  Formatter,
  FormatterFunc,
  PluginSetting,
  TimeFormatOptions
} from '@/types'
import originFormatter from './origin'
import hashFormatter from './hash'
import timestampFormatter from './timestamp'
import uuidFormatter from './uuid'

const generalFileName = (
  format: TimeFormatOptions['nameFormat'],
  originName: string,
  config: PluginSetting
) => {
  switch (format) {
    case 'hash':
      return hashFormatter(originName, config)
    case 'uuid':
      return uuidFormatter(originName, config)
    case 'timestamp':
      return timestampFormatter(originName, config)
    default:
      return originFormatter(originName, config)
  }
}

export const timeFormatter: FormatterFunc = (originName, config) => {
  const { timeFormat, nameFormat, nameOptions } = (config.options || {}) as TimeFormatOptions
  const parsedTimeFormat = timeFormat || 'YYYY-MM-DD'
  const parsedNameFormat = nameFormat || 'origin'
  const fileName = generalFileName(parsedNameFormat, originName, {
    ...config,
    format: parsedNameFormat,
    options: nameOptions
  })
  return `${dayjs().format(parsedTimeFormat)}/${fileName}`
}

Reflect.defineProperty(timeFormatter, 'formatterType', { value: 'time' })

export default timeFormatter as Formatter
