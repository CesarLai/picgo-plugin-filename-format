import type { IPicGo } from 'picgo'

/**
 * beforeUploadPlugins handle function
 */
const handleBeforeUploadPlugins = (ctx: IPicGo) => {
  ctx.output = ctx.output.map((item) => {
    if (typeof item === 'object' && item.fileName) {
      return {
        ...item,
        fileName: item.fileName.replace(/}$/, '')
      }
    }
    return item
  })

  return ctx
}

export default handleBeforeUploadPlugins
