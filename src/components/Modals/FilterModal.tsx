import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useRef, useEffect, useState } from 'react';
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS, FONTFAMILY } from '../../theme/theme';
import { generalStyles } from '../../screens/utils/generatStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Checkbox } from 'react-native-ui-lib';
import { showMessage } from 'react-native-flash-message';
import { RootState } from '../../redux/store/dev';
import { useSelector } from 'react-redux';
import { CREATE_ZIPPY_ALERT } from '../../screens/utils/constants/routes';
import { ActivityIndicator } from '../ActivityIndicator';
import { useNavigation } from '@react-navigation/native';

type Props = {
    openPicker: boolean;
    setOpenPicker: (openPicker: boolean) => void;
    title: string,
    categories: any,
    amentities: any,
    services: any,
    setZippyAlert: (zippyAlert: any) => void,
    zippyAlert: any,
    onClearFilter: () => void,
    bedRooms: any,
    bathRooms: any,
    onCreateZippyAlert: () => void
};

const FilterModal: React.FC<Props> = ({ openPicker, setOpenPicker, title = "Filters", categories, amentities, services, setZippyAlert, zippyAlert, onClearFilter, bedRooms, bathRooms, onCreateZippyAlert }: Props) => {
    const { user, authToken } = useSelector((state: RootState) => state.user);

    const refRBSheet = useRef<any>();

    useEffect(() => {
        if (openPicker) {
            refRBSheet.current?.open();
        } else {
            refRBSheet.current?.close();
        }
    }, [openPicker]);

    const [loading, setLoading] = useState<boolean>(false)
    const navigation = useNavigation<any>()



    // const onCreateZippyAlert = () => {
    //     console.log("=======================", zippyAlert)
    //     try {
    //         if (
    //             zippyAlert.name === "" ||
    //             zippyAlert.email === "" ||
    //             zippyAlert.phone === "" ||
    //             zippyAlert.contactOptions.length === 0 ||
    //             zippyAlert.amentities.length === 0 ||
    //             zippyAlert.services.length === 0 ||
    //             zippyAlert.propertyType === "" ||
    //             zippyAlert.minimumPrice === "" ||
    //             zippyAlert.maximumPrice === ""

    //         ) {

    //             return showMessage({
    //                 message: "All fields are required",
    //                 type: "danger",
    //                 autoHide: true,
    //                 duration: 3000,
    //             })
    //         }
    //         else {
    //             setLoading(true)
    //             const headers = {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${authToken}`
    //             }

    //             const formData = new FormData();
    //             formData.append("name", zippyAlert.name);
    //             formData.append("email", zippyAlert.email);
    //             formData.append("phone", zippyAlert.phone);
    //             formData.append("property_type", zippyAlert.propertyType);
    //             formData.append("category_id", zippyAlert.propertyTypeID);
    //             formData.append("minimum_price", zippyAlert.minimumPrice);
    //             formData.append("maximum_price", zippyAlert.maximumPrice);

    //             //services loop through and also append them as an array
    //             zippyAlert?.services?.forEach((service: any) => {
    //                 formData.append("services[]", service)
    //             })

    //             //amenities loop through and also append them as an array
    //             zippyAlert?.amenities?.forEach((amenity: any) => {
    //                 formData.append("amenities[]", amenity)
    //             })

    //             //contact options loop through and also append them as an array
    //             // Loop through and append contact options as an array
    //             zippyAlert?.contactOptions?.forEach((option: any) => {
    //                 formData.append("contact_options[]", option)
    //             })

    //             fetch(CREATE_ZIPPY_ALERT, {
    //                 method: 'POST',
    //                 headers,
    //                 body: formData
    //             }).then((res) => res.json()).then((data) => {
    //                 setLoading(false)
    //                 if (data?.response == "success") {
    //                     showMessage({
    //                         message: "Alert created successfully",
    //                         description: "Alert created successfully",
    //                         type: "success",
    //                         autoHide: true,
    //                         duration: 3000,
    //                     })
    //                     return navigation.navigate("ZippyAlertStack")
    //                 }
    //                 else {
    //                     if (data?.alert_max == true) {
    //                         return showMessage({
    //                             message: "Maximum number of alerts reached",
    //                             description: "You can only create 5 alerts",
    //                             type: "info",
    //                             autoHide: true,
    //                             duration: 3000,
    //                         })
    //                     }
    //                 }
    //             }).catch((err) => {

    //             })
    //         }

    //     } catch (error) {
    //         console.log(error)
    //         return showMessage({
    //             message: "Something went wrong",
    //             type: "danger",
    //             autoHide: true,
    //             duration: 3000,
    //         })
    //     }
    // }




    return (
        <RBSheet
            ref={refRBSheet}
            height={700}
            closeOnDragDown={false}
            closeOnPressMask={false}
            // openDuration={250}
            customStyles={{
                container: {
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    backgroundColor: COLORS.primaryBlackHex,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    elevation: 10
                },

                wrapper: {
                    backgroundColor: 'transparent',
                },
                draggableIcon: {
                    backgroundColor: '#000',
                },
            }}

        >
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setOpenPicker(false)}
                    style={[generalStyles.centerContent, { position: 'absolute', top: 10, right: 10 }]}
                >
                    <AntDesign
                        name="close"
                        size={25}
                        color={COLORS.primaryRedHex}
                        onPress={() => setOpenPicker(false)}
                    />

                </TouchableOpacity>
                <View style={[generalStyles.formContainer]}>
                    <View>
                        <Text style={generalStyles.formInputTextStyle}>
                            {title}
                        </Text>
                    </View>
                </View>
                <View style={[styles.hairLineStyles]} />

                {/* property categories */}
                <View style={[styles.viewStyles]}>
                    <View>
                        <Text style={generalStyles.CardTitle}>Property Type</Text>
                    </View>
                    <View>
                        <Text style={generalStyles.CardSubtitle}>
                            Select your desired property type
                        </Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            categories?.map((propertyType: any) => (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    key={propertyType.id}
                                    style={[styles.touchableStyles, {
                                        backgroundColor: zippyAlert?.propertyTypeID === propertyType.id ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                    }]}
                                    onPress={() => setZippyAlert({ ...zippyAlert, propertyType: propertyType.name, propertyTypeID: propertyType.id })}
                                >
                                    <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>{propertyType.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                {/* property categories */}


                <View style={[styles.hairLineStyles]} />

                {/* price range */}

                <View style={[styles.viewStyles]}>
                    <View>
                        <Text style={generalStyles.CardTitle}>Price Ranges</Text>
                    </View>
                    <View>
                        <Text style={generalStyles.CardSubtitle}>
                            Select your price range
                        </Text>
                    </View>
                    {/* price ranges */}
                    <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'center' }]}>

                        <View style={styles.formContainer}>
                            <View>
                                <Text style={[generalStyles.formInputTextStyle, styles.labelStyles]}>
                                    Minimum Price*</Text>

                            </View>
                            <View>
                                <TextInput
                                    style={[generalStyles.formInput, styles.borderStyles]}
                                    placeholderTextColor={COLORS.primaryWhiteHex}
                                    keyboardType="number-pad"
                                    placeholder={'enter minimum price'}
                                    onChangeText={text => setZippyAlert((prev: any) => {
                                        return { ...prev, minimumPrice: text }
                                    })}
                                    value={zippyAlert?.minimumPrice}
                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"

                                />
                            </View>



                        </View>


                        <View style={styles.formContainer}>
                            <View>
                                <Text style={[generalStyles.formInputTextStyle, styles.labelStyles]}>
                                    Maximum Price*</Text>
                            </View>
                            <View>
                                <TextInput
                                    style={[generalStyles.formInput, styles.borderStyles]}
                                    placeholderTextColor={COLORS.primaryWhiteHex}
                                    keyboardType="number-pad"
                                    placeholder={'enter maximum price'}
                                    onChangeText={text => setZippyAlert((prev: any) => {
                                        return { ...prev, maximumPrice: text }
                                    })}
                                    value={zippyAlert?.maximumPrice}
                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"

                                />
                            </View>


                        </View>

                    </View>
                    {/* price ranges */}
                </View>
                {/* price range */}
                <View style={[styles.hairLineStyles]} />

                {/* bedrooms */}
                <View style={[styles.viewStyles]}>
                    <View>
                        <Text style={generalStyles.CardTitle}>BedRooms and Bathrooms</Text>
                    </View>
                    <View>
                        <Text style={generalStyles.CardSubtitle}>
                            Select your desired bedrooms
                        </Text>
                    </View>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal
                    >
                        {
                            bedRooms?.map((room: any) => (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    key={room.id}
                                    style={[styles.circleStyles, {
                                        backgroundColor: zippyAlert?.selectedBedRoom === room.name ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                    }]}
                                    onPress={() => setZippyAlert({ ...zippyAlert, selectedBedRoom: room.name })}
                                >
                                    <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>{room.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                    <View>
                        <Text style={generalStyles.CardSubtitle}>
                            Select your desired bathrooms
                        </Text>
                    </View>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal
                    >
                        {
                            bathRooms?.map((room: any) => (
                                <TouchableOpacity
                                    activeOpacity={1}
                                    key={room.id}
                                    style={[styles.circleStyles, {
                                        backgroundColor: zippyAlert?.selectedBathRooms === room.name ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                    }]}
                                    onPress={() => setZippyAlert({ ...zippyAlert, selectedBathRooms: room.name })}
                                >
                                    <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>{room.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                {/* bedroooms */}

                {/* property amentities */}
                <View style={[styles.viewStyles]}>
                    <View>
                        <Text style={generalStyles.CardTitle}>Property Amentities</Text>
                    </View>
                    <View>
                        <Text style={generalStyles.CardSubtitle}>
                            Select your desired property amentities
                        </Text>
                    </View>
                    <View>
                        {
                            amentities?.map((item: any) => {
                                return (
                                    <Checkbox
                                        key={item.id}
                                        label={item.name}
                                        value={zippyAlert.amentities?.includes(item.id)}
                                        color={COLORS.primaryOrangeHex}
                                        containerStyle={styles.viewStyles}
                                        onValueChange={(isChecked: boolean) => {
                                            // Check if the amenity ID is already in the array
                                            const isAmenityInArray = zippyAlert?.amentities?.includes(item.id);

                                            // Create a new array based on the checkbox state
                                            let updatedAmenities: any[];

                                            if (isChecked && !isAmenityInArray) {
                                                // Add the amenity ID to the array if the checkbox is checked and the ID is not present
                                                updatedAmenities = [...(zippyAlert?.amentities || []), item.id];
                                            } else if (!isChecked && isAmenityInArray) {
                                                // Remove the amenity ID from the array if the checkbox is unchecked and the ID is present
                                                updatedAmenities = (zippyAlert?.amenities || []).filter((id: string) => id !== item.id);
                                            } else {
                                                // No change needed if the checkbox state and array state are consistent
                                                updatedAmenities = zippyAlert?.amentities;
                                            }

                                            // Update the state
                                            setZippyAlert((prev: any) => {
                                                return { ...prev, amentities: updatedAmenities };
                                            });
                                        }}
                                    />
                                );
                            })


                        }
                    </View>
                </View>
                {/* property amentities */}
                <View style={[styles.hairLineStyles]} />

                {/* property services */}
                <View style={[styles.viewStyles]}>
                    <View>
                        <Text style={generalStyles.CardTitle}>Property Services</Text>
                    </View>
                    <View>
                        <Text style={generalStyles.CardSubtitle}>
                            Select your desired property services
                        </Text>
                    </View>
                    <View>
                        {
                            services?.map((item: any) => {
                                return (
                                    <Checkbox
                                        key={item.id}
                                        label={item.name}
                                        value={zippyAlert.services?.includes(item.id)}
                                        color={COLORS.primaryOrangeHex}
                                        containerStyle={styles.viewStyles}
                                        onValueChange={(isChecked: boolean) => {
                                            // Check if the service ID is already in the array
                                            const isServiceInArray = zippyAlert.services?.includes(item.id);

                                            // Create a new array based on the checkbox state
                                            let updatedServices: any[];

                                            if (isChecked && !isServiceInArray) {
                                                // Add the service ID to the array if the checkbox is checked and the ID is not present
                                                updatedServices = [...(zippyAlert.services || []), item.id];
                                            } else if (!isChecked && isServiceInArray) {
                                                // Remove the service ID from the array if the checkbox is unchecked and the ID is present
                                                updatedServices = (zippyAlert.services || []).filter((id: string) => id !== item.id);
                                            } else {
                                                // No change needed if the checkbox state and array state are consistent
                                                updatedServices = zippyAlert.services;
                                            }

                                            // Update the state
                                            setZippyAlert((prev: any) => {
                                                return { ...prev, services: updatedServices };
                                            });
                                        }}
                                    />
                                );
                            })

                        }
                    </View>
                </View>
                {/* property services */}

                <View style={[styles.hairLineStyles]} />

                {loading && <ActivityIndicator />}

                <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-around' }]}>

                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={onClearFilter}
                        style={[styles.touchableStyles, { backgroundColor: COLORS.primaryRedHex }]}
                    >
                        <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>Clear All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={1}
                        style={[styles.touchableStyles, { backgroundColor: COLORS.primaryOrangeHex }]}
                        onPress={() => {
                            setOpenPicker(false)
                            return onCreateZippyAlert()
                        }}
                    >
                        <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>Create Alert</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>

        </RBSheet >
    )
}

export default FilterModal

const styles = StyleSheet.create({
    formInput: {
        color: COLORS.primaryWhiteHex,
        fontSize: 15,
        borderWidth: 0.4,
        borderColor: COLORS.primaryLightGreyHex,
        borderRadius: 10,
    },

    hairLineStyles: {
        width: "100%",
        marginVertical: 5,
        borderBottomColor: COLORS.primaryLightGreyHex,
        borderBottomWidth: 0.5

    },
    viewStyles: {
        marginHorizontal: 10,
        marginVertical: 10
    },
    touchableStyles: {
        marginHorizontal: 5,
        marginVertical: 5,
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    textColor: {
        color: COLORS.primaryBlackHex,
    },
    circleStyles: {
        marginHorizontal: 5,
        marginVertical: 5,
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    borderStyles: {
        borderWidth: 0.5,
        borderBottomWidth: 0.5,
        height: 45,
        borderColor: COLORS.primaryLightGreyHex,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    formContainer: {
        marginVertical: 10,
        marginHorizontal: 15
    },
    labelStyles: {
        color: COLORS.primaryWhiteHex,
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: 15
    },
})
