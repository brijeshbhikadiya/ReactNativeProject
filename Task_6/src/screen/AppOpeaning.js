import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React, { Component } from 'react'
const screenWidth = Dimensions.get('window').width;

export default class AppOpeaning extends Component {
    constructor(){
        super();
        this.scrollViewRef = React.createRef();
        this.state={
            isDetailViewVisible: false,
            selectedCoutry: 'EN',
            currentIndex:0,

            arrData:[{
                image1:require('../assets/images/center_image.png'),
                picturname:"International Transfers",
                pictureDiscription:"Send money abroad in minutes with lowest fees to\nbank accounts, wallets and much more."
            },
            {
                image1:require('../assets/images/Online_Discount.png'),
                picturname:"Shop & Get Best Deals",
                pictureDiscription:"Shop for your personal & business deals or get\nday-to-day services from nearby."
            },
            {
                image1:require('../assets/images/Layer_1.png'),
                picturname:"Security & Fund",
                pictureDiscription:"We are compliant with the local regulators & following\nbest practices to keep your data and money safe"
            }
        ]
        };
       
    }

  toggleDetailsView=()=>{
        this.setState({
            isDetailViewVisible:!this.state.isDetailViewVisible
        });
    };

   handleCoutryPress=(countryName)=>{
    this.setState({
        selectedCoutry:countryName,
        isDetailViewVisible:false
    });

    handleView=(index)=>{
        this.setState({
            currentIndex:index
        });
    }
};


    // handleScrolling=()=>{
    //     this.scrollViewRef.current.scrollTo({x:380,y:380,animated:true});
    // };

    // handleScrolling1=()=>{
    //     this.scrollViewRef.current.scrollTo({x:775,y:775,animated:true});
    // }

    // handleScrolling2=()=>{
    //     this.scrollViewRef.current.scrollTo({x:'null',y:'null',animated:true});
    // }
  

  render() {
    
    return (
      <View style={styles.container}>

        <View style={styles.view1}>
           
        <TouchableOpacity onPress={this.toggleDetailsView} style={styles.touchableopacitycontainer}>
                <Image source={require('../assets/images/main_logo.png')} style={{marginTop:3,marginLeft:4}}></Image>
                <Text style={styles.text1}>{this.state.selectedCoutry}</Text>

                {this.state.isDetailViewVisible ? (
                    <View style={styles.detailView}>
                        <TouchableOpacity onPress={() => this.handleCoutryPress('EN')} style={styles.countryContainer}>
                            <Image source={require('../assets/images/logo_1.png')} style={styles.countryImage} />
                            <Text style={styles.text2}>EN</Text>
                         </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.handleCoutryPress('DE')} style={styles.countryContainer}>
                            <Image source={require('../assets/images/logo_2.png')} style={styles.countryImage} />
                            <Text style={styles.text2}>DE</Text>
                            </TouchableOpacity>
                    </View>
           ):null}
        </TouchableOpacity>
            
            <View>
                <Image source={require('../assets/images/comment_image.png')}></Image>
            </View>

        </View>
        
        <View>
                    
            
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} ref={this.scrollViewRef}    
                onScroll={evnt => {
                  let indexValue = evnt.nativeEvent.contentOffset.x / screenWidth;
                  console.log('indexValue--', Math.ceil(indexValue));
                  this.setState({currentIndex: Math.ceil(indexValue)});
                }}>
                {this.state.arrData.map((item,index)=>(
                <View key={index} style={{
             width: screenWidth,
            alignSelf: 'center',}}>
                    <View style={styles.view2}>
                        <Image source={item.image1}></Image>
                    </View>
    
                     <View style={styles.view3}>
                         <Text style={styles.text3}>{item.picturname}</Text>
                    </View>
    
                     <View style={styles.view4}>
                         <Text style={styles.text4}>{item.pictureDiscription}</Text>
                    </View>
    
                    {/* <View style={styles.view5}>
                <Image source={require('../assets/images/line.png')}></Image>
                <Image source={require('../assets/images/round.png')} style={{marginLeft:9}}></Image>
                <Image source={require('../assets/images/round.png')} style={{marginLeft:9}}></Image>
            </View> */}
    
        {/* <TouchableOpacity onPress={()=>{
                this.scrollViewRef.current.scrollTo({x:this.state.width*this.state.index});
            }}>
                {this.state.currentindex=this.state.index?<View style={styles.selectedots}></View>: <View style={styles.indexdots}></View>}
            </TouchableOpacity> */}
        
                </View>
    
            /* <View style={{flex:1,
            width: Dimensions.get('window').width,
            alignSelf: 'center',}}>
                    <View style={styles.view2}>
                <Image source={require('../assets/images/Online_Discount.png')}></Image>
            </View>
    
            <View style={styles.view8}>
                <Text style={styles.text3}>Shop & Get Best Deals</Text>
            </View>
    
            <View style={styles.view4}>
                <Text style={styles.text4}>Shop for your personal & business deals or get {'\n'} day-to-day services from nearby.</Text>
            </View>
    
            <View style={styles.view5}>
                <Image source={require('../assets/images/round.png')}></Image>
                <Image source={require('../assets/images/line.png')} style={{marginLeft:9}}></Image>
                <Image source={require('../assets/images/round.png')} style={{marginLeft:9}}></Image>
            </View>
             {/* <TouchableOpacity onPress={()=>{
                this.scrollViewRef.current.scrollTo({x:this.state.width*this.state.index});
            }}>
                {this.state.currentindex=this.state.index?<View style={styles.selectedots}></View>: <View style={styles.indexdots}></View>}
            </TouchableOpacity> */
    
           
    
            // {/* </View> */} 
    
    
            // {/* <View style={{maflex:1,
            // width: Dimensions.get('window').width,
            // alignSelf: 'center',}}>
            //         <View style={styles.view2}>
            //              <Image source={require('../assets/images/Layer_1.png')}></Image>
            //         </View>
    
            //         <View style={styles.view8}>
            //             <Text style={styles.text3}>Security & Fund</Text>
            //          </View>
    
            //         <View style={styles.view4}>
            //             <Text style={styles.text4}>We are compliant with the local regulators & following {'\n'}best practices to keep your data and money safe</Text>
            //          </View>
    
            //         <View style={styles.view5}>
            //             <Image source={require('../assets/images/round.png')}></Image>
            //             <Image source={require('../assets/images/round.png')} style={{marginLeft:9}}></Image>
            //              <Image source={require('../assets/images/line.png')} style={{marginLeft:9}}></Image>
            //          </View> */}
            // {/* //          <TouchableOpacity onPress={()=>{
            // //     this.scrollViewRef.current.scrollTo({x:this.state.width*this.state.index});
            // // }}>
            // //     {this.state.currentindex=this.state.index?<View style={styles.selectedots}></View>: <View style={styles.indexdots}></View>}
            // // </TouchableOpacity> */}
           
    
            // {/* </View> */}
    
        ))}
            </ScrollView>

