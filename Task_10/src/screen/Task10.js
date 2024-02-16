import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export default class Task10 extends Component {
  constructor(){
    super()
    this.state={
        //showAllProducts: false,
        data1:[{
            uri1:require('../assets/images/hotel_image1.png'),
            imagename:"National Cancel Hospital",
            locationimage:require('../assets/images/location.png'),
            locationname:"Delhi, India",
            hospitalcodetext:"Hospital Code :",
            codetext:"A898"
        },
        {
            uri1:require('../assets/images/hotel_image1.png'),
            imagename:"The Heart Hopsital",
            locationimage:require('../assets/images/location.png'),
            locationname:"Delhi, India",
            hospitalcodetext:"Hospital Code :",
            codetext:"A898"
        }],
        data2:[{
            uri1:require('../assets/images/doctor_image1.png'),
            hospitalcodetext:"Doctor Code : ",
            codetext:"A898",
            doctorname:"Dr. Mahesh Shukla",
            dslogan:"First Priority Medical",
            locationimage:require('../assets/images/location_3.png'),
            locationname:"Delhi, India",
            doctortype:"Neurology, Kidney...",
            availabletext:"Available",
            pricetext:"₹ 150"


        },
        {
            uri1:require('../assets/images/doctor_image1.png'),
            hospitalcodetext:"Doctor Code : ",
            codetext:"A898",
            doctorname:"Dr. Mahesh Shukla",
            dslogan:"First Priority Medical",
            locationimage:require('../assets/images/location_3.png'),
            locationname:"Delhi, India",
            doctortype:"Neurology, Kidney...",
            availabletext:"Available",
            pricetext:"₹ 150"


        }],
        data3:[{
            uri1:require('../assets/images/product_poster1.png')
        },
        {
            uri1:require('../assets/images/product_poster1.png')
        }],
        arrData:[{
            uri1:require('../assets/images/product_imge1.png'),
            prodcutname:"Cardio Thoracic",
            productdis:"Luden's Throat Drops\nCherry - 25 ct",
            productprice:"₹ 150.00",
            productcrosprice:"₹ 170.00",
            addtext:"Add",
            uri2:require('../assets/images/product_image2.png'),
            prodcutname2:"Cardio Thoracic",
            productdis2:"Ostocalcium B12 Syrup-\n200ml-Banana",
        },
        {
            uri1:require('../assets/images/product_imge1.png'),
            prodcutname:"Cardio Thoracic",
            productdis:"Luden's Throat Drops\nCherry - 25 ct",
            productprice:"₹ 150.00",
            productcrosprice:"₹ 170.00",
            addtext:"Add",
            uri2:require('../assets/images/product_image2.png'),
            prodcutname2:"Cardio Thoracic",
            productdis2:"Ostocalcium B12 Syrup-\n200ml-Banana",
        },
        {
            uri1:require('../assets/images/product_imge1.png'),
            prodcutname:"Cardio Thoracic",
            productdis:"Luden's Throat Drops\nCherry - 25 ct",
            productprice:"₹ 150.00",
            productcrosprice:"₹ 170.00",
            addtext:"Add",
            uri2:require('../assets/images/product_image2.png'),
            prodcutname2:"Cardio Thoracic",
            productdis2:"Ostocalcium B12 Syrup-\n200ml-Banana",
        },
        {
            uri1:require('../assets/images/product_imge1.png'),
            prodcutname:"Cardio Thoracic",
            productdis:"Luden's Throat Drops\nCherry - 25 ct",
            productprice:"₹ 150.00",
            productcrosprice:"₹ 170.00",
            addtext:"Add",
            uri2:require('../assets/images/product_image2.png'),
            prodcutname2:"Cardio Thoracic",
            productdis2:"Ostocalcium B12 Syrup-\n200ml-Banana",
        },
        {
            uri1:require('../assets/images/product_imge1.png'),
            prodcutname:"Cardio Thoracic",
            productdis:"Luden's Throat Drops\nCherry - 25 ct",
            productprice:"₹ 150.00",
            productcrosprice:"₹ 170.00",
            addtext:"Add",
            uri2:require('../assets/images/product_image2.png'),
            prodcutname2:"Cardio Thoracic",
            productdis2:"Ostocalcium B12 Syrup-\n200ml-Banana",
        },]
    }
  }
  render() {
    return (
       
      <View style={styles.container}>

        <View style={styles.titlebar}>
            <Image source={require('../assets/images/doctor_image.png')} style={styles.doctorimage}></Image>
            <View >
                <Text style={styles.currentlocationtext}>Current Location</Text>
                <Text style={styles.locationnametext}>Delhi, India</Text>
            </View>
            <Image source={require('../assets/images/notification.png')} style={styles.notificationimage}></Image>
            <TouchableOpacity style={styles.addtobasketimage}>
                <Image source={require('../assets/images/addToBasket.png')} ></Image>
            </TouchableOpacity>
           
        </View>

        <View style={styles.searchbar}>
            <Image source={require('../assets/images/search.png')} style={styles.searchimage}></Image>
            <TextInput
            placeholder='Search Product, Clinics'
            style={styles.serchtextinputtext}></TextInput>
            <TouchableOpacity style={styles.filterview}>
                <Image source={require('../assets/images/candle.png')}></Image>
                <Text style={styles.filtertext}>Filter</Text>
            </TouchableOpacity>
        </View>

        <ScrollView>

        <View style={styles.scheduleview}>
            <Image source={require('../assets/images/schedule.png')}></Image>
            <Text style={styles.upcomingscheduletext}>Upcoming Schedule</Text>
        </View>

        <View >
            <Image source={require('../assets/images/orange_background.png')} style={{width:null,resizeMode:'stretch'}}></Image>
            <View style={{flexDirection:'row',position:'absolute',top:34,left:50}}>
                <Image source={require('../assets/images/profile_image.png')} style={styles.profileimage}></Image>
                <View style={styles.profileinformationtextview}>
                    <Text style={styles.idtext}>ID : 13254554545</Text>
                    <Text style={styles.doctorname}>Dr. Mahesh Shukla</Text>
                    <Text style={styles.medicalname}>First Priority Medical</Text>
                </View>
            </View>
            <View style={styles.dateandtimeview}>
                <View style={{flexDirection:'row',marginLeft:13,marginTop:16}}>
                    <Image source={require('../assets/images/red_schedule.png')}></Image>
                    <Text style={styles.datetext}>26</Text>
                    <Text style={styles.monthtext}>Sep</Text>
                </View>
                <View style={styles.lineview}></View>
                <View style={styles.clockview}>
                    <Image source={require('../assets/images/clock.png')}></Image>
                    <Text style={styles.timetext}>10:00 - 12:00</Text>
                </View>
            </View>
        </View>

        <View style={styles.informationview}>
            <Text style={styles.hospitallocationtext}>Hospital near you</Text>
            <TouchableOpacity>
                <Text style={styles.viewallinfromationtext}>View all hospitals</Text>
            </TouchableOpacity>
        </View>

        <View>
        <FlatList
        data={this.state.data1}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>
            <View style={{marginLeft:20,marginTop:15}}>
                <Image source={item.uri1}></Image>
                <View style={{position:'absolute',marginTop:60,marginLeft:15}}>
                    <Text style={styles.imagenametext}>{item.imagename}</Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Image source={item.locationimage}></Image>
                        <Text style={styles.lnametext}>{item.locationname}</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={styles.hcodetext}>{item.hospitalcodetext}</Text>
                        <Text style={styles.hcode}>{item.codetext}</Text>
                    </View>
                </View>
            </View>
        }>  
        </FlatList>

        <View style={styles.informationview}>
            <Text style={styles.hospitallocationtext}>Clinics near you</Text>
            <TouchableOpacity>
                <Text style={styles.viewallinfromationtext}>View all clinics</Text>
            </TouchableOpacity>
        </View>

        <FlatList
        data={this.state.data2}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>
            <View style={styles.flatlistview}>
                <View style={{marginLeft:5,marginTop:6}}>
                    <Image source={item.uri1} style={{height:137,width:127}}></Image>
                    <View style={{position:'absolute',marginLeft:9,marginTop:114,flexDirection:'row'}}>
                    <Text style={styles.hcodetext2}>{item.hospitalcodetext}</Text>
                    <Text style={styles.hcode2}>{item.codetext}</Text>
                    </View>
                </View>
                <View style={{marginLeft:15,marginTop:15}}>
                    <Text style={styles.dname}>{item.doctorname}</Text>
                    <Text style={styles.dslogan2}>{item.dslogan}</Text>
                    <View style={{flexDirection:'row',marginTop:8}}>
                        <Image source={item.locationimage}></Image>
                        <Text style={styles.lnametext2}>{item.locationname}</Text>
                    </View>
                    <Text style={styles.doctortypetext}>{item.doctortype}</Text>
                    <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
                        <TouchableOpacity style={styles.availabletouchable}>
                            <Text style={styles.availabletext2}>{item.availabletext}</Text>
                        </TouchableOpacity>
                        <Text style={styles.pricetext2}>{item.pricetext}</Text>
                    </View>
                </View>
            </View>
        }></FlatList>

        <FlatList
        data={this.state.data3}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>
            <View style={{marginTop:20,marginLeft:22}}>
                <Image source={item.uri1}></Image>
            </View>
        }></FlatList>

        <View style={styles.informationview}>
            <Text style={styles.hospitallocationtext}>Find your product quickely</Text>
            <TouchableOpacity>
                <Text style={styles.viewallinfromationtext}>View all</Text>
            </TouchableOpacity>
        </View>

        <View >
            {this.state.arrData.map((item)=>(
                <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:10,marginLeft:22,backgroundColor:'white',width:170,height:252,borderRadius:10,shadowColor:'black',shadowOpacity:0.5,shadowRadius:10,elevation:5}}>
                        <Image source={item.uri1} style={{alignSelf:'center',marginTop:27}}></Image>
                        <Text style={styles.pname}>{item.prodcutname}</Text>
                        <Text style={styles.pdesc}>{item.productdis}</Text>
                        <View style={{flexDirection:'row',marginLeft:12,marginTop:10}}>
                            <View>
                            <Text style={styles.ptext}>{item.productprice}</Text>
                            <Text style={styles.pclosetext}>{item.productcrosprice}</Text>
                            </View>
                            <View >
                                <TouchableOpacity style={styles.addtouchable}>
                                    <Text style={styles.addtextstyle}>{item.addtext}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:10,marginLeft:22,backgroundColor:'white',width:170,height:252,borderRadius:10,shadowColor:'black',shadowOpacity:0.5,shadowRadius:10,elevation:5}}>
                        <Image source={item.uri2} style={{alignSelf:'center',marginTop:27}}></Image>
                        <Text style={styles.pname}>{item.prodcutname2}</Text>
                        <Text style={styles.pdesc}>{item.productdis2}</Text>
                        <View style={{flexDirection:'row',marginLeft:12,marginTop:10}}>
                            <View>
                            <Text style={styles.ptext}>{item.productprice}</Text>
                            <Text style={styles.pclosetext}>{item.productcrosprice}</Text>
                            </View>
                            <View >
                                <TouchableOpacity style={styles.addtouchable}>
                                    <Text style={styles.addtextstyle}>{item.addtext}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
              ))}
            
        </View>
        {/* //jayre show all product per click kariye tayre extra item aaave e code ahiya che logic */}
{/* 
        <View>
            {this.state.showAllProducts?
            this.state.arrData.map((item)=>(
                <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:10,marginLeft:22,backgroundColor:'white',width:170,height:252,borderRadius:10,shadowColor:'black',shadowOpacity:0.5,shadowRadius:10,elevation:5}}>
                        <Image source={item.uri1} style={{alignSelf:'center',marginTop:27}}></Image>
                        <Text style={styles.pname}>{item.prodcutname}</Text>
                        <Text style={styles.pdesc}>{item.productdis}</Text>
                        <View style={{flexDirection:'row',marginLeft:12,marginTop:10}}>
                            <View>
                            <Text style={styles.ptext}>{item.productprice}</Text>
                            <Text style={styles.pclosetext}>{item.productcrosprice}</Text>
                            </View>
                            <View >
                                <TouchableOpacity style={styles.addtouchable}>
                                    <Text style={styles.addtextstyle}>{item.addtext}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop:10,marginLeft:22,backgroundColor:'white',width:170,height:252,borderRadius:10,shadowColor:'black',shadowOpacity:0.5,shadowRadius:10,elevation:5}}>
                        <Image source={item.uri2} style={{alignSelf:'center',marginTop:27}}></Image>
                        <Text style={styles.pname}>{item.prodcutname2}</Text>
                        <Text style={styles.pdesc}>{item.productdis2}</Text>
                        <View style={{flexDirection:'row',marginLeft:12,marginTop:10}}>
                            <View>
                            <Text style={styles.ptext}>{item.productprice}</Text>
                            <Text style={styles.pclosetext}>{item.productcrosprice}</Text>
                            </View>
                            <View >
                                <TouchableOpacity style={styles.addtouchable}>
                                    <Text style={styles.addtextstyle}>{item.addtext}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
              )):this.state.arrData.slice(0,3).map((item)=>(<View style={{flexDirection:'row'}}>
              <View style={{marginTop:10,marginLeft:22,backgroundColor:'white',width:170,height:252,borderRadius:10,shadowColor:'black',shadowOpacity:0.5,shadowRadius:10,elevation:5}}>
                  <Image source={item.uri1} style={{alignSelf:'center',marginTop:27}}></Image>
                  <Text style={styles.pname}>{item.prodcutname}</Text>
                  <Text style={styles.pdesc}>{item.productdis}</Text>
                  <View style={{flexDirection:'row',marginLeft:12,marginTop:10}}>
                      <View>
                      <Text style={styles.ptext}>{item.productprice}</Text>
                      <Text style={styles.pclosetext}>{item.productcrosprice}</Text>
                      </View>
                      <View >
                          <TouchableOpacity style={styles.addtouchable}>
                              <Text style={styles.addtextstyle}>{item.addtext}</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
              <View style={{marginTop:10,marginLeft:22,backgroundColor:'white',width:170,height:252,borderRadius:10,shadowColor:'black',shadowOpacity:0.5,shadowRadius:10,elevation:5}}>
                  <Image source={item.uri2} style={{alignSelf:'center',marginTop:27}}></Image>
                  <Text style={styles.pname}>{item.prodcutname2}</Text>
                  <Text style={styles.pdesc}>{item.productdis2}</Text>
                  <View style={{flexDirection:'row',marginLeft:12,marginTop:10}}>
                      <View>
                      <Text style={styles.ptext}>{item.productprice}</Text>
                      <Text style={styles.pclosetext}>{item.productcrosprice}</Text>
                      </View>
                      <View >
                          <TouchableOpacity style={styles.addtouchable}>
                              <Text style={styles.addtextstyle}>{item.addtext}</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </View>))}
            
        </View> */}

        {/* onPress={()=> this.setState((prevState)=>({showAllProducts:!prevState.showAllProducts})) */}

        <TouchableOpacity style={styles.viewallproducttouchable}> 
            <Text style={{color:'rgba(160, 32, 240, 1)',fontWeight:'500',fontSize:16}}>
           {this.state.showAllProducts?'View less products':'View show products'} 
            </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
