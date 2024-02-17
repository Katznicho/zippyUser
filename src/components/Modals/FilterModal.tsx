import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useRef, useState, useEffect } from 'react';
import RBSheet from "react-native-raw-bottom-sheet";
import { COLORS, FONTFAMILY } from '../../theme/theme';
import { generalStyles } from '../../screens/utils/generatStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
    openPicker: boolean;
    setOpenPicker: (openPicker: boolean) => void;
    title: string

};

const FilterModal: React.FC<Props> = ({ openPicker, setOpenPicker, title = "Filters" }: Props) => {

    const refRBSheet = useRef<any>();

    useEffect(() => {
        if (openPicker) {
            refRBSheet.current?.open();
        } else {
            refRBSheet.current?.close();
        }
    }, [openPicker]);

    const [selectedCurrency, setSelectedCurrency] = useState<any>(null)
    const [paymentPeriod, setPaymentPeriod] = useState<any>(null)
    const [selectedBedRoom, setSelectedBedRoom] = useState<any>(null)
    const [selectedBathRooms, setSelectedBathRooms] = useState<any>(null)
    const [selectedPropertyType, setSelectedPropertyType] = useState<any>(null)
    const [minimumPrice, setMinimumPrice] = useState<any>(null)
    const [maximumPrice, setMaximumPrice] = useState<any>(null)

    const [currencies, setCurrencies] = useState([
        {
            id: 1,
            name: "UGX"
        }, {
            id: 2,
            name: "USD"
        }
    ])

    const [paymentPeriods, setPaymentPeriods] = useState([
        {
            id: 1,
            name: "Monthly"
        }, {
            id: 2,
            name: "Yearly"
        }
    ])

    const [bedRooms, setBedRooms] = useState([
        {
            id: 1,
            name: "Any"

        },
        {
            id: 2,
            name: "1"
        }, {
            id: 3,
            name: "2"
        },
        {
            id: 4,
            name: "3"
        }, {
            id: 5,
            name: "4"
        }, {
            id: 6,
            name: "5+"
        }
    ])

    const [bathRooms, setBathRooms] = useState([
        {
            id: 1,
            name: "Any"
        }, {
            id: 2,
            name: "1"
        }, {
            id: 3,
            name: "2"
        }, {
            id: 4,
            name: "3"
        }, {
            id: 5,
            name: "4"
        }, {
            id: 6,
            name: "5+"
        }
    ])

    const [propertyTypes, setPropertyTypes] = useState([
        {
            id: 1,
            name: "Any"
        }, {
            id: 2,
            name: "House"
        }, {
            id: 3,
            name: "Apartment"
        }, {
            id: 4,
            name: "Rental"
        }, {
            id: 5,
            name: "Flats"
        }, {
            id: 6,
            name: "Shop"
        }
    ])



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
                            propertyTypes.map((propertyType: any) => (
                                <TouchableOpacity
                                    key={propertyType.id}
                                    style={[styles.touchableStyles, {
                                        backgroundColor: selectedPropertyType === propertyType.name ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                    }]}
                                    onPress={() => setSelectedPropertyType(propertyType.name)}
                                >
                                    <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>{propertyType.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                {/* property categories */}
                <View style={[styles.hairLineStyles]} />


                {/* currency */}
                <View style={[styles.viewStyles]}>
                    <View>
                        <Text style={generalStyles.CardTitle}>Select Currency</Text>
                    </View>
                    <View>
                        <Text style={generalStyles.CardSubtitle}>
                            Select your price range
                        </Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            currencies.map((currency: any) => (
                                <TouchableOpacity
                                    key={currency.id}
                                    style={[styles.touchableStyles, {
                                        backgroundColor: selectedCurrency === currency.name ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                    }]}
                                    onPress={() => setSelectedCurrency(currency.name)}
                                >
                                    <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>{currency.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                {/* currency */}

                <View style={[styles.hairLineStyles]} />

                {/* payment period */}
                <View style={[styles.viewStyles]}>
                    <View>
                        <Text style={generalStyles.CardTitle}>Payment Period</Text>
                    </View>
                    <View>
                        <Text style={generalStyles.CardSubtitle}>
                            Select payment period
                        </Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            paymentPeriods.map((period: any) => (
                                <TouchableOpacity
                                    key={period.id}
                                    style={[styles.touchableStyles, {
                                        backgroundColor: paymentPeriod === period.name ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                    }]}
                                    onPress={() => setPaymentPeriod(period.name)}
                                >
                                    <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>{period.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                {/* payment period */}
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
                                    onChange={text => setMinimumPrice(text)}
                                    value={minimumPrice}
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
                                    onChange={text => setMaximumPrice(text)}
                                    value={maximumPrice}
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
                            bedRooms.map((room: any) => (
                                <TouchableOpacity
                                    key={room.id}
                                    style={[styles.circleStyles, {
                                        backgroundColor: selectedBedRoom === room.name ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                    }]}
                                    onPress={() => setSelectedBedRoom(room.name)}
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
                            bathRooms.map((room: any) => (
                                <TouchableOpacity
                                    key={room.id}
                                    style={[styles.circleStyles, {
                                        backgroundColor: selectedBathRooms === room.name ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                    }]}
                                    onPress={() => setSelectedBathRooms(room.name)}
                                >
                                    <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>{room.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>
                {/* bedrroooms */}
                <View style={[styles.hairLineStyles]} />

                <View style={[generalStyles.flexStyles, { alignItems: 'center', justifyContent: 'space-around' }]}>

                    <TouchableOpacity
                        // onPress={applyFilters}
                        style={[styles.touchableStyles, { backgroundColor: COLORS.primaryRedHex }]}
                    >
                        <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>Clear All</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={applyFilters}
                        style={[styles.touchableStyles, { backgroundColor: COLORS.primaryOrangeHex }]}
                    >
                        <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>Apply Filters</Text>
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
