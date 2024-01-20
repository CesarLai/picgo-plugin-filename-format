import { PluginSetting } from '@/types'

const DefaultPluginSetting: Readonly<PluginSetting> = {
  format: 'origin'
}

export const parsePluginSetting = (
  setting: PluginSetting | undefined
): PluginSetting => {
  return setting?.format ? setting : DefaultPluginSetting
}

export const getExt = (fileName: string) => {
  return /(\.[a-zA-Z]+)?$/.exec(fileName)?.[1] || ''
}
