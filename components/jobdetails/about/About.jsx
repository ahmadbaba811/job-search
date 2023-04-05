import React, { useCallback, useState, useEffect } from 'react'
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'

import styles from './about.style'
import { COLORS, icons, SIZES } from '../../../constants'
import useFetch from '../../../hook/useFetch'
import Company from '../company/Company'
import { JobAbout, JobFooter, JobTabs, Specifics } from '../..'
import { JobAboutComponent } from './job-about'

const About = ({ navigation, route }) => {
  const params = route.params.job_id;

  const { data, isLoading, error, refetch } = useFetch(
    'job-details',
    { job_id: params }
  )
  const tabs = ["About", "Qualification", "Responsibilities"]
  const [activeTab, setActiveTab] = useState(tabs[0])
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    refetch();
  }

  const displayTabContent = () => {
    switch (activeTab) {
      case "Qualification":
        return (
          <Specifics
            title="Qualification"
            points={data[0].job_highlights?.Qualifications ?? ['N/A']} />
        )
      case "About":
        return (
          <JobAboutComponent
            info={data[0]?.job_description ?? "No Description"}

          />
        )

      case "Responsibilities":
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ['N/A']} />
        )

      default:
        break;
    }
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh} />}>
        {
          isLoading ?
            <ActivityIndicator size={"large"} color={COLORS.prim} />

            : error ? <Text>Error occured</Text>
              : data.length === 0 ? <Text>No data</Text>
                :
                <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                  <Company
                    companyLogo={data[0]?.employer_logo}
                    jobTitle={data[0]?.job_title}
                    companyName={data[0]?.employer_name}
                    location={data[0]?.job_country}
                    data={data[0]}

                  />

                  <JobTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />

                  {
                    displayTabContent()
                  }

                </View>
        }


      </ScrollView>
      <JobFooter url={data[0]?.job_google_link ?? ''} />
    </>
  )
}

export default About