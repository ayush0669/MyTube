import React, { useState } from 'react';
import {StyleSheet, Text, View,ScrollView, TextInput } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MiniCard from '../components/Minicard';


const Search = () =>{
    const [value,setValue] = useState("")
    return(
        <View style={{flex:1}}>
            <View style={{
                padding:5,
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 5,
                backgroundColor: "white"
        
            }}>
                <FontAwesome5 name="chevron-left" size={28} />
                <TextInput
                    style={{width:"70%", backgroundColor:"#e6e6e6"}}
                    value={value}
                    onChangeText={(text)=>setValue(text)}
                />
                <FontAwesome5 name={'paper-plane'} size={28} />

            </View>
            <ScrollView>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard /><MiniCard /><MiniCard /><MiniCard />
            </ScrollView>


        </View>
    )

}

export default Search