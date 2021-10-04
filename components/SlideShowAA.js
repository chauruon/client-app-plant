import React from "react";
import { Component } from "react";
import {View, Image, Dimensions, ScrollView, Text ,StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 100 / 60;
const images = [
    'https://images.pexels.com/photos/5712712/pexels-photo-5712712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/212942/pexels-photo-212942.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1684004/pexels-photo-1684004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
]

export default class SlideShow extends Component{
    state={
        action: 0
    }
    change= ({nationEvent})=>{
        const slide = Math.ceil(nationEvent.contentOffset.x / nationEvent.layoutMeasurement.width);
        if(slide !== this.state.action){
            this.setState({action: slide});
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <ScrollView 
                pagingEnabled 
                horizontal 
                onScroll={this.change}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}>
                {
                images.map((item, index)=>
                <Image 
                    key={index}
                    source={{uri:item}}
                    style={styles.image}
                    ></Image>
                )
                }
                </ScrollView>
                <View style ={styles.padination}>
                    {
                        images.map((i,k)=>(
                            <Text 
                            key={k}
                            style={k==this.state.action ? styles.pagingActionText : styles.pagingText}>⬤</Text>

                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 50, width, height ,
    },
    scroll:{width, height},
    image:{width,height,resizeMode:"contain"},
    padination:{flexDirection:"row", position:"absolute",bottom:0, alignSelf:"center"},
    pagingText:{color:'#888',margin:4},
    pagingActionText:{color:'#fff',margin:4},


})