import { Text, View, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { generalStyles } from './utils/generatStyles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/dev';
import PhoneInput from "react-native-phone-number-input";
import { COLORS } from '../theme/theme'
import { ActivityIndicator } from '../components/ActivityIndicator'
import FilterModal from '../components/Modals/FilterModal'

const ZippyAlert = () => {

    const { user } = useSelector((state: RootState) => state.user);

    const [fullName, setFullName] = React.useState<any>(`${user?.fname} ${user?.lname}`);
    const [email, setEmail] = React.useState<any>(user?.email);
    const [errors, setErrors] = useState<any>({})

    const [loading, setLoading] = useState<boolean>()

    //phone number details
    const [phoneNumber, setPhoneNumber] = React.useState<any>(user?.phone.slice(4));
    const phoneInput = useRef<PhoneInput>(null);
    //phone number details

    const [selectedContactOptions, setSelectedContactOptions] = useState<any>([]);

    const [contactOptions, setContactOptions] = useState([
        {
            id: 0,
            name: "Any"
        },
        {
            id: 1,
            name: "SMS"
        },
        {
            id: 2,
            name: "Whatsapp"
        }, {
            id: 3,
            name: "Email"
        }, {
            id: 4,
            name: "PhoneCall"
        }, {
            id: 5,
            name: "App Notification"

        }
    ])

    const [openPicker, setOpenPicker] = useState<boolean>(false);

    const toggleOption = (optionName: string) => {
        if (optionName === "Any") {
            // If "Any" is selected, push all options to selectedContactOptions
            if (selectedContactOptions.includes("Any")) {
                // If "Any" is already selected, remove all options
                setSelectedContactOptions([]);
            } else {
                const allOptionsExceptAny = contactOptions
                    .filter(option => option.name !== "Any")
                    .map(option => option.name);
                setSelectedContactOptions(allOptionsExceptAny);
            }
        } else {
            // If any other option is selected, toggle its selection
            setSelectedContactOptions((prevSelectedOptions: string[]) => {
                if (prevSelectedOptions.includes(optionName)) {
                    // If already selected, remove it
                    return prevSelectedOptions.filter((option: any) => option !== optionName);
                } else {
                    // If not selected, add it
                    return [...prevSelectedOptions, optionName];
                }
            });
        }
    };


    return (
        <KeyboardAwareScrollView
            style={[{ flex: 1, width: '100%' }, generalStyles.ScreenContainer]}
            keyboardShouldPersistTaps="always"
        >
            <ScrollView
                contentContainerStyle={{
                    margin: 20,
                }}
                keyboardShouldPersistTaps="always"
            >
                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text style={[{ fontSize: 20 }, generalStyles.textStyle]}>
                        Zippy Alert
                    </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text style={[generalStyles.textStyle]}>
                        Create a zippy alert to get notified when property is available and matches your search
                    </Text>
                </View>

                {/* full name */}
                <View style={generalStyles.formContainer}>
                    <View>
                        <Text style={[generalStyles.formInputTextStyle]}>
                            Full Name</Text>
                    </View>

                    <TextInput
                        style={[generalStyles.formInput, styles.textInputMarginRight]}
                        placeholder={'enter your full name name'}
                        keyboardType="default"
                        placeholderTextColor={COLORS.primaryWhiteHex}
                        onChangeText={text => setFullName(text)}
                        value={fullName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"

                    />
                    <View>
                        {errors.fullName && <Text style={generalStyles.errorText}>{errors.fullName}</Text>}
                    </View>

                </View>
                {/* full name */}

                {/* phone number */}
                <View style={generalStyles.formContainer}>
                    <View>
                        <Text style={generalStyles.formInputTextStyle}>
                            Phone Number </Text>
                    </View>
                    <PhoneInput
                        ref={phoneInput}
                        defaultValue={phoneNumber}
                        defaultCode="UG"
                        layout="second"

                        onChangeFormattedText={(text) => {
                            setPhoneNumber(text);
                        }}
                        placeholder={'enter phone number'}
                        containerStyle={[generalStyles.formInput, { backgroundColor: COLORS.primaryLightWhiteGrey, }]}
                        textContainerStyle={{ paddingVertical: 0, backgroundColor: COLORS.primaryLightWhiteGrey }}
                        textInputProps={{
                            placeholderTextColor: COLORS.primaryWhiteHex
                        }}
                    />
                    <View>
                        {errors.phoneNumber && <Text style={generalStyles.errorText}>{errors.phoneNumber}</Text>}
                    </View>

                </View>
                {/* phone number */}

                {/* chose how you want to be contacted */}
                <View style={[styles.viewStyles]}>
                    <View>
                        <Text style={generalStyles.CardTitle}>Choose how you want to be contacted</Text>
                    </View>
                    <View>
                        <Text style={generalStyles.CardSubtitle}>
                            Select your preferred contact option
                        </Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            contactOptions.map((option: any) => (
                                <TouchableOpacity
                                    key={option.id}
                                    style={[styles.touchableStyles, {
                                        backgroundColor: selectedContactOptions.includes(option.name) ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
                                    }]}
                                    onPress={
                                        () => toggleOption(option.name)
                                    }
                                >
                                    <Text style={[generalStyles.CardTitle, { color: COLORS.primaryBlackHex }]}>{option.name}</Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>

                {/* chose how you want to be contacted */}

                {/* create zippy alert */}
                <View style={[{ marginHorizontal: 10 }]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={[generalStyles.loginContainer, { width: "100%" }]}
                        // onPress={() => guestUser ? handleShowAlert() : navigation.navigate('ZippyAlert')}
                        onPress={() => setOpenPicker(true)}
                    >
                        <Text style={generalStyles.loginText}>{'Create Alert'}</Text>
                    </TouchableOpacity>
                </View>
                {/* create zippy alert */}

                {loading && <ActivityIndicator />}

                {/* filter modal */}
                <FilterModal
                    openPicker={openPicker}
                    setOpenPicker={setOpenPicker}
                    title={'Zippy Alert'}
                />
                {/* filter modal */}


            </ScrollView>

        </KeyboardAwareScrollView>
    )
}

export default ZippyAlert

const styles = StyleSheet.create({
    icon: {
        marginLeft: -20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
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
    viewStyles: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 15
    },
    phoneInput: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    countryButton: {
        marginBottom: 20,
    },
    countryPickerButton: {
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    countryPickerCloseButton: {
        width: 20,
        height: 20,
    },
    submitButton: {
        width: '100%',
    },
    textInputMarginRight: {
        marginRight: 15
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
})

