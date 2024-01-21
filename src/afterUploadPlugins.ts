import type { IPicGo } from 'picgo'

/**
 * afterUploadPlugins handle function
 */
const handleAfterUploadPlugins = (ctx: IPicGo) => {
  ctx.output = ctx.output.map((item) => ({
    ...item,
    imgUrl: item.imgUrl ? decodeURIComponent(item.imgUrl) : item.imgUrl
  }))

  return ctx
}

export default handleAfterUploadPlugins
