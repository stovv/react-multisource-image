# react-multisource-image

> Picture with source tags https://developer.mozilla.org/ru/docs/Web/HTML/Element/picture and media queries to automatically adjust for different screens

[![NPM](https://img.shields.io/npm/v/react-multisource-image.svg)](https://www.npmjs.com/package/react-multisource-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-multisource-image
```
or
```bash
yarn add react-multisource-image
```

## Usage

```jsx
import React, { Component } from 'react'
import MultiSourceImage from 'react-multisource-image'

class Example extends Component {
  render() {
    return <MultiSourceImage
      sources={{
        defaultSource: {
          url: "/uploads/hello_origin.jpg",
          mime: "image/jpeg"
        },
        formats: {
          large: [
            {
              url: "/uploads/hello.jpg",
              mime: "image/jpeg"
            },
            {
              url: "/uploads/hello.webp",
              mime: "image/webp"
            },
          ],
          medium: [
            {
              url: "/uploads/hello_medium.jpg",
              mime: "image/jpeg"
            },
            {
              url: "/uploads/hello_medium.webp",
              mime: "image/webp"
            },
          ],
          small: [
            {
              url: "/uploads/hello_small.jpg",
              mime: "image/jpeg"
            },
            {
              url: "/uploads/hello_small.webp",
              mime: "image/webp"
            },
            {
              url: "/uploads/hello_small.png",
              mime: "image/png"
            },
          ],
          thumbnail: [
            {
              url: "/uploads/hello_thumbnail.jpg",
              mime: "image/jpeg"
            },
            {
              url: "/uploads/hello_thumbnail.webp",
              mime: "image/webp"
            },
          ]
        }
      }}
      mediaMapping={{
        large: '(min-width: 1440px)',
        medium: '(min-width: 960px)'
      }}
      alt="Some alternative text"
      backend="https://hello.backend.com"
    />
  }
}
```

## Possible Arguments

| Argument  | Type     | Description |
| --------- | :------: | :---------- |
| `sources` | required | Contains a structure as in this [example](#sources-structure) |
| `mediaMapping` | optional | Contains a structure as in this [example](#media-mapping-structure) |
| `alt` | required | Alternative text for img |
| `backend` | optional | Backend host e.g `http://backend.com` is added to the url of the picture |
| `style` | optional | React style |
| `className` | optional | Class Name |

### Sources structure

```json5
{
  // default image source
  "defaultSource": {
    "url": "/some.jpg",
    "mime": "image/jpeg"
  },
  "formats": {
    "large": [
      {
        "url": "/some_large.jpg",
        "mime": "image/jpeg"
      },
      {
        "url": "/some_large.webp",
        "mime": "image/webp"
      }
      //...other formats
    ],
    // medium, small, thumbnail etc.
  }
}
```

### Media Mapping structure
Queries will be applied by the key to all nested formats
```json5
{
  large: '(min-width: 1440px)',
  medium: '(min-width: 960px)',
  //... optional small, thumbnail etc.
}
```

## License

MIT © [stovv](https://github.com/stovv)
