import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, FONTFAMILY } from '../theme/theme';
import CustomIcon from '../components/CustomIcon';
import { RootState } from '../redux/store/dev';
import { useSelector } from 'react-redux';
import ProfileStack from './ProfileStack';
import MyNotificationStack from './MyNotificationStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';





const Tab = createBottomTabNavigator();



const TabNavigator = () => {

  const { isLoggedIn, user } = useSelector(
    (state: RootState) => state.user,
  );


  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.primaryBlackHex,
        tabBarInactiveTintColor: COLORS.primaryLightGreyHex,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarStyle: styles.tabBarStyle,


      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryBlackHex : COLORS.secondaryGreyHex
              }
            />
          ),
        }}></Tab.Screen>


      <Tab.Screen
        name="SearchTab"
        component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="search1"
              size={25}
              color={
                focused ? COLORS.primaryBlackHex : COLORS.secondaryGreyHex
              }
            />
          ),
        }}></Tab.Screen>


      <Tab.Screen
        name="Notification"
        component={MyNotificationStack}
        options={{
          title: 'Notifications',
          tabBarIcon: ({ focused, color, size }) => (
            <CustomIcon
              name="bell"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.secondaryGreyHex
              }
            />
          ),
        }}></Tab.Screen>


      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="user"
              size={25}
              color={
                focused ? COLORS.primaryBlackHex : COLORS.secondaryGreyHex
              }
            />
          ),
        }}></Tab.Screen>


    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    // position: 'absolute',
    backgroundColor: COLORS.primaryOrangeHex,
    borderTopWidth: 0,
    elevation: 0,
    // borderRadius: 25,
    // marginHorizontal: 10,
    // marginBottom: 10,
    padding: 5
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: FONTFAMILY.poppins_semibold,
    marginBottom: 5
  }

});

export default TabNavigator;
