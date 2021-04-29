import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions,ScrollView} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Card = ()=>{
    return(
        <View style={{
            elevation: 4,
            margin: 10
        }}>
            <Image  
            source={{uri:"https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
            style={{
                width:"100%",
                height:200
            }}
            />
            <View style={{flexDirection: "row", margin:5}}>
                <View style={{marginLeft:10}}>
                <FontAwesome5 name="user" size={35} color={"black"} brands />
                </View>
                <View style={{marginLeft:10}}>
                <Text style={{fontSize: 20 , fontWeight: "bold", width:Dimensions.get("screen").width-50}} ellipsizeMode="tail" numberOfLines={2}>Press the Search Icon</Text>
                <Text>To search for your content.</Text>
                </View>
            </View>
        </View>
        
    )

}
export default Card