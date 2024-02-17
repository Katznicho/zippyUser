import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { generalStyles } from '../screens/utils/generatStyles'

const ZippyAlertButton = () => {
    const navigation = useNavigation<any>()
    return (
        <View style={[{ marginHorizontal: 10 }]}>
            <TouchableOpacity
                activeOpacity={1}
                style={[generalStyles.loginContainer, { width: "100%" }]}
                onPress={() => navigation.navigate("ZippyAlert")}
            >
                <Text style={generalStyles.loginText}>{'Zippy Alert'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ZippyAlertButton

