import { Image, StyleSheet, Text, TouchableOpacity, View, ViewComponent } from 'react-native'
import React, { Component } from 'react'

export default class demo extends Component {
    constructor()
    {
        super()
        this.state={
            currentdate2:new Date(),
            month:["January", "February","March", "April", "May", "June","July","August", "September", "October", "November", "December"],

        }
    }

    handlePreviousMonth = () =>{
        const prevMonth = new Date(
        this.state.currentdate2.getFullYear(),
        this.state.currentdate2.getMonth()-1,
        1)
        this.setState({
            currentdate2:prevMonth
        })
    }
    handleNextMonth = () =>{
        const NextMonth = new Date (
            this.state.currentdate2.getFullYear(),
            this.state.currentdate2.getMonth()+1,
            1
        )
        this.setState({
            currentdate2:NextMonth
        })
    }
   
  render() {
    const dayOfWeek = ["SU","MO","TU","WE","TH","FR","SA"]
    const monthyear =`${this.state.month[this.state.currentdate2.getMonth()]},${this.state.currentdate2.getFullYear()}`

    const firstDayOfMonth = new Date(
        this.state.currentdate2.getFullYear(),
        this.state.currentdate2.getMonth(),
        1
    ).getDay();


    const dayInmonth = new Date(
        this.state.currentdate2.getFullYear(),
        this.state.currentdate2.getMonth()+1,
        0).getDate();
        

        const daysInPreviousMonth = new Date(  //previous month na month
            this.state.currentdate2.getFullYear(),
            this.state.currentdate2.getMonth(),
            0,
        ).getDate();
        

        const days =Array.from(
            {
                length:dayInmonth+firstDayOfMonth+(6-new Date(
                this.state.currentdate2.getFullYear(),
                this.state.currentdate2.getMonth()+1,
                0,).
                getDay())
            },(item,index) => {
            // console.log("index",index);
            // console.log("firstdayofmonth",firstDayOfMonth);
            // console.log("daysinpreviousmonth",daysInPreviousMonth);
            // console.log("dayinmonth",dayInmonth);
            if(index < firstDayOfMonth){
                return {
                    day:daysInPreviousMonth - (firstDayOfMonth - index)+1, //
                    month:this.state.currentdate2.getMonth()=== 0 ? 11:this.state.currentdate2.getMonth()-1,
                    ispreviousMonth:true,
                }
            }else if(index < dayInmonth + firstDayOfMonth ){
                return {
                    day:index - firstDayOfMonth +1,
                    month:this.state.currentdate2.getMonth(),
                    iscurrrentmonth:true
                }
            }
            else{
                return {
                    day:index - (dayInmonth + firstDayOfMonth) + 1,
                    month:this.state.currentdate2.getMonth()===11?0:this.state.currentdate2.getMonth()+1,
                    isnextMonth:true}
            }
        });
        console.log(days);

    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
            <Text style={{marginTop:4}}>{monthyear}</Text>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress = {this.handlePreviousMonth}>
                    <Image source={require('../assets/images/calenderleft.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.handleNextMonth}>
                    <Image source={require('../assets/images/calenderright.png')} style={{marginLeft:10}}></Image>
                </TouchableOpacity>
            </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginTop:20}}>
            {dayOfWeek.map((item)=>(
                <Text
                key={item}>{item}</Text>
            ))}
        </View>

        <View style={{ marginHorizontal:4,
                    marginLeft:15,
                    marginTop:11,
                    flexDirection:'row',
                    flexWrap:'wrap'}}>
            {days.map((item)=>(
                <View >
                    <TouchableOpacity
                     style={
                        styles.daybutton}
                    key={item}>
                        <Text>{item.day}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
      </View>
    )
  }
}

const styles =StyleSheet.create({
    container:{
        flex:1
    },
    daybutton:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius:8,
        height:40,
        width:40,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'black',
        shadowOpacity:0.8,
        shadowOffset:{width:6,height:6},
        shadowRadius:100,
        elevation:4,
        marginVertical:5,
        marginRight:13,
        marginTop:10,
    },
})