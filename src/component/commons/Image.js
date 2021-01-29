import React from 'react'
import { Image } from 'react-native'

export const Image = ({ children, w, h, isBackground, onPress }) => {
  return (
    <Image onPress={onPress}>
      {children}
    </Image>
  )
}
