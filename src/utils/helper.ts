import path from 'path'
import os from 'os'
import { PluginSetting } from '@/types'

const IMAGE_DIR = path.resolve(os.homedir(), 'Pictures')

const DefaultPluginSetting: Readonly<PluginSetting> = {
  public: IMAGE_DIR,
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
