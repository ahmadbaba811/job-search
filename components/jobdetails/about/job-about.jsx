
import styles from './about.style'
import {View, Text} from 'react-native'


export const JobAboutComponent = ({ info }) => {


    return (
        <View style={styles.container}>
            <Text style={styles.headText}>
                About the Job
            </Text>
            <View style={styles.contentBox}>
                <Text style={styles.contextText}>
                    {info}
                </Text>
            </View>
        </View>
    )
}