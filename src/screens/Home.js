import React from 'react';
import {StyleSheet, Text, View,ScrollView } from 'react-native';
import Header from '../components/Header'
import Card from '../components/Card'

export default function HomeScreen() {
    
        return (
            <View style={{flex:1,
                backgroundColor: "#232D3D"
                }}>
                <Header />
                <ScrollView>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                </ScrollView>
            </View>
        );
    
    
}


