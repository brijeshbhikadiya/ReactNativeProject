import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

const data = [{
    image1:require('../screen/image.png'),
    name:"Mark Doe",
    position:"CEO",
    text:"Follow"
},
{
    image1:require('../screen/image.png'),
    name:"John Doe",
    position:"CTO",
    text:"Follow"
},
{
    image1:require('../screen/image.png'),
    name:"Clark Man",
    position:"Creative Designer",
    text:"Follow"
},
{
    image1:require('../screen/image.png'),
    name:"Jaden Boor",
    position:"Front-end Developer",
    text:"Follow"
},
{
    image1:require('../screen/image.png'),
    name:"Srick Tree",
    position:"Back-end Developer",
    text:"Follow"
},
{
    image1:require('../screen/image.png'),
    name:"Jhon Doe",
    position:"Creative Designer",
    text:"Follow"
},
{
    image1:require('../screen/image.png'),
    name:"Mark Doe",
    position:"Manager",
    text:"Follow"
},
{
    image1:require('../screen/image.png'),
    name:"Mark Doe",
    position:"CEO",
    text:"Follow"
},]

export default class Demo3 extends Component {
  render() {
    return (
      <View style={styles.contianer}>
        <FlatList
        data={data}
        renderItem={({item})=>
        <View style={{flexDirection:'row',backgroundColor:'white',flex:1,marginVertical:10,marginHorizontal:10,shadowColor:'black',shadowOpacity:0.5,shadowColor:'grey',elevation:5,borderRadius:10,height:100}}>
            <Image source={item.image1} style={{marginLeft:10,marginTop:15}}></Image>
            <View style={styles.view1}>
                <Text style={styles.text1}>{item.name}</Text>
                <Text style={styles.text2}>{item.position}</Text>
                <TouchableOpacity style={styles.touchable}><Text style={{color:'white'}}>{item.text}</Text></TouchableOpacity>
            </View>
        </View>
    }>
        </FlatList>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    contianer:{
        flex:1,
        backgroundColor:'rgba(186, 195, 210, 1)'
    },
    view1:{
        marginLeft:20
    },
    text1:{
        color:'green',
        fontWeight:'600',
        fontSize:15,
        marginTop:15
    },
    text2:{
        //flex:1,
        color:'grey',
        fontWeight:'600',
       // backgroundColor:'red',
        fontSize:12,
        marginTop:2,
       // marginLeft:20
    },
    touchable:{
        backgroundColor:'rgba(111, 158, 255, 1)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:5,
        width:75,
        height:25
    }
})