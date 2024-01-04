import type { IPicGo } from 'picgo'
import handleBeforeTransformPlugins from './beforeTransformPlugins'
import handleBeforeUploadPlugins from './beforeUploadPlugins'

const PLUGIN_NAME: Readonly<string> = 'filename-format'

/**
 * picgo image filename format plugin
 */
function pluginImageNameFormat(ctx: IPicGo) {
  const register = () => {
    ctx.helper.beforeTransformPlugins.register(PLUGIN_NAME, {
      handle: handleBeforeTransformPlugins
    })
    ctx.helper.beforeUploadPlugins.register(PLUGIN_NAME, {
      handle: handleBeforeUploadPlugins
    })
  }

  return {
    register
  }
}

export default pluginImageNameFormat

// CommonJS polyfill
module.exports = pluginImageNameFormat
