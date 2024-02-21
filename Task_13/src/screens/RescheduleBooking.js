import { FlatList, Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class RescheduleBooking extends Component {
    constructor(){
        super()
        this.state = {
            am:false,
            pm:true,
            data:[{
                time1:"12:00 pm - 12:29 pm",
                time2:"12:30 pm - 12:59 pm"
            },
            {
                time1:"1:00 pm - 1:29 pm",
                time2:"1:30 pm - 1:59 pm"
            },
            {
                time1:"12:00 pm - 2:29 pm",
                time2:"2:30 pm - 2:59 pm"
            },
            {
                time1:"3:00 pm - 3:30 pm",
                time2:"3:30 pm - 3:59 pm"
            },
            {
                time1:"5:00 pm - 5:29 pm",
                time2:"5:30 pm - 5:59 pm"
            },
            {
                time1:"6:00 pm - 6:29 pm",
                time2:"6:30 pm - 6:59 pm"
            },
            {
                time1:"7:00 pm - 7:29 pm",
                time2:"7:30 pm - 7:59 pm"
            },
            {
                time1:"8:00 pm - 8:29 pm",
                time2:"8:30 pm - 8:59 pm"
            },
            {
                time1:"9:00 pm - 9:29 pm",
                time2:"9:30 pm - 9:59 pm"
            },
            {
                time1:"10:00 pm - 10:29 pm",
                time2:"10:30 pm - 10:59 pm"
            },
            {
                time1:"11:00 pm - 11:29 pm",
                time2:"11:30 pm - 11:59 pm"
            }],
            data2:[{
                time1:"12:00 am - 12:29 am",
                time2:"12:30 am - 12:59 am"
            },
            {
                time1:"1:00 am - 1:29 am",
                time2:"1:30 am - 1:59 am"
            },
            {
                time1:"12:00 am - 2:29 am",
                time2:"2:30 am - 2:59 am"
            },
            {
                time1:"3:00 am - 3:30 am",
                time2:"3:30 am - 3:59 am"
            },
            {
                time1:"5:00 am - 5:29 am",
                time2:"5:30 am - 5:59 am"
            },
            {
                time1:"6:00 am - 6:29 am",
                time2:"6:30 am - 6:59 am"
            },
            {
                time1:"7:00 am - 7:29 am",
                time2:"7:30 am - 7:59 am"
            },
            {
                time1:"8:00 am - 8:29 am",
                time2:"8:30 am - 8:59 am"
            },
            {
                time1:"9:00 am - 9:29 am",
                time2:"9:30 am - 9:59 am"
            },
            {
                time1:"10:00 am - 10:29 am",
                time2:"10:30 am - 10:59 am"
            },
            {
                time1:"11:00 am - 11:29 am",
                time2:"11:30 am - 11:59 am"
            }]
        }
    }
  render() {
    return (
      <View style={styles.contianer}>
        <ScrollView>

        <View style={{backgroundColor:'white'}}>
            <Image source={require('../assets/images/back_image.png')} style={styles.backimage}></Image>
            <Text style={styles.reschedulebookingtext}>Reschedule Booking </Text>

            <Text style={styles.schedulemovedtotext}>You're requesting your booking is moved to</Text>

            <View style={styles.timeanddateview}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/calender.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.timeanddatetext}>Thurs, 7 July, 10:42am</Text>
            </View>

            <View style={{backgroundColor:'rgba(244, 244, 244, 1)',width:390,height:424}}>

            </View>

            <View>
                <View style={{flexDirection:'row',marginTop:20,marginHorizontal:16,justifyContent:'space-between'}}>
                    <Text style={styles.starttimetext}>Which start time suits best?</Text>
                    <View style={{flexDirection:'row',backgroundColor:'rgba(244, 244, 244, 1)',borderRadius:4,paddingVertical:2}}>
                        <TouchableOpacity style={this.state.am?styles.amviewafter:null} onPress={()=>this.setState({am:true,pm:false})}>
                            <Text style={this.state.am?styles.amtextbefore:styles.amtextafter}>AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={this.state.pm?styles.pmviewafter:null} onPress={()=>this.setState({am:false,pm:true})} >
                            <Text style={this.state.pm?styles.pmtextafter:styles.pmtextbefore}>PM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginHorizontal:16}}>
                    <Text style={styles.remaningtimetext}>Time needed to complete all selected{'\n'}services: <Text style={styles.remaningtime}>245 mins</Text></Text>
                </View>
            </View>


            {this.state.pm==true? 
            
            <FlatList
            data={this.state.data}
            renderItem={({item,index})=>
                <View style={{marginHorizontal:16,marginTop:20,justifyContent:'space-between',flexDirection:'row'}}>
                    <TouchableOpacity style={index==0?styles.time1view:styles.time2view}>
                        <Text style={index==0?styles.timetext1:styles.timetext2}>{item.time1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={index==0?styles.time1view:styles.time2view}>
                        <Text style={index==0?styles.timetext1:styles.timetext2}>{item.time2}</Text>
                    </TouchableOpacity>
                </View>
            }>

            </FlatList>
            :
            <FlatList
            data={this.state.data2}
            renderItem={({item,index})=>
                <View style={{marginHorizontal:16,marginTop:20,justifyContent:'space-between',flexDirection:'row'}}>
                    <TouchableOpacity style={index==0?styles.time1view:styles.time2view}>
                        <Text style={index==0?styles.timetext1:styles.timetext2}>{item.time1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={index==0?styles.time1view:styles.time2view}>
                        <Text style={index==0?styles.timetext1:styles.timetext2}>{item.time2}</Text>
                    </TouchableOpacity>
                </View>
            }>

            </FlatList>}
           
            <TouchableOpacity style={styles.sendrequesttouchable}>
                <Text style={styles.sendrequesttext}>Send Reschedule Request</Text>
            </TouchableOpacity>

        </View>
        
        </ScrollView>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    contianer:{
        flex:1
    },
    timeanddateview:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:13,
        paddingBottom:13
    },
    pmviewafter:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        paddingVertical:4,
        paddingHorizontal:6,
        borderRadius:4,
        marginLeft:9,
        marginRight:2,
        shadowColor:'black',
        shadowOpacity:0.8,
        shadowOffset:{width:6,height:6},
        shadowRadius:100,
        elevation:2,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.04)'
    },
    amviewafter:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        paddingVertical:4,
        paddingHorizontal:6,
        borderRadius:4,
        marginLeft:9,
        marginRight:2,
        shadowColor:'black',
        shadowOpacity:0.8,
        shadowOffset:{width:6,height:6},
        shadowRadius:100,
        elevation:2,
        borderWidth:1,
        borderColor:'rgba(0, 0, 0, 0.04)'
    },
    time1view:{
        height:43,
         width:171,
        borderWidth:1,
        borderColor:'rgba(199, 199, 199, 1)',
        // paddingVertical:11,
        // paddingHorizontal:21,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    time2view:{
        height:43,
        width:171,
        borderWidth:1,
        borderColor:'rgba(222, 128, 154, 1)',
        // paddingVertical:11,
        // paddingHorizontal:21,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center'
    },
    backimage:{
        marginTop:21,
        marginLeft:16
    },
    reschedulebookingtext:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'700',
        fontSize:20,
        lineHeight:29,
        marginLeft:20,
        marginTop:13.91
    },
    schedulemovedtotext:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:14,
        lineHeight:19,
        marginLeft:20,
        marginTop:13
    },
    timeanddatetext:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'600',
        fontSize:15,
        lineHeight:19,
        marginLeft:5
    },
    starttimetext:{
        color:'rgba(222, 128, 154, 1)',
        fontWeight:'400',
        fontSize:18,
        lineHeight:18,
        marginTop:6
    },
    amtextafter:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'600',
        fontSize:16,
        lineHeight:16,
        marginLeft:8,
        marginTop:8
    },
    amtextbefore:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'600',
        fontSize:16,
        lineHeight:16,
        marginTop:3
    },
    pmtextafter:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'600',
        fontSize:16,
        lineHeight:16,
        marginTop:3,
    },
    pmtextbefore:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'600',
        fontSize:16,
        lineHeight:16,
        marginLeft:8,
        marginTop:8,
        marginRight:8
    },
    remaningtimetext:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:13,
        lineHeight:16
    },
    remaningtime:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'400',
        fontSize:13,
        lineHeight:16,
    },
    timetext1:{
        color:'rgba(199, 199, 199, 1)',
        fontWeight:'600',
        fontSize:14,
        //width:130,
        lineHeight:22
    },
    timetext2:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'600',
        fontSize:14,
        //width:130,
        lineHeight:22
    },
    sendrequesttext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'700',
        fontSize:20,
        lineHeight:26.86
    },
    sendrequesttouchable:{
        backgroundColor:'rgba(243, 167, 93, 1)',
        borderRadius:100,
        marginHorizontal:20,
        paddingHorizontal:52,
        paddingVertical:14,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:38,
        marginTop:38
    }
    
})