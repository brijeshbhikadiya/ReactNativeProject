import { StyleSheet, Text, View ,Image, FlatList, ScrollView} from 'react-native'
import React, { Component } from 'react'

export default class Messages extends Component {
  constructor(){
    super();
    this.state={
      YesterdayMessage:[{
        MessagerImage:require('../assets/images/Message7.png'),
        MessagerName:"Darrell Steward",
        MessagesType:"Hello",
        MessagesTime:"2h ago"
      },
      {
        MessagerImage:require('../assets/images/Message7.png'),
        MessagerName:"Darrell Steward",
        MessagesType:"Hello",
        MessagesTime:"2h ago"
      },
      {
        MessagerImage:require('../assets/images/Message7.png'),
        MessagerName:"Darrell Steward",
        MessagesType:"Hello",
        MessagesTime:"2h ago"
      }],
      TodayMessages:[{
        MessagerImage:require('../assets/images/Message1.png'),
        MessagerName:"Jane Teo",
        MessagesType:"Hello",
        MessagesTime:"2h ago"
      },
      {
        MessagerImage:require('../assets/images/Message2.png'),
        MessagerName:"Timothy Tan",
        MessagesType:"Okay",
        MessagesTime:"2h ago"
      },
      {
        MessagerImage:require('../assets/images/Message3.png'),
        MessagerName:"Toh Jia Yi",
        MessagesType:"Good Morning",
        MessagesTime:"2h ago"
      },
      {
        MessagerImage:require('../assets/images/Message4.png'),
        MessagerName:"Lauren Toh",
        MessagesType:"I will inform you!",
        MessagesTime:"2h ago"
      },
      {
        MessagerImage:require('../assets/images/Message5.png'),
        MessagerName:"Lim Jia Jun",
        MessagesType:"Hello!",
        MessagesTime:"2h ago"
      },
      {
        MessagerImage:require('../assets/images/Message6.png'),
        MessagerName:"Teresa Lee",
        MessagesType:"Hello",
        MessagesTime:"2h ago"
      }]
    }
  }
  render() {
    return (
      <View style={styles.Container}>
         <View style={styles.HeaderView}>
            <Image source={require('../assets/images/More.png')} style={styles.MoreImage}></Image>
            <Text style={styles.TitleName}>Messages</Text>
        </View>

        <View style={styles.Line}></View>

        <ScrollView>

        <Text style={styles.TodayText}>Today</Text>

        <FlatList
        data={this.state.TodayMessages}
        scrollEnabled={false}
        renderItem={({item})=>
          <View style={styles.MessageFlatListView}>
            <Image source={item.MessagerImage}></Image>
            <View style={styles.MessageView}>
              <Text style={styles.MessagerNameText}>{item.MessagerName}</Text>
              <Text style={styles.MessagerTypeText}>{item.MessagesType}</Text>
            </View>
            <Text style={styles.MessagerTimeText}>{item.MessagesTime}</Text>
          </View>
          
        }></FlatList>

      <Text style={styles.YesterdayMessageText}>Yersterday</Text>

        <FlatList
        data={this.state.YesterdayMessage}
        scrollEnabled={false}
        renderItem={({item})=>
          <View style={styles.MessageFlatListView}>
            <Image source={item.MessagerImage}></Image>
            <View style={styles.MessageView}>
              <Text style={styles.MessagerNameText}>{item.MessagerName}</Text>
              <Text style={styles.MessagerTypeText}>{item.MessagesType}</Text>
            </View>
            <Text style={styles.MessagerTimeText}>{item.MessagesTime}</Text>
          </View>
          
        }></FlatList>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'white'
  },
  //View
  HeaderView:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:22
  },
  Line:{
    borderWidth:1,
    borderColor:'rgba(0, 0, 0, 0.08)',
    marginTop:12
  },
  MessageFlatListView:{
    flexDirection:'row',
    marginLeft:20,
    marginRight:22,
    marginTop:13,
    borderBottomWidth:1,
    borderBottomColor:'rgba(0, 0, 0, 0.06)',
    paddingBottom:14
  },
  MessageView:{
    marginLeft:12,
    marginTop:4
  },
  //Images
  MoreImage:{
    position:'absolute',
    left:20
  },
  //Text
  TitleName:{
    color:'rgba(28, 28, 28, 1)',
    fontWeight:'700',
    fontSize:16,
    lineHeight:15,
    marginTop:5
  },
  TodayText:{
    color:'rgba(22, 80, 149, 1)',
    fontSize:16,
    lineHeight:16,
    fontWeight:'600',
    marginTop:24,
    marginLeft:20,
    marginBottom:5
  },
  MessagerNameText:{
    color:'rgba(23, 46, 81, 1)',
    fontWeight:'600',
    fontSize:16,
    lineHeight:16
  },
  MessagerTypeText:{
    color:'rgba(101, 101, 101, 1)',
    fontWeight:'500',
    fontSize:14,
    lineHeight:20
  },
  MessagerTimeText:{
    color:'rgba(150, 150, 150, 1)',
    fontWeight:'400',
    fontSize:12,
    lineHeight:14.65,
    position:'absolute',
    right:0,
    top:4
  },
  YesterdayMessageText:{
    color:'rgba(22, 80, 149, 1)',
    fontSize:16,
    lineHeight:16,
    fontWeight:'600',
    marginTop:20,
    marginLeft:20,
    marginBottom:5
  }
})