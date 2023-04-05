import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { checkImageURL } from '../../../../constants'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  const images = [ 
    `https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoYn2ouAm2GzELxlJWpox5PjSn_VLEavXC1o06Ytv8VhJOI8XyUL3HI-lOV2h7vQo8Zs&usqp=CAU`,
    `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png`,
    `https://1.bp.blogspot.com/-9dY6GPCltAQ/XoapzN0MFEI/AAAAAAAAASU/9KHLrZIRHQc_9unJj-ziFXZ-0fBvm_X-wCLcBGAsYHQ/w1200-h630-p-k-no-nu/FB_IMG_15858828660954531.jpg`,
    `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png`
  ]
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {handleNavigate(job)}}

    >

      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job?.employer_logo) ? job.employer_logo :
            images[Math.floor(Math.random()*images.length)]
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text
          style={styles.jobName}
          numberOfLines={1}
        >
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard