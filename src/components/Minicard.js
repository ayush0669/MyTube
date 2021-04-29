import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

const MiniCard = (props) => {
    return (
        <View style={{
            flexDirection: "row",
            margin:10,
            marginBottom:0
        }}>
            <Image
                source={{ uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
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
                >{props.title}</Text>
                <Text style={{
                    fontSize:12
                }}>
                    {props.channel} 
                </Text>
            </View>
        </View>
        
    )


}

export default MiniCard