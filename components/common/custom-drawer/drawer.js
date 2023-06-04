import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { COLORS, Icons, icons, images } from '../../../constants';

const CustomDrawer = (props) => {
    const { state, descriptors, navigation } = props
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={icons.location}
                        resizeMode='contain'
                        style={{ width: '20%', backgroundColor: COLORS.primary, borderRadius: 7 }}
                    />
                    <Text
                        style={{
                            marginTop: 20,
                            marginLeft: 20,
                            fontSize: 20
                        }} >
                        Abuja, Nigeria
                    </Text>
                </View>
            </View>
            <DrawerContentScrollView {...props} style={styles.view}

            >
                {
                    state.routes.map((item, index) => {
                        const isFocused = state.index === index;
                        const { options } = descriptors[item.key];
                        const color = isFocused ? '#fff' : 'grey'
                        const drawerItem = options.item;
                        const isActive = isFocused ? COLORS.primary : 'white'

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: item.key
                            })
                            if (isFocused && !event.defaultPrevented) {
                                navigation.navigate(item.name)
                            }

                        }
                        return (
                            <TouchableOpacity
                                onPress={onPress}
                                key={index}
                                testId={options.tabBarTestid}
                                accessibilityRole='button'
                                style={[styles.drawerItem, { backgroundColor: isActive }]}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={drawerItem.icon}
                                        resizeMode='contain'
                                        style={{ width: '10%' }}
                                    />
                                    <Text key={index}
                                        style={{
                                            marginTop: 20,
                                            marginLeft: 20,
                                            color: color
                                        }} >
                                        {drawerItem.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

                {/* <DrawerItemList {...props} /> */}

            </DrawerContentScrollView>
            {/* List Items */}
            {/* 2nd menu */}
            {/* profile menufooter */}

            {/* footer */}
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={icons.share}
                        resizeMode='contain'
                        style={{ width: '18%', backgroundColor: COLORS.primary, borderRadius: 7 }}
                    />
                    <Text
                        style={{
                            marginTop: 20,
                            marginLeft: 20,
                            fontSize: 20
                        }} >
                        Ahmad Idris
                    </Text>
                </View>
            </View>
        </View>
    )
}


export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        borderRadius: 5,
        // backgroundColor: 'white',
        padding: 10,
        margin: 5,
        backgroundColor: COLORS.gray2,
        color: 'black'
    },
    view: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 5,
        margin: 5,
        padding: 10
    },
    profile1: {
        flex: 1,
        // flexDirection: 'column'
    },
    drawerItem: {
        borderRadius: 5,
        padding: 3
    }
})