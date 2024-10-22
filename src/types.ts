export type FormatType = 'timestamp' | 'time' | 'hash' | 'uuid' | 'origin'

export interface TimestampFormatOptions {
  length?: 10 | 13
}

export interface TimeFormatOptions {
  timeFormat?: string
  nameFormat?: Exclude<FormatType, 'time'>
  nameOptions?: any
}

export interface HashFormatOptions {
  type?: string
  length?: number
}

export interface BasePluginSetting<T extends FormatType, O = any> {
  public?: string
  format: T
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

export type FormatterFunc = (originName: string, config: PluginSetting) => string
export type Formatter = FormatterFunc & {
  // (originName: string, config: PluginSetting): string
  formatterType: string
}
