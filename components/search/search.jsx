import React, { useState, useEffect } from 'react'
import { SIZES, icons } from '../../constants'
import useFetch from '../../hook/useFetch'
import { View, Text, SafeAreaView, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import styles from '../home/nearby/nearbyjobs.style'
import Nearbyjobs from '../home/nearby/Nearbyjobs'
import NearbyJobCard from '../common/cards/nearby/NearbyJobCard'


const SearchJob = ({ navigation, route }) => {


    const { data, isLoading, error, refetch } = useFetch(
        'search',
        { query: route.params.searchTerm ? route.params.searchTerm : "react", page: "1", num_page: "1" }
    )
    const [searchResult, setSearchResult] = useState(data)

    useEffect(() => {
        data.length === 0 && refetch()

    }, [])
    return (
        <ScrollView style={styles.container}>

            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Search Result</Text>
                </View>


                {
                    isLoading ?
                        <ActivityIndicator />
                        :
                        <>
                            {
                                data.length > 0 ?
                                    data.map((item, index) => {
                                        return (
                                            <NearbyJobCard
                                                job={item}
                                                key={index}
                                                handleNavigate={() => {
                                                    navigation.navigate(
                                                        "About",
                                                        { job_id: item.job_id }
                                                    )
                                                }} />
                                        )
                                    })
                                    :
                                    <Text >No Search result</Text>
                            }
                        </>
                }
            </View>
        </ScrollView>
    )
}

export default SearchJob;