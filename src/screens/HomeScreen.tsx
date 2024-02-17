import React, { useState, useEffect, useRef } from 'react';
import {
  Animated,
  ScrollView,
  StatusBar
} from 'react-native';
import { RootState } from '../redux/store/dev';
import { useSelector } from 'react-redux';
import { useShowGreeting } from '../hooks/useShowGreetings';
import { generalStyles } from './utils/generatStyles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import useGetUserLocation from '../hooks/useGetUserLocation';
import Categories from '../components/Categories';
import PropertyDetailScrollView from '../components/PropertyDetailScrollView';
import CategoryTypes from '../components/CategoryTypes';
import { useNavigation } from '@react-navigation/native';
import HomeSearchBar from '../components/HomeSearchBar';
import FilterModal from '../components/Modals/FilterModal';
import ZippyAlertButton from '../components/ZippyAlertButton';
import { COLORS } from '../theme/theme';

const searchProperties = [

  {
    id: 1,
    cover_image: "https://plus.unsplash.com/premium_photo-1673561231809-17f6f9ef09b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "test",
    name: "Ssange Apartments",
    category: "Apartments",
    price: "20000",
    location: "ssanga",
    user: {
      name: "Ssange",
      image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    number_of_rooms: "2",
    number_of_baths: "2",
    long: 32.57218290000001,
    lat: 0.3618281,
    comments: [],



  },
  {
    id: 2,
    cover_image: "https://plus.unsplash.com/premium_photo-1673561231809-17f6f9ef09b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "test",
    name: "Ssange Apartments",
    category: "Apartments",
    price: "20000",
    location: "ssanga",
    user: {
      name: "Ssange",
      image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    number_of_rooms: "2",
    number_of_baths: "2",
    long: 32.57218290000001,
    lat: 0.3618281,
    comments: [],



  },
  {
    cover_image: "https://plus.unsplash.com/premium_photo-1673561231809-17f6f9ef09b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "test",
    name: "Ssange Apartments",
    category: "Apartments",
    price: "20000",
    location: "ssanga",
    user: {
      name: "Ssange",
      image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    number_of_rooms: "2",
    number_of_baths: "2",
    id: 3,
    long: 32.57218290000001,
    lat: 0.3618281,
    comments: [],


  },
  {
    cover_image: "https://plus.unsplash.com/premium_photo-1673561231809-17f6f9ef09b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "test",
    name: "Ssange Apartments",
    category: "Apartments",
    price: "20000",
    location: "ssanga",
    user: {
      name: "Ssange",
      image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    number_of_rooms: "2",
    number_of_baths: "2",
    id: 4,
    long: 32.57218290000001,
    lat: 0.3618281,
    comments: [],


  },
  {
    cover_image: "https://plus.unsplash.com/premium_photo-1673561231809-17f6f9ef09b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
    description: "test",
    name: "Ssange Apartments",
    category: "Apartments",
    price: "20000",
    location: "ssanga",
    user: {
      name: "Ssange",
      image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    number_of_rooms: "2",
    number_of_baths: "2",
    id: 5,
    long: 32.57218290000001,
    lat: 0.3618281,
    comments: [],
  },

]


const HomeScreen = () => {

  const { user } = useSelector((state: RootState) => state.user);
  let greetings = useShowGreeting()

  const tabBarHeight = useBottomTabBarHeight();

  const { position } = useGetUserLocation()

  const navigation = useNavigation<any>();
  const [mapShown, setMapShown] = useState<boolean>(false);
  const [scrollAnimation] = useState(new Animated.Value(0));

  const [location, setLocation] = useState<string | undefined>(undefined);

  const [openPicker, setOpenPicker] = useState<boolean>(false);

  useEffect(() => {
    console.log('picker changed')
    console.log(openPicker)
  }, [openPicker])



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
