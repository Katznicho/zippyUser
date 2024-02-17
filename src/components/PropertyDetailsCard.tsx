import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react'
import { generalStyles } from '../screens/utils/generatStyles';
import { COLORS, FONTSIZE } from '../theme/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { limitDescription } from '../screens/utils/helpers/helpers';
import { useNavigation } from '@react-navigation/native';


const PropertyDetailsCard = ({ property }: any) => {

    const [details, setDetails] = useState(
        {
            cover_image: "https://plus.unsplash.com/premium_photo-1673561231809-17f6f9ef09b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
            name: "Ssanga Apartments",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur dolore sed nostrum corrupti alias rem, veniam explicabo iure mollitia eveniet!",
            category: "Apartments",
            price: "20000",
            location: "kampala , uganda , ssanga",
            user: {
                name: "Ssange",
                image: "https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D"
            },
            number_of_rooms: "2",
            number_of_baths: "2",
            rating: 4,
            latitude: 0.122,
            longitude: 0.123

        }
    )

    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            activeOpacity={1}
            style={[styles.container]}
            onPress={() => navigation.navigate("PropertyDetails", { item: details })}
        >
            <Image
                source={{ uri: details?.cover_image }}
                style={styles.imageStyles}
            />
            {/* </View> */}
            <View>

                <View style={[styles.viewStyles]}>
                    <Text style={[generalStyles.CardTitle]}>{details?.name}</Text>

                </View>

                <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "space-between", marginHorizontal: 5 }]}>
                    <Text style={[generalStyles.CardSubtitle]}>{details?.category}</Text>
                    <View style={[generalStyles.flexStyles, { alignItems: "center" }]}>
                        {
                            Array(details?.rating).fill(0).map((_, index) => (
                                <AntDesign
                                    key={index}
                                    name="star"
                                    size={12}
                                    color={"gold"}
                                />
                            ))
                        }
                    </View>

                </View>

                <View style={[{ marginLeft: 3, marginVertical: 2 }]}>
                    <Text style={[generalStyles.CardSubtitle]}>{limitDescription(details?.description, 10)}</Text>
                </View>

                <View style={[generalStyles.flexStyles, { alignItems: "center" }]}>
                    <Entypo name="location-pin"
                        size={20}
                        color={COLORS.primaryOrangeHex}
                    />
                    <Text style={[generalStyles.CardTitle, { fontSize: FONTSIZE.size_10 }]}>{details?.location}</Text>
                </View>

                <View style={[generalStyles.flexStyles, { alignItems: "center" }]}>
                    <View style={[generalStyles.flexStyles, { alignItems: "center" }]}>
                        <MaterialIcons name="meeting-room"
                            size={18}
                            color={COLORS.primaryOrangeHex}
                            style={{ marginHorizontal: 3 }}

                        />

                        <Text style={[generalStyles.CardTitle, { fontSize: FONTSIZE.size_10, marginTop: 5 }]}>{details?.number_of_rooms} rooms</Text>

                    </View>
                    <View style={[generalStyles.flexStyles, { alignItems: "center", justifyContent: "center" }]}>

                        <FontAwesome name="bathtub"
                            size={18}
                            color={COLORS.primaryOrangeHex}
                            style={{ marginHorizontal: 5 }}
                        />

                        <Text style={[generalStyles.CardTitle, { fontSize: FONTSIZE.size_10, marginTop: 5 }]}>{details?.number_of_baths} bathrooms</Text>

                    </View>
                </View>

                <View style={[generalStyles.flexStyles, { alignItems: "center", marginVertical: 5, marginHorizontal: 3 }]}>
                    <Text style={[generalStyles.CardTitle]}> UGX {details.price}</Text>
                    <Text style={[generalStyles.CardSubtitle]}>/month</Text>
                </View>


            </View>

        </TouchableOpacity>
    )
}

export default PropertyDetailsCard

const styles = StyleSheet.create({
    imageStyles: {
        width: 200,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
        // borderRadius: 10
    },
    container: {
        width: 200,
        height: 270,
        elevation: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: COLORS.primaryBlackHex,
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        alignContent: 'center',
        alignItems: 'center',
    },
    viewStyles: {
        marginHorizontal: 5,
        // marginVertical: 2
    }
})