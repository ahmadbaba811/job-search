import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { COLORS, Icons, icons, images } from '../../../constants';

const CustomDrawer = (props) => {
    const { state, descriptors, navigation } = props
    console.log(state)
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.view}>
                <Text >Header</Text>
            </View>
            <DrawerContentScrollView {...props} style={styles.view}

            >
                {
                    state.routes.map((item, index) => {
                        const isFocused = state.index === index;
                        const { options } = descriptors[item.key];
                        console.log(options)
                        const color = isFocused ? COLORS.secondary : COLORS.primary;
                        const drawerItem = options.item;

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
                                style={styles.drawerItem}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        source={drawerItem.icon}
                                        resizeMode='contain'
                                        style={{ width: '10%' }}
                                    />
                                    <Text key={index} style={{
                                        marginTop:20,
                                        marginLeft:20
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
            <View style={styles.view}>
                <Text>Footer</Text>
            </View>
        </View>
    )
}


export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1
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

    }
})