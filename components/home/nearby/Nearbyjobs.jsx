import React, { useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import styles from './nearbyjobs.style'
import { COLORS, icons, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';
const Nearbyjobs = ({navigation, data, isLoading, error}) => {

  const [nearByJobs, setNearByJobs] = React.useState([])
  
  
  const handleNavigate = (job) => {
    navigation.navigate(`About`, {
      job_id : job.job_id
    })

  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Near By Jobs</Text>
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
                    data?.map((job, index) => (
                      (
                        <NearbyJobCard job={job}
                        key={index}
                        handleNavigate={handleNavigate}
                         />
                      )
                    ))
                    :
                    <Text>No Jobs Available</Text>
                }
              </View>
        }

      </View>
    </View>
  )
}

export default Nearbyjobs
