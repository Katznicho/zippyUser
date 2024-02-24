import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import searchScreen from '../screens/searchscreens/SearchScreen';
import { generalStyles } from '../screens/utils/generatStyles';
import { COLORS } from '../theme/theme';
import ArrowBack from '../components/ArrowBack';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen
                name="Search"
                component={searchScreen}
                options={{
                    title: 'Search',
                    headerStyle: generalStyles.headerStyle,
                    headerTitleStyle: generalStyles.titleHeaderStyles,
                    headerTintColor: COLORS.primaryBlackHex,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <ArrowBack />

                    ),
                }}
            >

            </Stack.Screen>

        </Stack.Navigator>
    )
}

export default SearchStack

const styles = StyleSheet.create({})