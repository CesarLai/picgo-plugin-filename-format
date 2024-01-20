import { createHash } from 'crypto'
import { getExt } from '@/utils'
import { Formatter, FormatterFunc, HashFormatOptions } from '@/types'

const getRandomString = (length = 8) => {
  if (length <= 0) {
    return ''
  }

  const charPool = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const randomChars: string[] = []
  let i = length
  while (i > 0) {
    const randomIndex = (Math.floor(Math.random() * 100) % charPool.length) - 1
    randomChars.push(charPool[randomIndex])
    i--
  }

  return randomChars.join('')
}

const generateHashFileName = (
  originName: string,
  type: string,
  length: number
) => {
  const ext = getExt(originName)
  const randomString = getRandomString(8)
  const timestamp = new Date().getTime()
  const hash = createHash(type)
    .update(`${timestamp}_${originName}_${randomString}`)
    .digest()
    .toString('hex')
    .substring(0, length)
  return `${hash}${ext}`
}

export const hashFormatter: FormatterFunc = (originName, config) => {
  const { type, length } = config.options as HashFormatOptions
  const hashType = type || 'sha256'
  const hashLength = typeof length === 'number' && length > 0 ? length : 32
  return generateHashFileName(originName, hashType, hashLength)
}

Reflect.defineProperty(hashFormatter, 'formatterType', { value: 'hash' })

export default hashFormatter as Formatter
