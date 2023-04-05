import React from 'react'
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const TabButon = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity style={styles.btn(name, activeTab)} 
    onPress={onHandleSearchType}>
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  )
}

const onHandleSearchType = () => {

}
const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap : SIZES.small/2}}
        renderItem={({ item }) => (
          <TabButon name={item}
          activeTab={activeTab}
          onHandleSearchType={() => setActiveTab(item)} />
        )}
      />
    </View>
  )
}

export default Tabs