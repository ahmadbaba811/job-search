import React, { useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView, RefreshControl } from 'react-native'

import styles from './welcome.style'
import Popularjobs from '../popular/Popularjobs'
import Nearbyjobs from '../nearby/Nearbyjobs'
import { SIZES, icons } from '../../../constants'
import useFetch from '../../../hook/useFetch'

const Welcome = (props) => {
  const navigation = props.navigation;
  const route = props.route

  const [jobTypes, setJobTypes] = React.useState(["Long-term contract", "Part-time", "12+ Months", "6+ Months"])

  const { data, isLoading, error, refetch } = useFetch(
    'search', { query: "Python developer in Texas, USA", page: '1', num_pages: '1' }
  )

  let Data1 = data
  const [Data2, setData2] = React.useState(Data1)
  const [refreshing, setRefreshing] = React.useState(false)

  const [searchTerm, setSearchTerm] = React.useState('')
  const [activeJobType, setactiveJobType] = React.useState('Full-time');

  const searchJob = (e) => {
    navigation.navigate(
      "Search",
      { searchTerm: searchTerm }
    )
  }

  const onFilterJobs = (type) => {
    

  }

  const onRefresh = () => {
    refetch();
  }

  
  return (
    <ScrollView
      refreshControl={<RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh} />}
    >
      <View style={{
        padding: SIZES.medium,
        flex: 1
      }}>
        <View style={styles.container}>
          <Text style={styles.userName}>Welcome </Text>
          <Text style={styles.welcomeMessage}>Find your perfect job</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.nativeEvent.text)
              }}
              placeholder='Search Jobs'
            />
          </View>
          <TouchableOpacity style={styles.searchBtn}
            onPress={searchJob}>
            <Image source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage} />
          </TouchableOpacity>
        </View>


        <View style={styles.tabsContainer}>
          <FlatList
            data={jobTypes}
            contentContainerStyle={{ columnGap: SIZES.small }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => `item-${item}`}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={
                  styles.tab(activeJobType, item)
                }
                  onPress={() => {
                    onFilterJobs(item)
                  }}
                >
                  <Text>{item}</Text>

                </TouchableOpacity>
              )
            }}

          />
        </View>



        <Popularjobs
          data={Data1}
          isLoading={isLoading}
          error={error}
          navigation={navigation}
          route={route} />

        <Nearbyjobs
          data={Data1}
          isLoading={isLoading}
          error={error}
          navigation={navigation}
          route={route} />
      </View>
    </ScrollView>
  )
}

export default Welcome