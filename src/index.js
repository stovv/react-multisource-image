import React, { Fragment } from 'react'
import { object, shape, string, arrayOf, any } from 'prop-types'

const MultiSourceImage = ({
  sources: { defaultSource, formats },
  mediaMapping = {},
  alt,
  backend = '',
  children,
  ignore = [],
  ...props
}) => {
  return (
    <picture>
      {Object.keys(formats).map((formatType, index) => {
        return Object.values(formats[formatType])
          .sort((a, b) => {
            if (a.mime === b.mime) {
              return 0
            }

            if (a.mime === 'image/webp') {
              return -1
            }

            if (b.mime === 'image/webp') {
              return 1
            }
            return 0
          })
          .map((format) => {
            if (ignore.includes(format.mime)) {
              return null
            }

            return (
              <Fragment key={index}>
                <source
                  media={mediaMapping[formatType]}
                  type={format.mime}
                  srcSet={`${backend}${format.url}`}
                />
              </Fragment>
            )
          })
      })}
      <img src={`${backend}${defaultSource.url}`} alt={alt} {...props}>
        {children}
      </img>
    </picture>
  )
}

const imgShape = shape({
  url: string.isRequired,
  mime: string.isRequired,
  ...any
})

MultiSourceImage.propTypes = {
  sources: shape({
    defaultSource: imgShape.isRequired,
    formats: shape({
      large: arrayOf(imgShape),
      medium: arrayOf(imgShape),
      small: arrayOf(imgShape),
      thumbnail: arrayOf(imgShape)
    })
  }).isRequired,
  alt: string.isRequired,
  style: object,
  backend: string,
  className: string,
  ignore: arrayOf(string),
  ...any
}

export default MultiSourceImage
