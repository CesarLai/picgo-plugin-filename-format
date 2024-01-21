# picgo-plugin-filename-format

A picgo plugin to format filename by your setting.

You can use this plugin with Typora to format file name before upload.

## Installation

```sh
# Mac
cd ~/.picgo
npm i --save picgo-plugin-filename-format@npm:@cesarlai/picgo-plugin-filename-format
# Windows
cd C:\\Users\\<Your User Name>\\.picgo
npm i --save picgo-plugin-filename-format@npm:@cesarlai/picgo-plugin-filename-format
```

## Usage

After install this plugin, you should edit `.picgo/config.json` like this

```jsonc
{
  "picBed": {
    "uploader": "aliyun",
    "aliyun": {
      // ...
    },
    "current": "aliyun"
  },
  "picgoPlugins": {
    // use this plugin
    "picgo-plugin-filename-format": true
  },
  // config how to format your file name
  "picgo-plugin-filename-format": {
    // format type (e.g. origin/hash/uuid/timestamp/time)
    "format": "hash",
    // format options
    "options": {
      "type": "sha256",
      "length": 16
    }
  }
}
```

Now you can run `picgo u <file path>` or upload file by **[Typora](https://typora.io)**, and the file name will be formatted according to your setting before upload.

If you upload an image call demo.png

```txt
// format: origin 
https://cloud.com/images/demo.png

// format: hash 
https://cloud.com/images/F797b746fa17615e.png

// format: uuid 
https://cloud.com/images/b117132a-1df4-47dd-b861-a4a2eb687703.png

// format: timestamp 
https://cloud.com/images/1705770275093.png

// format: time 
https://cloud.com/images/2024-01-01/demo.png // nameFormat: origin
https://cloud.com/images/2024-01-01/F797b746fa17615e.png // nameFormat: hash
https://cloud.com/images/2024-01-01/1705770275093.png // nameFormat: timestamp
```

## API

### Basic Configuration

| Field Name | Field Type | Description |
| -- | -- | -- |
| format | string | Format type (default `origin`) <br> e.g. `origin`, `uuid`, `hash`, `time`, `timestamp` |
| options | object | Format options, every format type has different options |

### Origin Options

Format type `origin` need't to set options.

### UUID Options

Format type `uuid` need't to set options.

### Hash Options

| Field Name | Field Type | Description |
| -- | -- | -- |
| type | string | Hash algorithm that supported by OpenSSL (default `sha256`) <br> e.g. `sha256`, `sha512`, etc |
| length | number | The hash output length (default `32`) <br> e.g. `8`, `16`, `32`, etc |

Example

```jsonc
{
  "format": "hash",
  "options": {
    "type": "sha256",
    "length": 16
  }
}
```

### Timestamp Options

| Field Name | Field Type | Description |
| -- | -- | -- |
| length | number | The timestamp output length (default `13`) <br> e.g. `10`, `13` |

Example

```jsonc
{
  "format": "timestamp",
  "options": {
    "length": 13
  }
}
```

### Time Options

| Field Name | Field Type | Description |
| -- | -- | -- |
| timeFormat | string | Time prefix format template that supported by [dayjs](https://github.com/iamkun/dayjs) (default `YYYY-MM-DD`) |
| nameFormat | string | File name format type, supporting above types (default `origin`) <br> e.g. `origin`, `uuid`, `hash`, `timestamp` |
| nameOptions | object | File name format options |

Example

```jsonc
{
  "format": "time",
  "options": {
    "timeFormat": "YYYYMMDDHHmmss",
    "nameFormat": "hash",
    "nameOptions": {
      "length": 16
    }
  }
}
```
