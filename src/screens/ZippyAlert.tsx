import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { generalStyles } from './utils/generatStyles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const ZippyAlert = () => {
    return (
        <KeyboardAwareScrollView
            style={[{ flex: 1, width: '100%' }, generalStyles.ScreenContainer]}
            keyboardShouldPersistTaps="always"
        >
            <ScrollView
                contentContainerStyle={{
                    margin: 20,
                }}
                keyboardShouldPersistTaps="always"
            >
                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text style={[{ fontSize: 20 }, generalStyles.textStyle]}>
                        Zippy Alert
                    </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text style={[generalStyles.textStyle]}>
                        Create a zippy alert to get notified when property is available and matches your search
                    </Text>
                </View>
            </ScrollView>

        </KeyboardAwareScrollView>
    )
}

export default ZippyAlert

