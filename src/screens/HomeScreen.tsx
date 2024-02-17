import React, { useState} from 'react';
import {
  ScrollView,
} from 'react-native';
import { generalStyles } from './utils/generatStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Categories from '../components/Categories';
import PropertyDetailScrollView from '../components/PropertyDetailScrollView';
import CategoryTypes from '../components/CategoryTypes';
import HomeSearchBar from '../components/HomeSearchBar';
import FilterModal from '../components/Modals/FilterModal';
import ZippyAlertButton from '../components/ZippyAlertButton';


const HomeScreen = () => {



  const tabBarHeight = useBottomTabBarHeight();

  const [openPicker, setOpenPicker] = useState<boolean>(false);

  return (
    <KeyboardAwareScrollView
      style={[{ flex: 1, width: '100%' }, generalStyles.ScreenContainer]}
      keyboardShouldPersistTaps="always"
    >

      {/* floating button */}
      <ZippyAlertButton />
      {/* floating button */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ paddingBottom: tabBarHeight }}
      >
        {/* search bar */}
        <HomeSearchBar
          openPicker={openPicker}
          setOpenPicker={setOpenPicker}
        />
        {/* search bar */}

        {/* categories */}
        <Categories />
        {/* categories */}



        {/* near me*/}
        <CategoryTypes
          text="Near You"
          screen="AllProperties"
        />
        <PropertyDetailScrollView

        />
        {/* near me */}

        {/* recent */}
        <CategoryTypes
          text="Recent"
          screen="AllProperties"
        />
        <PropertyDetailScrollView />
        {/* recent */}

        {/* recent */}
        <CategoryTypes
          text="Popular"
          screen="AllProperties"
        />
        <PropertyDetailScrollView />
        {/* recent */}

        {/* filter modal */}
        <FilterModal
          openPicker={openPicker}
          setOpenPicker={setOpenPicker}
        />
        {/* filter modal */}
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};



export default HomeScreen;
