import type { IPicGo } from 'picgo'
import fs from 'fs'
import { isUrl } from './util'

/**
 * beforeTransformPlugins handle function
 */
const handleBeforeTransformPlugins = (ctx: IPicGo) => {
  ctx.input = ctx.input.map((item) => {
    if (Buffer.isBuffer(item)) {
      return item
    } else if (typeof item === 'string' && !isUrl(item)) {
      return fs.readFileSync(item)
    }

    return item
  })

  return ctx
}

export default handleBeforeTransformPlugins
