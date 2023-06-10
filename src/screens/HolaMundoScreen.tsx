import React from 'react'
import { Text, View } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center'
    }}>
    <Text style={{
        fontSize: 50,
        textAlign: 'center'
    }}>
      Hola mundo en dispositivo físico y emulador!!!
    </Text>
  </View>
  )
}
