import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import Logo from '../assets/logo.png'

export default class Splashscreen extends Component {
    render() {
        return (
            <View style={{width:"100%",flex:1,alignItems:"center",justifyContent:"center"}}>
                <Image source={Logo} style={{width:200,height:80}} />
            </View>
        )
    }
}
