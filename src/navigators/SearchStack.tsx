import { StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import searchScreen from '../screens/searchscreens/SearchScreen';
import { generalStyles } from '../screens/utils/generatStyles';
import { COLORS } from '../theme/theme';
import ArrowBack from '../components/ArrowBack';
import HomeSearchBar from '../components/HomeSearchBar';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
    const [openPicker, setOpenPicker] = useState<boolean>(false);
    return (
        <Stack.Navigator initialRouteName="SearchScreen">
            <Stack.Screen
                name="SearchScreen"
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
                    header: () => (
                        <HomeSearchBar
                            openPicker={openPicker}
                            setOpenPicker={setOpenPicker}
                        />
                    ),
                }}
            >

            </Stack.Screen>

        </Stack.Navigator>
    )
}

export default SearchStack

const styles = StyleSheet.create({})