import { HashFormatOptions, PluginSetting, TimeFormatOptions, TimestampFormatOptions } from "@/types";

const DefaultPluginSetting: Readonly<PluginSetting> = {
  format: 'origin'
}

const DefaultTimestampFormatOptions: Readonly<TimestampFormatOptions> = {
  length: 13
}

const DefaultTimeFormatOptions: Readonly<TimeFormatOptions> = {
  timeFormat: 'YYYYMMDDHHmmss'
}

const DefaultHashFormatOptions: Readonly<HashFormatOptions> = {
  type: '',
  length: 32
}

export const parsePluginSetting = (setting: PluginSetting | undefined) => {

}