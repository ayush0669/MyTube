import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

const MiniCard = () => {
    return (
        <View style={{
            flexDirection: "row",
            margin:10,
            marginBottom:0
        }}>
            <Image
                source={{ uri: "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }}
                style={{
                    width: "45%",
                    height: 90
                }}
            />
            <View style={{paddingLeft: 7}}>
                <Text style={{
                    fontSize: 17,
                    width: Dimensions.get("screen").width/2
                }}
                ellipsizeMode="tail"
                numberOfLines={3}
                >TEXT 1 adas s wd ww dwadA Sd sdas dsa sadSAd as dsadas Sd a sdsaadad sad dwadA Sd sdas dsa sadSAd as dsadas Sd a sdsaadad sad</Text>
                <Text style={{
                    fontSize:12
                }}>
                    TEXT2 
                </Text>
            </View>
        </View>
        
    )


}

export default MiniCard