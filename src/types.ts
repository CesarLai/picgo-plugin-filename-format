export type FormatType = 'timestamp' | 'time' | 'hash' | 'uuid' | 'origin'

export interface TimestampFormatOptions {
  length?: 10 | 13 | '10' | '13'
}

export interface TimeFormatOptions {
  timeFormat?: string
}

export interface HashFormatOptions {
  type?: string
  length?: number | string
}

export interface BasePluginSetting<T extends FormatType, O = any> {
  format?: T
  options?: O
}

export type TimestampPluginSetting = BasePluginSetting<
  'timestamp',
  TimestampFormatOptions
>

export type TimePluginSetting = BasePluginSetting<'time', TimeFormatOptions>

export type HashPluginSetting = BasePluginSetting<'hash', HashFormatOptions>

export type UuidPluginSetting = BasePluginSetting<'uuid', undefined>

export type OriginPluginSetting = BasePluginSetting<'origin', undefined>

export type PluginSetting =
  | TimestampPluginSetting
  | TimePluginSetting
  | HashPluginSetting
  | UuidPluginSetting
  | OriginPluginSetting
