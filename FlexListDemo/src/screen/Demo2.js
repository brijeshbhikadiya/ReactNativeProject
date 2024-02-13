import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

const data =[
    {
        name:"Moday"
    },
    {
        name:"Tuesday"
    },
    {
        name:"Wednesday"
    },
    {
        name:"Thursday"
    },
    {
        name:"Friday"
    },
    {
        name:"Saturday"
    },
]

export default class Demo2 extends Component {
  render() {
    return (
      <View style={{backgroundColor:'green',flex:1}}>
        <FlatList
        contentContainerStyle={{justifyContent:'center',alignItems:'center',flex:1}}
        data={data}
        renderItem={({item})=>
            <View style={styles.view1}>
            <Text style={{color:'white',fontWeight:'600',fontSize:20}}>{item.name}</Text>
            </View>
        }>
        </FlatList>
      </View>
    )
  }
}

const styles= StyleSheet.create({
    view1:{
        marginTop:20,
        borderRadius:10,
        backgroundColor:'red',
        height:50,
        width:300,
        justifyContent:'center',
        alignItems:'center'
    }
})