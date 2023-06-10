import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return(
        <View style={{
            flex: 1,
            justifyContent: 'center'
        }}>
            <Text style={{
                fontSize: 35,
                textAlign: 'center'
            }}>
                Contador: { contador }
            </Text>
            <Button
                title='Click + 1'
                onPress={ () => setContador( contador + 1 ) }
            />
            <Text>
                '
            </Text>
            <Button
                title='Click - 1'
                onPress={ () => setContador( contador - 1 ) }
            />
        </View>
    )
}
