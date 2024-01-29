import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Screen6 extends Component {
  render() {
    return (
      <View style={
        {
            flex:1,
        }
      }>
        <View style={
            {
                flex:0.65,
               // backgroundColor:'red',
                margin:10
            }
        }>
            <View style={
                {
                    flex:1,
                    backgroundColor:'white'
                }
            }>
                <View style={
                    {
                        flex:1,
                        flexDirection:'row',
                        justifyContent:'space-between',
                       // backgroundColor:'#DDFF88'
                    }
                }>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9',
                            justifyContent:'center',
                            alignItems:'center'
                        }
                    }>
                        <Text style={styles.t1}>One</Text>
                    </View>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9', 
                            justifyContent:'center',
                            alignItems:'center'
                        }
                    }>
                        <Text style={styles.t1}>Two</Text>
                    </View>
                </View>
                <View style={
                    {
                        flex:1,
                        //backgroundColor:'red',
                        justifyContent:'center',
                        flexDirection:'row'
                    }
                }>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9', 
                            justifyContent:'center',
                            alignItems:'center' 
                        }
                    }>
                        <Text style={styles.t1}>Three</Text>
                    </View>
                </View>
                <View style={
                    {
                        flex:1,
                        //backgroundColor:'#DDFF88'
                    }
                }>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9', 
                            justifyContent:'center',
                            alignItems:'center' 
                        }
                    }>
                        <Text style={styles.t1}>One</Text>
                    </View>
                </View>
                <View style={
                    {
                        flex:1,
                        //backgroundColor:'red',
                        justifyContent:'flex-end',
                        flexDirection:'row'
                    }
                }>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9', 
                            justifyContent:'center',
                            marginTop:13,
                            alignItems:'center' 
                        }
                    }>
                        <Text style={styles.t1}>One</Text>
                    </View>
                </View>

            </View>

        </View>
        <View style={
            {
                flex:1,
                backgroundColor:'#DDFF88'
            }
        }></View>
        <View style={
            {
                flex:0.65,
                //backgroundColor:'blue'
                margin:10
            }
        }>
           <View style={
                {
                    flex:1,
                    backgroundColor:'white'
                }
            }>
                <View style={
                    {
                        flex:1,
                        flexDirection:'row',
                        justifyContent:'space-between',
                       // backgroundColor:'#DDFF88'
                    }
                }>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9',
                            justifyContent:'center',
                            alignItems:'center'
                        }
                    }>
                        <Text style={styles.t1}>One</Text>
                    </View>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9', 
                            justifyContent:'center',
                            alignItems:'center'
                        }
                    }>
                        <Text style={styles.t1}>Two</Text>
                    </View>
                </View>
                <View style={
                    {
                        flex:1,
                        //backgroundColor:'red',
                        justifyContent:'center',
                        flexDirection:'row'
                    }
                }>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9', 
                            justifyContent:'center',
                            alignItems:'center' 
                        }
                    }>
                        <Text style={styles.t1}>Three</Text>
                    </View>
                </View>
                <View style={
                    {
                        flex:1,
                        
                        //backgroundColor:'#DDFF88'
                    }
                }>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9', 
                            justifyContent:'center',
                            alignItems:'center' 
                        }
                    }>
                        <Text style={styles.t1}>One</Text>
                    </View>
                </View>
                <View style={
                    {
                        flex:1,
                        //backgroundColor:'red',
                        justifyContent:'flex-end',
                        flexDirection:'row'
                    }
                }>
                    <View style={
                        {
                            width:166,
                            height:40,
                            backgroundColor:'#D9D9D9', 
                            justifyContent:'center',
                            marginTop:13,
                            alignItems:'center' 
                        }
                    }>
                        <Text style={styles.t1}>One</Text>
                    </View>
                </View> 
             </View>
        </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    t1:{
        color:'black',
        fontFamily:'Inter',
        fontSize:12
    }
})