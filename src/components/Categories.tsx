import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react'
import { generalStyles } from '../screens/utils/generatStyles';
import { useNavigation } from '@react-navigation/native';
import { useApi } from '../hooks/useApi';

const categories = [
    {
        id: 1,
        name: "Apartments",
        logo: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        id: 2,
        name: "Houses",
        logo: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        id: 3,
        name: "Villas",
        logo: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        id: 4,
        name: "Rentals",
        logo: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"

    },
    {
        id: 5,
        name: "Flats",
        logo: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
    }
];

const Categories = () => {
    const navigation = useNavigation<any>()

    const { data, error, isLoading, } = useApi<any>({
        endpoint: '/getAllCategories',
        params: {
            "account": "hasWalletAccount"
        },
        queryOptions: {
            enabled: true,
            refetchInterval: 2000,
            refetchOnWindowFocus: true,
            refetchOnMount: true,
        },
    })


    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                isLoading ? null : data?.data?.map((item: any) => (

                    <TouchableOpacity
                        key={item.id}
                        // style={[generalStyles.CardContainer]}
                        activeOpacity={1}
                        style={styles.container}
                        onPress={() => navigation.navigate("AllProperties")}
                    >
                        <Image
                            source={{ uri: item?.image }}
                            style={styles.imageStyles}
                        />
                        <Text style={[generalStyles.CardSubtitle]}>{item.name}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({
    imageStyles: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10
    }
})