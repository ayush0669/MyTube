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
                backgroundColor:"#232D3D",
                justifyContent:"space-between",
                elevation: 5
            }}>
                <View style={{flexDirection:"row", marginLeft:15,marginTop:5 }}>
                    <FontAwesome5Icon name="play-circle" size={28} color={"red"} ></FontAwesome5Icon>
                    <Text style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize:20,
                        marginLeft:5,
                        fontStyle:"italic"
                    }}>MyTube</Text>

                </View>
                <View style={{flexDirection:"row",justifyContent:"space-around",width:100,marginTop:7}}>
                <FontAwesome5 name="search" size={26} color={"white"}  
                    onPress={()=>navigation.navigate("search")}
                />
                <FontAwesome5 name="user" size={26} color={"white"}  />

                </View>

            </View>
        );
    
    
}