            <View style={{flexDirection:'row',justifyContent:'center'}}>
                {this.state.arrData.map((item,index)=>{
                    return(
                        <TouchableOpacity onPress={() => {this.handleView}}>
                            {this.state.currentIndex === index ? <View style={styles.blueLine}></View>:<View style={styles.roundIcon}></View>}
                        </TouchableOpacity>
                    )
                })}
            </View>
            

            <View style={styles.view6}>
            <TouchableOpacity style={styles.getstarted} onPress={() => {
            this.scrollViewRef.current.scrollTo({
              x: screenWidth * (this.state.currentIndex+1),
              animated: true,
            });
            this.setState({
              currentIndex: this.state.currentIndex + 1,
            });
          }}>
                <Text style={styles.text5}>Get Started</Text>
            </TouchableOpacity>
        </View>

        </View>
    

        <View style={styles.view7}>
            <Text style={{color:'rgba(29, 58, 112, 1)',fontSize:13,fontWeight:'400'}}>Just want to take a look?</Text ><Text style={{color:'rgba(22, 182, 231, 1)',fontSize:13,fontWeight:'400'}}> Check our rates</Text>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    view1:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:19,
        marginVertical:28
    },
    view2:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:27
        
    },
    view3:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:48.05
    },
    view4:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:29
    },
    view5:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:38,
        flexDirection:'row'
    },
    view6:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:55
    },
    view7:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:50
    },
    view8:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop:76
    },
    touchableopacitycontainer:{
        flexDirection:'row',
        backgroundColor:'rgba(239, 239, 239, 1)',
        height:30,
        width:58,
        borderRadius:20
    },
    text1:{
        marginLeft:3,
        marginTop:4.5,
        fontSize:14,
        fontWeight:'600',
        color:'rgba(29, 58, 112, 1)'
    },
    text2:{
        marginLeft:10,
        marginTop:4.5,
        fontSize:14,
        fontWeight:'600',
        color:'rgba(29, 58, 112, 1)'
    },
    text3:{
        fontSize:28,
        fontWeight:'700',
        color:'rgba(29, 58, 112, 1)'
    },
    text4:{
        fontSize:14,
        fontWeight:'400',
        color:'rgba(107, 114, 128, 1)',
        textAlign:'center'
    },
    text5:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'600',
        color:'rgba(255, 255, 255, 1)',
    },
    detailView: {
        shadowColor:'rgba(0, 0, 0, 0.21)',
        shadowOpacity:5,
        shadowRadius:5,
        shadowOffset:{height:2,width:2},
        elevation:10,
        backgroundColor:'#FFFFFF',
        borderRadius:20,
        height:80,
        width:80,
        padding:12,
        position:'absolute'
      },
      countryContainer: {
       flexDirection:'row',
      },
      countryImage: {
        width: 22,
        height: 22,
        marginTop:5
      },
      getstarted:{
        height:47,
        width:232,
        backgroundColor:'rgba(111, 158, 255, 1)',
        borderRadius:33,
        justifyContent:'center',
      },
      blueLine:{
        width:30,
        height:6,
        backgroundColor:'rgba(111, 158, 255, 1)',
        marginTop:40,
        borderRadius:30,
        marginHorizontal:5

      },
      roundIcon:{
        backgroundColor:'grey',
        borderRadius:30,
        height:6,
        width:6,
        marginTop:40,
        marginHorizontal:5
      }
//       indexdots:{
//         height:12,
//         width:12,
//         backgroundColor:'rgba(186, 195, 210, 1)',
//         borderRadius:10,
//         marginHorizontal:150
//    },
//    indexdots2:{
//     height:12,
//     width:12,
//     backgroundColor:'rgba(186, 195, 210, 1)',
//     borderRadius:10,
//     marginHorizontal:170
// },
// indexdots3:{
//     height:12,
//     width:12,
//     backgroundColor:'rgba(186, 195, 210, 1)',
//     borderRadius:10,
//     marginHorizontal:180
// },
//       selectedots:{
//         height:8,
//         width:24,
//         borderRadius:15,
//         backgroundColor:'rgba(111, 158, 255, 1)',
//         marginLeft:100
//       },
})

