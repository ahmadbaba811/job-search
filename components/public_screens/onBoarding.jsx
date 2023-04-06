import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants';
import styles from '../home/welcome/welcome.style';

function OnBoarding({ setLogin }) {


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent : "center" }}>
      <TouchableOpacity style={{
        backgroundColor: COLORS.primary,
        padding : SIZES.small
      }}
      onPress={() => {
        setLogin(true)
      }} >
        <Text style={{
          color: COLORS.white,

        }}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OnBoarding;