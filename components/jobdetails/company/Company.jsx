import React from 'react'
import { View, Text, Image, } from 'react-native'
import { icons, COLORS, checkImageURL } from '../../../constants'
import styles from './company.style'

const Company = ({ data }) => {
  const images = [ 
    `https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoYn2ouAm2GzELxlJWpox5PjSn_VLEavXC1o06Ytv8VhJOI8XyUL3HI-lOV2h7vQo8Zs&usqp=CAU`,
    `https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png`,
    `https://1.bp.blogspot.com/-9dY6GPCltAQ/XoapzN0MFEI/AAAAAAAAASU/9KHLrZIRHQc_9unJj-ziFXZ-0fBvm_X-wCLcBGAsYHQ/w1200-h630-p-k-no-nu/FB_IMG_15858828660954531.jpg`,
    `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png`
  ]
  
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image source={{
          uri: checkImageURL(data?.employer_logo) ? data?.employer_logo :  images[Math.floor(Math.random()*images.length)]
        }}
          style={styles.logoImage} />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{data?.job_title}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{data?.employer_name}</Text>
        <View  style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>
            {data?.job_country}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Company