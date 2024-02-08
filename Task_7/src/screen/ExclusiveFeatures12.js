import { Text, View,StyleSheet,Image, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class ExclusiveFeatures12 extends Component {
    constructor(){
        super()
        this.state={

            arrData:[
                {
                  uri:require('../assets/images/image_1.png'),
                  url2:require('../assets/images/logo_1.png'),
                  url3:require('../assets/images/heart.png'),
                  text1:"Luxe Lounge",
                  ratingtext:"4.5",
                  starimage:require('../assets/images/star.png'),
                  locationimage:require('../assets/images/location.png'),
                  locationname:"Salwa Road, Doha Qatar",
                  distance:"2.5 km away"

                },
                {
                    uri:require('../assets/images/image_2.png'),
                    url2:require('../assets/images/logo_2.png'),
                    url3:require('../assets/images/heart.png'),
                    text1:"Q Lounge & Restaurant",
                    ratingtext:"4.5",
                    starimage:require('../assets/images/star.png'),
                    locationimage:require('../assets/images/location.png'),
                    locationname:"Salwa Road, Doha Qatar",
                    distance:"2.5 km away"
  
                  },
                  {
                    uri:require('../assets/images/image_3.png'),
                    url2:require('../assets/images/logo_3.png'),
                    url3:require('../assets/images/heart.png'),
                    text1:"Al-Sadd Sports Club",
                    ratingtext:"4.5",
                    starimage:require('../assets/images/star.png'),
                    locationimage:require('../assets/images/location.png'),
                    locationname:"Salwa Road, Doha Qatar",
                    distance:"2.5 km away"
  
                  },
                ]
               
           
        
    }
       
}
  render() {
    return (

        <ScrollView>

        
     
        <View style={styles.contianer}>
       
       <View style={styles.view1}>
           <Image source={require('../assets/images/back_button.png')} style={styles.back}></Image>
           <Text  style={styles.text1}>Featured Merchants</Text>
           <Image source={require('../assets/images/search.png')}  style={styles.search}></Image>
           <Image source={require('../assets/images/volume.png')}  style={styles.volume}></Image>
       </View>

       <View style={styles.line}></View>

       <Text style={styles.text2}>18 merchants available</Text>

        {this.state.arrData.map((item)=>(
             <View  style={styles.view2}>
             <Image source={item.uri} ></Image>
             <Image source={item.url2} style={styles.logo}></Image>
              <Image source={item.url3} style={styles.heart}></Image>
              <View style={{marginTop:15}}>
                 <View style={{flexDirection:'row'}}>
                     <Text style={styles.placename}>{item.text1}</Text>
                     <Text style={styles.ratingtextstyle}>{item.ratingtext}</Text>
                     <Image source={item.starimage} style={styles.star}></Image>
                 </View>
                 <View style={{flexDirection:'row',marginTop:6}}>
                  <Image source={item.locationimage} style={{marginTop:4.5}}></Image>
                     <Text style={styles.locationnamestyle}>{item.locationname}</Text>
                 </View>
                 <Text style={{color:'rgba(137, 137, 137, 1)',fontWeight:'300',fontSize:14,marginTop:4}}>{item.distance}</Text>
             </View>  
             </View>
        ))}
           
            
        </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    contianer:{
        flex:1,
        backgroundColor:'white',
       marginBottom:20
    },
    view1:{
        flexDirection:'row',
        justifyContent:'center',
        //marginTop:22,
        //marginHorizontal:20,
        
    },
    view2:{
        marginHorizontal:16,
        marginTop:16,
        width:358
    },
    back:{
        position:'absolute',
        left:20,
        top:18,
    },
    search:{
        position:'absolute',
        right:0,
        marginRight:50,
        top:28
    },
    volume:{
        position:'absolute',
        right:11,
       top:28
    },
    text1:{
        top:28,
        fontWeight:'500',
        fontSize:18,
        color:'rgba(1, 12, 53, 1)'
        
    },
    line:{
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 0, 0, 0.16)',
        marginTop:38 
    },
    text2:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:14,
        marginLeft:16,
        marginTop:26
    },
    logo:{
        position:'absolute',
        bottom:0,
        marginBottom:95,
        marginLeft:10
    },
    heart:{
        position:'absolute'
        ,right:0
        ,marginTop:7
        ,marginRight:10
    },
    star:{
       position:'absolute',
       right:0,
       top:1
    },
    placename:{
        fontWeight:'600',
        fontSize:16,
        color:'rgba(1, 12, 53, 1)',
    },
    ratingtextstyle:{
        fontWeight:'600',
        fontSize:12,
        color:'rgba(238, 105, 4, 1)',
        position:'absolute',
        right:0,
        marginRight:15
    },
    locationnamestyle:{
        fontSize:14,
        fontWeight:'400',
        color:'rgba(79, 79, 79, 1)',
        marginLeft:4
    }
})