import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import { SIZES } from '../../../constants'

const ScreenHeaderBtn = (props) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={props.handlePress}>
      <Image source={props.iconUrl}
        resizeMode='cover'
        style={styles.btnImg(props.dimension)} />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn