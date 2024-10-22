import type { IPlugin } from 'picgo'
import path from 'path'
import fs from 'fs'
import { PLUGIN_NAME } from '@/constants'
import { PluginSetting } from '@/types'
import { parsePluginSetting } from '@/utils'

const createUploader = (): IPlugin => {
  return {
    handle(ctx) {
      const config = ctx.getConfig(PLUGIN_NAME) as PluginSetting
      const fullConfig = parsePluginSetting(config)
      ctx.output = ctx.output.map((img) => {
        const imgOutputPath = path.resolve(fullConfig.public, img.fileName)
        fs.writeFileSync(imgOutputPath, img.buffer, {
          flag: 'r'
        })

        const imgUrl = path.resolve('/', img.fileName)
        img.imgUrl = imgUrl
        img.url = imgUrl
        return img
      })

      return ctx
    }
  }
}

export default createUploader
