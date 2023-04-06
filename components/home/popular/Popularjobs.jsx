import React, { useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import axios from 'axios'

import styles from './popularjobs.style'
import { COLORS, icons, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';
const Popularjobs = ({navigation, data, isLoading, error}) => {

 
  const handleCardPress = (job) => {
   
    navigation.navigate(`About`, {
      job_id : job.job_id
    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ?
            (<ActivityIndicator size={"large"} color={COLORS.secondary} />)
            : error ?
              <Text>Something went wrong</Text>
              :
              <View>
                {
                  data.length > 0 ?
                    <FlatList
                      data={data}
                      keyExtractor={item => item?.job_id}
                      contentContainerStyle={{ columnGap: SIZES.medium }}
                      horizontal
                      renderItem={({ item }) => {
                        return (
                          <PopularJobCard
                          handleCardPress={handleCardPress}
                            item={item} />
                        )
                      }}
                    />
                    :
                    <Text>No Jobs Available</Text>
                }
              </View>
        }

      </View>
    </View>
  )
}

export default Popularjobs