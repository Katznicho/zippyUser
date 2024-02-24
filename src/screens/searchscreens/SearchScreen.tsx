import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import useFetchInfinite from '../../hooks/useFetchInfinite';
import { GET_ALL_PROPERTIES_BY_PAGINATION } from '../utils/constants/routes';
import { generalStyles } from '../utils/generatStyles';
import EmptyListAnimation from '../../components/EmptyListAnimation';
import PropertyFlatList from '../../components/PropertyFlatList';

const searchScreen = () => {
    const { isError, data, error, fetchNextPage, hasNextPage, isFetching } = useFetchInfinite("allProperties", GET_ALL_PROPERTIES_BY_PAGINATION);


    //flat the data
    // const flattenedData = data?.pages.flatMap(page => page.results) || [];
    const propertyData = data?.pages.flatMap(page => page.data);



    const loadMoreData = () => {
        if (hasNextPage && !isFetching && data?.pages[0].total !== propertyData?.length) return fetchNextPage()
    };


    return (
        <SafeAreaView style={[generalStyles.ScreenContainer]}>

            {
                data && propertyData?.length === 0 && <EmptyListAnimation
                    title={'No Properties Yet'} />
            }

            <PropertyFlatList
                propertyData={propertyData}
                loadMoreData={loadMoreData}
                isFetching={isFetching}
            />

        </SafeAreaView >
    )
}

export default searchScreen

const styles = StyleSheet.create({})