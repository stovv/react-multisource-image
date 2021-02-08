import React, { Fragment } from 'react'
import { object, shape, string, arrayOf, any } from 'prop-types'

export const MultiSourceImage = ({
  sources: { defaultSource, formats },
  mediaMapping = {},
  alt,
  backend = '',
  children,
  ...props
}) => {
  return (
    <picture>
      {Object.keys(formats).map((formatType, index) => {
        return formats[formatType].map((format) => {
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
  sources: shape.isRequired({
    defaultSource: imgShape.isRequired,
    formats: shape({
      large: arrayOf(imgShape),
      medium: arrayOf(imgShape),
      small: arrayOf(imgShape),
      thumbnail: arrayOf(imgShape)
    })
  }),
  alt: string.isRequired,
  style: object,
  backend: string,
  className: string,
  ...any
}
