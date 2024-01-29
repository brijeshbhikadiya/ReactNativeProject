import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Screen4 extends Component {
  render() {
    return (
      <View style={
        {
            flex:1,
            //backgroundColor:'red'
        }
      }>
        <View style={
            {
                flex:1,
                backgroundColor:'white'
            //    height:844,
            //    width:390
            }
        }>
            <View style={
                {
                    //flex:1,
                    flexDirection:'row',
                    justifyContent:'space-between',
                   // backgroundColor:'red'
                }
            }>
                <View style={
                    {
                        width:73,
                        height:76,
                        backgroundColor:'#D9D9D9'
                    }
                }></View>
                <View style={
                    {
                        width:73,
                        height:76,
                        backgroundColor:'#D9D9D9'
                    }
                }></View>
            </View>
            <View style={
                {
                   // flex:1,
                    //backgroundColor:'pink',
                    flexDirection:'row',
                    justifyContent:'space-around'
                }
            }>
                 <View style={
                    {
                        width:73,
                        height:76,
                        //margin:10,
                         marginLeft:25,
                        // marginTop:32,
                        // marginRight:244,
                        // marginBottom:700,
                        backgroundColor:'#D9D9D9'
                    }
                }></View>
                <View style={
                    {
                        width:73,
                        height:76,
                       // margin:10,
                        marginRight:25,
                        backgroundColor:'#D9D9D9'
                    }
                }></View>
            </View>
            <View style={
                {
                    //flex:1,
                   // backgroundColor:'red',
                    justifyContent:'center',
                    flexDirection:'row'
                }
            }>
                  <View style={
                    {
                        width:73,
                        height:76,
                        backgroundColor:'#D9D9D9'
                    }
                }></View>
            </View>
            <View style={
                {
                    //flex:1,
                    //backgroundColor:'pink',
                    justifyContent:'space-around',
                    flexDirection:'row'
                }
            }>
                 <View style={
                    {
                        width:73,
                        height:76,
                        marginLeft:25,
                        marginBottom:9,
                        backgroundColor:'#D9D9D9'
                    }
                }></View>
                <View style={
                    {
                        width:73,
                        height:76,
                        marginRight:25,
                        marginBottom:9,
                        backgroundColor:'#D9D9D9'
                    }
                }></View>
            </View>
            <View style={
                {
                    //flex:1,
                   // backgroundColor:'red',
                    justifyContent:'space-between',
                    flexDirection:'row'
                }
            }>
                 <View style={
                    {
                        width:73,
                        height:76,
                        marginBottom:20,
                        backgroundColor:'#D9D9D9'
                    }
                }></View>
                <View style={
                    {
                        width:73,
                        height:76,
                        marginBottom:20,
                        backgroundColor:'#D9D9D9'
                    }
                }></View>
            </View>
        </View>
        <View style={
            {
                flex:0.9,
                backgroundColor:'#EEFFEE',
                justifyContent:'center',
                alignItems:'center'
            }
        }>
            <View style={
                {
                    width:100,
                    height:100,
                    backgroundColor:'#D9D9D9'
                }
            }>

            </View>
        </View>
      </View>
    )
  }
}