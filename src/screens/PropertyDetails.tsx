import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Linking } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation, useRoute } from '@react-navigation/native'
import useGetUserLocation from '../hooks/useGetUserLocation'
import { generalStyles } from './utils/generatStyles'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import GradientBGIcon from '../components/GradientBGIcon';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { onMakeCall } from './utils/helpers/helpers'
import { PUBLIC_STORAGE } from './utils/constants/constants'




const StationDetails = () => {

    const navigation = useNavigation<any>();

    const { data } = useRoute<any>().params;

    const { position } = useGetUserLocation();



    const openMapsForDirections = () => {
        const destination = `${data?.latitude},${data?.longitude}`;
        // console.log(destination)
        const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
        return Linking.openURL(url);
    };




    return (
        <KeyboardAwareScrollView
            style={[{ flex: 1, width: '100%' }, generalStyles.ScreenContainer]}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={{ paddingBottom: 100 }}
        >
            {/* book now button */}
            <View style={[generalStyles.absoluteStyles, { right: 10 }]}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={[generalStyles.loginContainer, { width: "100%" }]}
                    onPress={() => navigation.navigate("BookNow", { data })}
                >
                    <Text style={generalStyles.loginText}>{'Book Now'}</Text>
                </TouchableOpacity>
            </View>
            {/* book now button */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                // contentContainerStyle={{ paddingBottom: tabBarHeight }}
                keyboardShouldPersistTaps="always"
            >
                {/* show background image */}
                <ImageBackground
                    source={{ uri: `${PUBLIC_STORAGE}/properties/${data?.cover_image}` }}
                    style={styles.dataBackgroundImage}
                >
                    {/* back handler */}
                    <View style={styles.ImageHeaderBarContainerWithBack}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                navigation.goBack()
                            }}>
                            <GradientBGIcon
                                name="left"
                                color={COLORS.primaryOrangeHex}
                                size={FONTSIZE.size_16}
                            />
                        </TouchableOpacity>


                    </View>

                    {/* back handler */}

                    {/* more details */}


                    {/* more details */}
                </ImageBackground>
                {/* show background */}
                <View style={styles.cardContainer}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[generalStyles.loginContainer, {
                            marginTop: 5,
                        }]}
                        onPress={() => openMapsForDirections()}
                    >
                        <Text style={generalStyles.loginText}>{'Take me there'}</Text>
                    </TouchableOpacity>

                    <View style={[generalStyles.bottomHairline, styles.hairLineStyles]} />
                    <View style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: "center" }]}>
                        <View>
                            <Text style={styles.CardTitle} >Name</Text>
                            <Text style={styles.CardSubtitle}>{data?.name ?? data?.codeName}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Distance</Text>
                            <Text style={styles.CardSubtitle}>
                                {/* {calculateDistance(position.latitude, position.longitude, parseFloat(data?.latitude), parseFloat(data?.longitude))}
                 kms away */}
                                10 kms away
                            </Text>
                        </View>

                    </View>
                    <View>
                        <View>
                            <Text style={styles.CardTitle} >Location</Text>
                            <Text style={styles.CardSubtitle}>{data?.location}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Payment Period</Text>
                            <Text style={styles.CardSubtitle}>{data?.payment_period?.name}</Text>
                        </View>

                    </View>

                    <View>
                        <View>
                            <Text style={styles.CardTitle} >Price</Text>
                            <Text style={styles.CardSubtitle}>{data?.currency?.name} {data?.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Total Rooms</Text>
                            <Text style={styles.CardSubtitle}>{data?.number_of_rooms}</Text>
                        </View>

                    </View>

                    {/* actions and total bookings */}

                    <View style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: "center" }]} >
                        <View>
                            <Text style={styles.CardTitle} >Total Bookings</Text>
                            <Text style={styles.CardSubtitle}>0</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Actions</Text>
                            {/* actions area */}
                            <View style={[generalStyles.flexStyles, { justifyContent: 'center', alignItems: "center" }]}>
                                <AntDesign name="delete"
                                    size={25}
                                    color={COLORS.primaryRedHex}
                                    style={styles.spacingStyles}
                                />
                                <AntDesign name="edit"
                                    size={25}
                                    color={COLORS.primaryOrangeHex}
                                    style={styles.spacingStyles}
                                />
                            </View>
                            {/* actions area */}
                        </View>

                    </View>
                    {/* actions and total bookings */}

                    <View >
                        <View>
                            <Text style={styles.CardTitle} >Total Bedrooms</Text>
                            <Text style={styles.CardSubtitle}>{data?.number_of_beds}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Total Bathrooms</Text>
                            <Text style={styles.CardSubtitle}>{data?.number_of_baths}</Text>
                        </View>

                    </View>
                    <View style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: "center" }]}>
                        <View>
                            <Text style={styles.CardTitle} >Status</Text>
                            <Text style={styles.CardSubtitle}>{data?.status?.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Zippy ID</Text>
                            <Text style={styles.CardSubtitle}>{data?.zippy_id}</Text>
                        </View>

                    </View>

                    <View >
                        <View>
                            <Text style={styles.CardTitle} >Description</Text>
                            <Text style={styles.CardSubtitle}>{data?.description}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Year Built</Text>
                            <Text style={styles.CardSubtitle}>{data?.year_built}</Text>
                        </View>

                    </View>

                    <View >
                        <View>
                            <Text style={styles.CardTitle} >Furnishing Status</Text>
                            <Text style={styles.CardSubtitle}>{data?.furnishing_status}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Property Size</Text>
                            <Text style={styles.CardSubtitle}>{data?.property_size}</Text>
                        </View>

                    </View>

                    <View style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: "center" }]} >
                        <View>
                            <Text style={styles.CardTitle} >Approved</Text>
                            <Text style={styles.CardSubtitle}>{data?.is_approved ? 'Yes' : "No"}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Availability</Text>
                            <Text style={styles.CardSubtitle}>{data?.is_available ? "Yes" : "No"}</Text>
                        </View>

                    </View>
                    <View style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: "center" }]} >
                        <View>
                            <Text style={styles.CardTitle} >Total Likes</Text>
                            <Text style={styles.CardSubtitle}>{0}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Comments</Text>
                            <Text style={styles.CardSubtitle}>{0}</Text>
                        </View>

                    </View>
                    <View style={[generalStyles.bottomHairline, styles.hairLineStyles]} />
                    <View style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: "center" }]} >
                        <View>
                            <Text style={styles.CardTitle} >Services</Text>
                            {/* <Text style={styles.CardSubtitle}>{data?.is_approved ? 'Yes' : "No"}</Text> */}
                            {
                                data?.services?.map((service: any, index: number) => {
                                    return (
                                        <Text style={styles.CardSubtitle} key={index}>{service?.name}</Text>
                                    )
                                })
                            }
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Amentities</Text>
                            {
                                data?.amenities?.map((amentity: any, index: number) => {
                                    return (
                                        <Text style={styles.CardSubtitle} key={index}>{amentity?.name}</Text>
                                    )
                                })
                            }
                        </View>

                    </View>
                    <View style={[generalStyles.bottomHairline, styles.hairLineStyles]} />

                    {/* public facilties */}
                    <View >
                        <View>
                            <Text style={styles.CardTitle} >Public facilties</Text>
                            {/* <Text style={styles.CardSubtitle}>{data?.is_approved ? 'Yes' : "No"}</Text> */}
                            {
                                data?.public_facilities?.map((facility: any, index: number) => {
                                    return (
                                        <Text style={styles.CardSubtitle} key={index}>{facility}</Text>
                                    )
                                })
                            }
                        </View>


                    </View>
                    <View style={[generalStyles.bottomHairline, styles.hairLineStyles]} />
                    {/* public facilties */}

                    {/* owner details */}

                    <View style={[generalStyles.flexStyles, { justifyContent: 'space-between', alignItems: "center" }]} >
                        <View>
                            <Text style={styles.CardTitle} >Owner</Text>
                            <Text style={styles.CardSubtitle}>{data?.owner?.name}</Text>
                        </View>
                        <View>
                            <Text style={styles.CardTitle} >Phone Number</Text>
                            <Text style={styles.CardSubtitle}>{data?.owner?.phone_number}</Text>
                        </View>

                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[generalStyles.loginContainer, { marginTop: 0, padding: 10 }]}
                        onPress={() => onMakeCall(data?.owner?.phone_number)}>
                        <Text style={generalStyles.loginText}>{'Call Owner'}</Text>
                    </TouchableOpacity>
                    {/* owner details */}








                </View>
                {/* {renderMap()} */}

            </ScrollView>

        </KeyboardAwareScrollView>
    )
}

export default StationDetails

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.primaryBlackHex,
        borderRadius: 10,
        padding: 10,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5,
        margin: 5,
        // marginHorizontal: 5
    },
    hairLineStyles: {
        width: "80%",
        // marginHorizontal: 40,
        marginVertical: 10
    },
    CardTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_14,
    },
    CardSubtitle: {
        fontFamily: FONTFAMILY.poppins_light,
        color: COLORS.primaryWhiteHex,
        fontSize: FONTSIZE.size_10,
        // marginHorizontal: SPACING.space_10
    },
    ImageHeaderBarContainerWithBack: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        aligndatas: 'center',
        justifyContent: 'space-between',
    },
    dataBackgroundImage: {
        width: '100%',
        aspectRatio: 25 / 15,
        justifyContent: 'space-between',
    },
    // Add a style for the map
    map: {
        height: 300,
        marginVertical: 10,
    },
    spacingStyles: {
        marginHorizontal: 5,
        // marginVertical: 5
    },
})