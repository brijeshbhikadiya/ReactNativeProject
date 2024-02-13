import { Animated, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

 

const ItemSeparator=()=><View style={{width:296,borderBottomWidth:1,borderBottomColor:'rgba(185, 185, 185, 1)',marginTop:10,marginLeft:70}}></View>
const Header = () => <Text style={{fontSize:30,fontWeight:'700',color:'black',alignSelf:'center'}}>FlatList Header</Text>
const Footer = () => <Text style={{fontSize:30,fontWeight:'700',color:'black',alignSelf:'center'}}>FlatList Footer</Text>
export default class Demo4 extends Component {
    constructor(){
        super()
        this.scrollViewRef = React.createRef();
        this.state={
          
            data:[
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                },
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                },
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                },
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                },
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                },
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                },
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                },
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                },
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                }, 
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                }, 
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                }, 
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                }
                , 
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                }, 
                {
                    uri:require('../assets/images/image_1.png'),
                    imagename:"Jane Cooper",
                    phoneno:"(270)555-0117"
                }    
            ]

            
        }
       
    }
    scrollToTop=()=>{
        if(this.scrollViewRef.current){
            this.scrollViewRef.current.scrollToOffset({offset:0,animated:true})
        }
    }
    
    scrollToIndex = (index) => {
        if (this.scrollViewRef.current) {
          this.scrollViewRef.current.scrollToIndex({ animated: true, index });
        }
      };

      scrollToItem = (item) => {
        if (this.scrollViewRef.current) {
          this.scrollViewRef.current.scrollToItem({ animated: true, item });
        }
      };

  render() {
    return (
       
//       <View style={StyleSheet.container}>
//          <View style={styles.view1}>
//             <Image source={require('../assets/images/arrowLeft.png')} style={styles.backimage}></Image>
//             <Text style={styles.mycontact}>My Contacts</Text>
//             <Image source={require('../assets/images/ico-add.png')} style={styles.plus}></Image>
//         </View> 
        

//    <View style={styles.view2}> 
//          <View style={styles.view3}>
//             <Image  source={require('../assets/images/Group.png')} style={styles.searchimage}></Image>
//             <TextInput
//             placeholder='Search'
//             style={styles.serchtext}></TextInput>
//          </View> 
         
//          <FlatList
//         // ref={this.scrollViewRef}
         
//          data={this.state.data}
//          //ItemSeparatorComponent={ItemSeparator}
//         //  ListHeaderComponent={Header}
//         //  ListFooterComponent={Footer}
//          renderItem={({item})=>
//          <View style={{flexDirection:'row',marginLeft:27,marginTop:10,marginBottom:30}}>
//             <Image source={item.uri}></Image>
//             <View style={{marginLeft:8}}>
//                 <Text style={styles.imagenametext}>{item.imagename}</Text>
//                 <Text style={styles.phonenotext}>{item.phoneno}</Text>
//             </View>
//          </View>
//          }></FlatList>

    // </View> 
    
    // <TouchableOpacity onPress={this.scrollToTop}><Text style={{fontSize:100}}>Scroll To Top</Text></TouchableOpacity>
    
    // </View>
    <View style={styles.container}>
        <View style={styles.view1}>
            <Image source={require('../assets/images/arrowLeft.png')} style={styles.backimage}></Image>
            <Text style={styles.mycontact}>My Contacts</Text>
            <Image source={require('../assets/images/ico-add.png')} style={styles.plus}></Image>
        </View> 
       
         <View style={styles.view3}>
            <Image  source={require('../assets/images/Group.png')} style={styles.searchimage}></Image>
            <TextInput
            placeholder='Search'
            style={styles.serchtext}></TextInput>
         </View>
         
         <FlatList
        ref={this.scrollViewRef}
         
         data={this.state.data}
         ItemSeparatorComponent={ItemSeparator}
         ListHeaderComponent={Header}
         ListFooterComponent={Footer}
         inverted={true}
         renderItem={({item})=>
         <View style={{flexDirection:'row',marginLeft:27,marginTop:10,marginBottom:30}}>
            <Image source={item.uri} style={{height:90,width:90}}/>
            <View style={{marginLeft:8}}>
                <Text style={styles.imagenametext}>{item.imagename}</Text>
                <Text style={styles.phonenotext}>{item.phoneno}</Text>
            </View>
         </View>
         }/>


    <TouchableOpacity onPress={()=>{this.scrollToItem(this.state.data[0])}}><Text>Scroll To Top</Text></TouchableOpacity>
    </View>
    
    
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(246, 246, 246, 1)'
    },
    view1:{
        flexDirection:'row',
        backgroundColor:'rgba(246, 246, 246, 1)'
    },
    view2:{
       // width:2000,
      // flex:1,
        height:1000,
        backgroundColor:'white',
        marginTop:60,
        marginBottom:60
    },
    view3:{
        flexDirection:'row',
        marginLeft:27,
        borderRadius:15,
        backgroundColor:'rgba(239, 239, 239, 1)',
        width:335,
        height:40,
        marginTop:16
    },
    backimage:{
        position:'absolute',
        left:15,
        top:15
    },
    searchimage:{
        position:'absolute',
        top:12,
        left:12
    },
    mycontact:{
        position:'absolute',
        left:155,
        top:15,
        fontWeight:'600',
        fontSize:16,
        color:'rgba(0, 0, 0, 1)'
    },
    serchtext:{
        flex:0.9,
        left:32,
    },
    plus:{
        position:'absolute',
        right:15,
        top:15
    },
    imagenametext:{
        fontSize:17,
        fontWeight:'400',
        color:'rgba(0, 0, 0, 1)'
    },
    phonenotext:{
        fontSize:14,
        fontWeight:'400',
        color:'rgba(138, 138, 141, 1)',
        marginTop:4
    }
})