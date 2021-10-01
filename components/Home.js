import React, { Component, useState } from "react";
import { StyleSheet, Text, View,Image, SafeAreaView } from "react-native";
import SearchBar from "./SearchBar";


export default function Home() {
    const [value, setValue] = useState()
    function updateSearch(value) {
        //do your search logic or anything
        console.log(value)
    }
    return (

        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{height:70, 
                        justifyContent:"center", 
                        textAlign:"center", 
                        fontSize:50,
                        }}>Cây xanh</Text>
                <Text style={{height:30, 
                        justifyContent:"center", 
                        textAlign:"center", 
                        fontSize:16,
                        }}>Mang màu xanh cho mọi nhà</Text>
                <SearchBar
                    value={value}
                    updateSearch={updateSearch}
                    style={{ margin: '3%' }}
                />
                
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red', height: '100%', width: '100%' 
    },
});
