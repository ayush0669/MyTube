import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


export default function Header() {
    const navigation=useNavigation()
    
        return (
            <View style={{
                height:40,flexDirection:"row",
                backgroundColor:"white",
                justifyContent:"space-between",
                elevation: 5
            }}>
                <View style={{flexDirection:"row", marginLeft:15 }}>
                    <FontAwesome5Icon name="play-circle" size={28} color={"red"} ></FontAwesome5Icon>
                    <Text style={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize:20,
                        marginLeft:5
                    }}>MyTube</Text>

                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",width:100}}>
                <FontAwesome5 name="search" size={26} color={"black"} brands 
                    onPress={()=>navigation.navigate("search")}
                />
                <FontAwesome5 name="user" size={26} color={"black"} brands />

                </View>

            </View>
        );
    
    
}