</View>
      
    )
  }
}
const styles =StyleSheet.create({
    container:{
        flex:1
    },
    titlebar:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'center'
    },
    searchbar:{
        flexDirection:'row',
        backgroundColor:'white',
        shadowColor:'black',
        shadowOpacity:0.5,
        elevation:1,
        borderWidth:1,
        borderColor:'rgba(255, 255, 255, 0.4)',
        marginHorizontal:22,
        borderRadius:10,
        //height:56,
        //width:346,
        paddingBottom:5,
        marginTop:15
    },
    filterview:{
        backgroundColor: '#FF4500',
        shadowColor: '#000000',
        shadowRadius: 1,
        shadowOpacity: 1,
        shadowOffset: {width: 0, height: 0},
        elevation: 5,
        marginTop:12,
        marginRight:10,
        borderRadius: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        height: 36,
        width: 79
    },
    scheduleview:{
        flexDirection:'row',
        marginLeft:22,
        marginTop:18
    },
    profileinformationtextview:{
        marginLeft:20,
        marginTop:7
    },
    dateandtimeview:{
        flexDirection:'row',
        backgroundColor:'rgba(255, 255, 255, 1)',
       height:51,
       width:297,
    //    width:null,
    //    resizeMode:'stretch',
        borderRadius:10,
        position:'absolute',
        left:50,
        top:130
    },
    clockview:{
        marginLeft:19,
        marginTop:17,
        flexDirection:'row'
    },
    informationview:{
        marginTop:5,
        marginHorizontal:22,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    lineview:{
        height:16,
        borderWidth:0.5,
        marginLeft:37,
        marginTop:18,
        backgroundColor:'rgba(133, 139, 159, 1)'
    },
    flatlistview:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        width:312,
        height:147,
        marginBottom:5,
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowRadius:30,
        elevation:5,
        marginLeft:22,
        marginTop:15
    },
    availabletouchable:{
        backgroundColor:'rgba(82, 181, 47, 1)',
        width:72,
        height:27,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    addtouchable:{
        backgroundColor:'rgba(255, 69, 0, 1)',
        borderRadius:6,
        height:27,
        width:53,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:31,
        marginTop:6
    },
    viewallproducttouchable:{
        backgroundColor:'rgba(160, 32, 240, 0.08)',
        height:48,
        width:313,
        marginHorizontal:40,
        marginTop:18,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    doctorimage:{
        position:'absolute',
        left:19
    },
    notificationimage:{
        position:'absolute',
        right:53,
        top:12
    },
    addtobasketimage:{
        position:'absolute',
        right:15,
        top:8
    },
    searchimage:{
        position:'absolute',
        left:15,
        top:17
    },
    currentlocationtext:{
        color:'rgba(133, 139, 159, 1)',
        fontSize:12,
        fontWeight:'400'
    },
    locationnametext:{
        color:'rgba(33, 40, 59, 1)',
        fontWeight:'500',
        fontSize:16,
        marginLeft:5
    },
    serchtextinputtext:{
        flex:1,
        marginLeft:45,
        marginTop:5
    },
    filtertext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:14,
        marginLeft:5
    },
    upcomingscheduletext:{
        color:'rgba(33, 40, 59, 1)',
        fontWeight:'500',
        fontSize:18,
        marginLeft:6
    },
    idtext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:14
    },
    doctorname:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'700',
        fontSize:18
    },
    medicalname:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:14
    },
    datetext:{
        color:'rgba(33, 40, 59, 1)',
        fontWeight:'700',
        fontSize:14,
        marginLeft:8
    },
    monthtext:{
        color:'rgba(33, 40, 59, 1)',
        fontWeight:'400',
        fontSize:14,
        marginLeft:3
    },
    timetext:{
        color:'rgba(33, 40, 59, 1)',
        fontWeight:'700',
        fontSize:14,
        marginLeft:8,
        marginTop:-1
    },
    hospitallocationtext:{
        color:'rgba(33, 40, 59, 1)',
        fontWeight:'500',
        fontSize:16
    },
    viewallinfromationtext:{
        color:'rgba(160, 32, 240, 1)',
        fontWeight:'500',
        fontSize:16
    },
    imagenametext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:16
    },
    lnametext:{
        color:'rgba(133, 139, 159, 1)',
        fontWeight:'400',
        fontSize:14,
        marginLeft:5,

    },
    hcodetext:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:12
    },
    hcode:{
        color:'rgba(255, 69, 0, 1)',
        fontWeight:'500',
        fontSize:12,
        marginLeft:5
    },
    hcodetext2:{
        color:'rgba(255, 69, 0, 1)',
        fontWeight:'500',
        fontSize:12,
        //marginLeft:5 
    },
    hcode2:{
        color:'rgba(33, 40, 59, 1)',
        fontWeight:'500',
        fontSize:12
    },
    dname:{
        color:'rgba(33, 40, 59, 1)',
        fontWeight:'700',
        fontSize:16
    },
    dslogan2:{
        color:'rgba(133, 139, 159, 1)',
        fontWeight:'400',
        fontSize:12,
        marginTop:5
    },
    lnametext2:{
        color:'rgba(133, 139, 159, 1)',
        fontWeight:'400',
        fontSize:12,
        marginLeft:5
    },
    doctortypetext:{
        color:'rgba(255, 69, 0, 1)',
        fontWeight:'500',
        fontSize:12,
        marginTop:5
    },
    availabletext2:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:12,
       
    },
    pricetext2:{
        color:'rgba(255, 69, 0, 1)',
        fontWeight:'700',
        fontSize:20
    },
    pname:{
        color:'rgba(133, 139, 159, 1)',
        fontWeight:'500',
        fontSize:13,
        marginTop:20,
        marginLeft:12
    },
    pdesc:{
        color:'rgba(33, 40, 59, 1)',
        fontWeight:'500',
        fontSize:14,
        marginLeft:12
    },
    ptext:{
        color:'rgba(255, 69, 0, 1)',
        fontWeight:'700',
        fontSize:14,
        //marginTop:
    },
    pclosetext:{
        color:'rgba(133, 139, 159, 1)',
        fontWeight:'400',
        fontSize:12,
        marginTop:2,
        textDecorationLine:'line-through'
    },
    addtextstyle:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:14
    }
    
    
   

})