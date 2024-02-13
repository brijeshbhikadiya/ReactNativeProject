import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

const Data=[
    {
    id:'1',
    name:"brijesh"
    },
    {
        id:'2',
        name:"jaivik"
    },
    {
        id:'3',
        name:"Dhruvil"
    },
    {
        id:'4',
        name:"Keyur"
    },
    {
        id:'5',
        name:"Bhvay"
    },
    {
        id:'6',
        name:"Vansh"
    },
    {
        id:'7',
        name:"Viturv"
    },
    {
        id:'8',
        name:"Hitarth"
    },
    {
        id:'9',
        name:"Krish"
    },
    {
        id:'10',
        name:"Naimish"
    },
    {
        id:'11',
        name:"Banti"
    },
    {
        id:'12',
        name:"Sahil"
    },
    {
        id:'13',
        name:"keyur"
    },

]

export default class Demo extends Component {
  
  render() {
   
    return (
       
        <View>
            <View style={{justifyContent:'center',
        alignItems:'center'}}>
            <Text style={{fontWeight:'700',color:'black',fontSize:40}}>FlatList Demo</Text>
            </View>
        
        <FlatList
        data={Data}
        renderItem={
            ({item})=>
            <View style={{borderRadius:20,backgroundColor:'yellow',marginTop:20,marginHorizontal:20,}}>
                <Text style={styles.itemname}>{item.name}</Text>
                
            </View>
            
        }
        style={styles.flatlist}></FlatList>
         </View>
       
     
    )
  }
}

const styles = StyleSheet.create({
    itemname:{
        fontWeight:'600',
        fontSize:30,
        color:'black',
        marginLeft:5
    },
        
})