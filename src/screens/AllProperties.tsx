import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import useFetchInfinite from '../hooks/useFetchInfinite';
import { generalStyles } from './utils/generatStyles';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PropertyFlatList from '../components/PropertyFlatList';
import { GET_ALL_PROPERTIES_BY_PAGINATION, GET_REGISTERED_OWNER_PROPERTY_BY_PAGE } from './utils/constants/routes';

const properties = [

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

const isFetching = false;

const AllProperties: React.FC = () => {

    const { isError, data, error, fetchNextPage, hasNextPage, isFetching } = useFetchInfinite("allProperties", GET_ALL_PROPERTIES_BY_PAGINATION);
    console.log("=========== data=========================")
    console.log(data?.pages[0].total)
    console.log("==========data=====================")


    //flat the data
    // const flattenedData = data?.pages.flatMap(page => page.results) || [];
    const propertyData = data?.pages.flatMap(page => page.data);

    console.log("=============property data length==========================")
    console.log(propertyData);
    console.log("=============property data length==========================")

    const loadMoreData = () => {
        if (hasNextPage && !isFetching && data?.pages[0].total !== propertyData?.length) return fetchNextPage()
    };


    return (
        <SafeAreaView style={[generalStyles.ScreenContainer]}>

            {/* {
                data && propertyData?.length === 0 && <EmptyListAnimation
                    title={'No Properties Yet'} />
            } */}

            <PropertyFlatList
                propertyData={properties}
                loadMoreData={loadMoreData}
                isFetching={isFetching}
            />

        </SafeAreaView >
    )
}

export default AllProperties

const styles = StyleSheet.create({})