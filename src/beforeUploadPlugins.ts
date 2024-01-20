import type { IPicGo } from 'picgo'
import { PLUGIN_NAME } from '@/constants'
import { parsePluginSetting } from '@/utils'
import { formatterMap } from '@/formatters'
import { PluginSetting } from '@/types'

/**
 * beforeUploadPlugins handle function
 */
const handleBeforeUploadPlugins = (ctx: IPicGo) => {
  ctx.output = ctx.output.map((item) => {
    if (typeof item === 'object' && item.fileName) {
      const fixedFileName = item.fileName.replace(/}$/, '')
      const config = ctx.getConfig(PLUGIN_NAME) as PluginSetting
      const fullConfig = parsePluginSetting(config)
      const formatedFileName =
        typeof formatterMap[fullConfig.format] === 'function'
          ? formatterMap[fullConfig.format](fixedFileName, fullConfig)
          : fixedFileName

      return {
        ...item,
        fileName: formatedFileName
      }
    }
    return item
  })

  return ctx
}

export default handleBeforeUploadPlugins
