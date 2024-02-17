import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import PropertyDetailsCard from './PropertyDetailsCard'


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
const PropertyDetailScrollView = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            {
                properties.map((item) => (
                    <PropertyDetailsCard
                        key={item.id}
                        property={item}
                    />
                ))
            }

        </ScrollView>
    )
}

export default PropertyDetailScrollView

const styles = StyleSheet.create({})