import { StyleSheet, Text, View,Image,TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React, { Component } from 'react'

export default class BrandProfile extends Component {

    constructor(){
        super()
        this.state={
            showlike:false,
            selectedTab:'Posts',
            data1:[{
                uri1:require('../assets/images/product1.png'),
                productname:"Jelly Cream With Jeju\nCherry Blossom",
                productprice:"$5.00",
                unavailabletext:"Unavailable",
                shoppingbagimage:require('../assets/images/empty_bag.png')
            },
            {
                uri1:require('../assets/images/product2.png'),
                productname:"Jelly Cream With Jeju\nCherry Blossom",
                productprice:"$5.00",
                unavailabletext:"On Sale",
                shoppingbagimage:require('../assets/images/empty_image2.png'),
                crossprice:"$10.00"
            },
            {
                uri1:require('../assets/images/product6.png'),
                productname:"Jelly Cream With Jeju\nCherry Blossom",
                productprice:"$5.00",
                //unavailabletext:"On Sale",
                shoppingbagimage:require('../assets/images/empty_image2.png')
            },
            {
                uri1:require('../assets/images/product5.png'),
                productname:"Jelly Cream With Jeju\nCherry Blossom",
                productprice:"$5.00",
                //unavailabletext:"On Sale",
                shoppingbagimage:require('../assets/images/empty_image2.png')
            },
            {
                uri1:require('../assets/images/product4.png'),
                productname:"Jelly Cream With Jeju\nCherry Blossom",
                productprice:"$5.00",
                //unavailabletext:"On Sale",
                shoppingbagimage:require('../assets/images/empty_image2.png')
            }],
            arrData:[{
                uri2:require('../assets/images/main_image.png'),
                imagedate:"Posted at 10 April, 2022",
                imagedes:"Beneath the makeup and behind the smile, I am just a girl who wishes for the world.Beneathsdsd the..",
                imagedes3:"See more",
                likeimage:require('../assets/images/like.png'),
                dislikeimage:require('../assets/images/dislike.png'),
                liket:"56k",
                commentimage:require('../assets/images/comment.png'),
                commentt:"235",
                shareimage:require('../assets/images/share.png'),
                sharet:"123",
                moreimage:require('../assets/images/more_2.png')

            },
            {
                uri2:require('../assets/images/main_image2.png'),
                imagedate:"Posted at 10 April, 2022",
                imagedes:"Beneath the makeup and behind the smile, I am just a girl who wishes for the world.Beneathsdsd the..",
                imagedes3:"See more",
                likeimage:require('../assets/images/like.png'),
                dislikeimage:require('../assets/images/dislike.png'),
                liket:"56k",
                commentimage:require('../assets/images/comment.png'),
                commentt:"235",
                shareimage:require('../assets/images/share.png'),
                sharet:"123",
                moreimage:require('../assets/images/more_2.png')

            }
        ]
    }
}

showlike=()=>{
    this.setState({
        showlike:!this.state.showlike
    })
}
  
 handleTabPress=(Tab)=>{
        this.setState({
            selectedTab:Tab
           
        })
};
  render() {
    return (
      
      <View style={styles.container}>
        
        <View style={styles.innerview}>
                <View style={styles.view1}>
                    <Image source={require('../assets/images/back.png')} style={styles.backimage}></Image>
                    <View>
                        <Text style={styles.title1}>Jessica Smith</Text>
                        <Text style={styles.title2}>Enthusiast</Text>
                    </View>
                    <Image source={require('../assets/images/more.png')} style={styles.moreimage}></Image>
                    <Image source={require('../assets/images/shopping_bag.png')} style={styles.shoppingimage}></Image>
                </View>

                <View style={styles.view2}>
                    <View>
                    <TouchableOpacity style={styles.followbutton}>
                        <Image source={require('../assets/images/plus.png')} style={{marginRight:6}}></Image>
                        <Text style={styles.followtext}>Follow</Text>
                    </TouchableOpacity>
                    <Image source={require('../assets/images/profile_image.png')} style={styles.profileimage}></Image>
                    </View>
                    <View style={{flexGrow:1,marginHorizontal:20}}>
                        <View style={styles.view3}>
                        <View>
                            <Text style={styles.text1}>256</Text>
                            <Text style={styles.text2}>Followers</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>320</Text>
                            <Text style={styles.text2}>Followings</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>15</Text>
                            <Text style={styles.text2}>Top Sellers</Text>
                        </View>
                        </View>
                        <View>
                        <TouchableOpacity style={styles.messagebutton}>
                            <Text style={styles.messagetext}>Message</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* <View style={{marginHorizontal:13,marginTop:14}}>
                    <View style={styles.view2}>
                    <TouchableOpacity style={styles.followbutton}>
                        <Image source={require('../assets/images/plus.png')} style={{marginRight:6}}></Image>
                        <Text style={styles.followtext}>Follow</Text>
                    </TouchableOpacity>
                        <Image source={require('../assets/images/profile_image.png')} style={styles.profileimage}></Image>
                        <View style={styles.view3}>
                        <View>
                            <Text style={styles.text1}>256</Text>
                            <Text style={styles.text2}>Followers</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>320</Text>
                            <Text style={styles.text2}>Followings</Text>
                        </View>
                        <View>
                            <Text style={styles.text1}>15</Text>
                            <Text style={styles.text2}>Top Sellers</Text>
                        </View>
                        </View>
                    </View>
                    <View style={styles.view4}>
                        <TouchableOpacity style={styles.messagebutton}>
                            <Text style={styles.messagetext}>Message</Text>
                        </TouchableOpacity>
                    </View>

                </View> */}

                <View style={styles.view5}>
                        <TouchableOpacity onPress={()=>this.handleTabPress('Posts')}>
                            <Text style={[styles.text4,this.state.selectedTab==='Posts'?styles.selectedTab:null]}>Posts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.handleTabPress('Products')}>
                            <Text style={[styles.text4, this.state.selectedTab==='Products'?styles.selectedTab:null]}>Products Used</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.handleTabPress('Gallery')}>
                            <Text style={[styles.text4, this.state.selectedTab==='Gallery'?styles.selectedTab:null]}>Gallery</Text>
                        </TouchableOpacity> 
                </View>     
            </View>

       {this.state.selectedTab==='Posts'?<ScrollView>
        
        <FlatList
        data={this.state.arrData}
        renderItem={({item,index})=>
        <View style={styles.postview}>
            <Image source={item.uri2} style={styles.mainimagestyle}></Image>
            <View style={{flexWrap:'wrap'}}>
            <Text style={styles.posteddatetext}>{item.imagedate}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.postdes}>{item.imagedes}
                    <Text style={styles.seemoretext}>{item.imagedes3}</Text>
                    </Text>
                </View>
            </View>
        <View>
        <FlatList
            data={this.state.data1}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=>
            
           <View style={styles.flatlistview}>
            <Image source={item.uri1} style={{height:117,width:117}}></Image>
            {
            index==0 && item.unavailabletext=="Unavailable"?
            <View style={styles.unavailabletouchable}>
            <Text style={styles.unavailabletextstyle}>{item.unavailabletext}</Text>
            </View>:
            item.unavailabletext=="On Sale"?
            <View style={styles.onsalestyle}>
            <Text style={styles.unavailabletextstyle}>{item.unavailabletext}</Text>
            </View>:null
            }
                <Image source={item.shoppingbagimage} style={styles.shoopingbagstyle}></Image>
                <Text style={styles.productnamestyle}>{item.productname}</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.pricetextstyle}>{item.productprice}</Text>
                <Text style={styles.crosspricetext}>{item.crossprice}</Text>
                </View>
                
           </View>
            }></FlatList>
        </View>
            <View style={{backgroundColor:'rgba(0, 0, 0, 0.03)',height:41,marginTop:8,flexDirection:'row'}}>
                <TouchableOpacity onPress={this.showlike}>
                     <Image source={this.state.showlike?
                     item.likeimage:item.dislikeimage} style={styles.likebutton}></Image>
                </TouchableOpacity>
                
                <Text style={styles.liketext}>{item.liket}</Text>
                <Image source={item.commentimage} style={styles.likebutton}></Image>
                <Text style={styles.liketext}>{item.commentt}</Text>
                <Image source={item.shareimage} style={styles.likebutton}></Image>
                <Text style={styles.liketext}>{item.sharet}</Text>
                <Image source={item.moreimage} style={styles.more2image}></Image>
            </View>
           
        </View>
     }></FlatList>

        </ScrollView>
        :this.state.selectedTab === 'Products'?<View style={{backgroundColor:'white'}}></View>:this.state.selectedTab === 'Gallery'?<View style={{backgroundColor:'white'}}></View>:null}
            

        <TouchableOpacity style={styles.filtertouchable}>
            <Image source={require('../assets/images/filter.png')}></Image>
        </TouchableOpacity>
        
      </View>

   

    
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    innerview:{
        backgroundColor:'white',
        //height:300,
        shadowColor:'#000000',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:2,

    },
    view1:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20,
    },
    view2:{
        //gap:20,
        marginHorizontal:13,
        marginTop:14,
       // justifyContent:'space-between',
        flexDirection:'row',
        //position:'absolute',
        //top:15,
        backgroundColor:'rgba(206, 28, 79, 1)',
       // width:364,
       // height:158,
       paddingBottom:25,
        borderRadius:10
    },
    view3:{
        //marginLeft:18,
        //flexGrow:1,
        justifyContent:'space-between',
        flexDirection:'row',
        //height:47,
        //width:240,
        marginTop:45
    },
    view4:{
      
        // marginLeft:10,
        // marginTop:20,
       // flexDirection:'row'
    },
    view5:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:20
    },
    onsalestyle:{
        height:19,
        width:77,
        backgroundColor:'rgba(206, 28, 79, 1)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:1000,
        position:'absolute',
        left:9,
        top:8.77
    },
    postview:{
        backgroundColor:'white',
        //width:374,
        flexDirection:'column',
       // height:596,
        marginHorizontal:8,
        marginTop:20,
        borderRadius:10,
        shadowColor:'black',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:5,
    },
    postinnerview:{
        backgroundColor:'red',
        width:374,
        height:41,
        marginTop:541,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    flatlistview:{
        marginLeft:12,
        marginTop:11
    },
    followbutton:{
        width:96,
        position:'absolute',
        top:-12,
        height:30,
        borderWidth:1,
        borderRadius:100,
        borderColor:'rgba(206, 28, 79, 1)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:16,
        shadowColor:'#000000',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:10,
        backgroundColor:'white',
    },
    messagebutton:{
        // position:'absolute',
         top:20,
        // left:10,
        //justifyContent:'space-around',
        marginBottom:20,
        width:112,
        height:35,
        backgroundColor:'white',
        borderRadius:100,
        borderWidth:1,
        shadowColor:'#000000',
        shadowRadius:3,
        shadowOffset:0.8,
        shadowOffset:{width:6,height:6},
        elevation:10,
        borderColor:'white',
        justifyContent:'center',
        alignItems:'center'

    },
    followtext:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'500',
        fontSize:13
    },
    messagetext:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'600',
        fontSize:16
    },
    seemoretext:{
       // marginTop:50,
        color:'rgba(222, 128, 154, 1)',
        fontWeight:'400',
        fontSize:14,
        // position:'absolute',
        // bottom:3
        // ,right:40
        //lineHeight:22,
       // borderWidth:1,
        //marginTop:20,
        //paddingBottom:10,
      // maxWidth:150
    },
    profileimage:{
        marginLeft:24,
        marginTop:33
    },
    backimage:{
        position:'absolute',
        left:20.26,
        top:9
    },
    moreimage:{
        position:'absolute',
        right:54,
        top:9
    },
    more2image:{
        position:'absolute',
        right:13,
        top:11
    },
    shoppingimage:{
        position:'absolute',
        right:20,
        top:9
    },
    mainimagestyle:{
        marginHorizontal:10,
        marginTop:10,
        resizeMode:'stretch',
        width:null
        //flexDirection:'row'
    },
    shoopingbagstyle:{
        position:'absolute',
        left:95,
        top:94,
        height:17,
        width:17
    },
    likebutton:{
        marginLeft:13.07,
        marginTop:2
    },
    liketext:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'500',
        fontSize:13,
        lineHeight:16,
        marginLeft:7,
        marginTop:13
    },
    productnamestyle:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'400',
        fontSize:11,
        lineHeight:13,
        marginTop:7
    },
    pricetextstyle:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'600',
        fontSize:12,
        lineHeight:13,
        marginTop:4
    },
    crosspricetext:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'400',
        fontSize:12,
        lineHeight:13,
        marginLeft:8,
        textDecorationLine:'line-through',
        marginTop:4
    },
    text1:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'700',
        fontSize:16,
        textAlign:'center',
    },
    text2:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'400',
        fontSize:14,
        //overflow:'hidden',
        //width:60,
        //height:15
    },
    text4:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'400',
        fontSize:14
    },
    title1:{
        color:'rgba(206, 28, 79, 1)',
        fontWeight:'600',
        fontSize:18
    },
    title2:{
        color:'rgba(79, 79, 79, 1)',
        fontWeight:'400',
        fontSize:13,
        marginLeft:25
    },
    posteddatetext:{
        color:'rgba(138, 138, 138, 1)',
        fontWeight:'400',
        fontSize:12,
        lineHeight:16,
        marginLeft:12,
        marginTop:8
    },
    postdes:{
        color:'rgba(8, 2, 4, 1)',
        fontWeight:'400',
        fontSize:13,
        marginLeft:12,
        marginTop:8,
        marginRight:20,
        lineHeight:22,
        //maxWidth:'90%',
        //flexWrap:'wrap',
    },
    unavailabletextstyle:{
        color:'rgba(255, 255, 255, 1)',
        fontWeight:'500',
        fontSize:11
    },
    selectedTab:{
    borderBottomWidth: 4,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomColor: 'pink',
    paddingBottom: 14,
    },
    unavailabletouchable:{
        height:19,
        width:77,
        backgroundColor:'rgba(79, 79, 79, 1)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:1000,
        position:'absolute',
        left:9,
        top:8.77
    },
    filtertouchable:{
        height:42,
        width:42,
        borderRadius:100,
        shadowColor:'black',
        shadowOpacity:0.7,
        shadowOffset:{width:6,height:6},
        shadowRadius:100,
        elevation:5,
        backgroundColor:'rgba(206, 28, 79, 1)',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        right:20,
        bottom:12
    }
})