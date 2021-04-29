import React, { useState } from 'react';

import { StyleSheet, Text, View, ScrollView, TextInput, FlatList,ActivityIndicator } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MiniCard from '../components/Minicard';


//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=songs&type=video&key=AIzaSyDRE3x31hGdGFU5RRtMlWXc87TjgNULBeA


const Search = ({navigation}) => {
    const [value, setValue] = useState("")
    const [miniCardData, setminiCard] = useState([])
    const [loading,setLoading]=useState(false)
    const fetchData = () => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=200&q=${value}&type=video&key=AIzaSyDRE3x31hGdGFU5RRtMlWXc87TjgNULBeA`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                console.log(data)
                setminiCard(data.items)
            })
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 5,
                backgroundColor: "white"

            }}>
                <FontAwesome5 name="chevron-left" size={28} 
                    onPress={()=>navigation.goBack()}
                />
                <TextInput
                    style={{ width: "70%", backgroundColor: "#e6e6e6" }}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                />
                <FontAwesome5 name={'paper-plane'} size={28} onPress={() => fetchData()} />

            </View>
            {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="grey" />:null}
        
            <FlatList
                data={miniCardData}
                renderItem={({ item }) => {
                    return <MiniCard
                        title={item.snippet.title}
                        videoId={item.id.videoId}
                        channelName={item.snippet.channelTitle}

                    />
                }}
                keyExtractor={item=>item.id.videoId}
            />
            
        </View>
    )

}

export default Search
