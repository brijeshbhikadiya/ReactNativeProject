import { Text, View,StyleSheet,Image,ScrollView,FlatList,Alert,TouchableOpacity,Share } from 'react-native'
import React, { Component } from 'react'

export default class Turnaments extends Component {
    constructor(){
        super();
        this.state={
            teamData:[{
                TournamentImage:require('../assets/images/Turnament1.png'),
                TournamentName:"Tournament",
                TournamentType:"Football",
                LeagueImage:require('../assets/images/League.png'),
                LeagueName:"League",
                KnockoutImage:require('../assets/images/Knockout.png'),
                KnockoutName:"Knockout",
                delete:true,
                GroupImage:require('../assets/images/Group.png'),
                GroupName:"Group",
                ShareImage:require('../assets/images/Share.png'),
                DeleteFillImage:require('../assets/images/DeleteFill.png'),
                RightArrowImage:require('../assets/images/RightArrow.png')

            },
            {
                TournamentImage:require('../assets/images/Tournament2.png'),
                TournamentName:"Football World Cup",
                TournamentType:"Football",
                LeagueImage:require('../assets/images/League.png'),
                LeagueName:"League",
                KnockoutImage:require('../assets/images/Knockout.png'),
                KnockoutName:"Knockout",
                GroupImage:require('../assets/images/Group.png'),
                GroupName:"Group",
                RightArrowImage:require('../assets/images/RightArrow.png'),
                ShareImage:require('../assets/images/Share.png'),
                RemoveImage:require('../assets/images/Remove.png'),
                FollowingText:"Following",
                delete:false

            },
            {
                TournamentImage:require('../assets/images/Tournament3.png'),
                TournamentName:"Rugby World Cup ",
                TournamentType:"Rugby",
                LeagueImage:require('../assets/images/League.png'),
                LeagueName:"League",
                KnockoutImage:require('../assets/images/Knockout.png'),
                KnockoutName:"Knockout",
                GroupImage:require('../assets/images/Group.png'),
                GroupName:"Group",
                RightArrowImage:require('../assets/images/RightArrow.png'),
                ShareImage:require('../assets/images/Share.png'),
                RemoveImage:require('../assets/images/Remove.png'),
                RightArrowImage:require('../assets/images/RightArrow.png'),
                delete:false

            },
            {
                TournamentImage:require('../assets/images/Turnament1.png'),
                TournamentName:"Team 1",
                TournamentType:"10 Players",
                LeagueImage:require('../assets/images/League.png'),
                LeagueName:"League",
                KnockoutImage:require('../assets/images/Knockout.png'),
                KnockoutName:"Knockout",
                GroupImage:require('../assets/images/Group.png'),
                GroupName:"Group",
                RightArrowImage:require('../assets/images/RightArrow.png'),
                ShareImage:require('../assets/images/Share.png'),
                RemoveImage:require('../assets/images/Remove.png'),
                RightArrowImage:require('../assets/images/RightArrow.png'),
                delete:false

            }
        ],
        itemCount:0
        }
        
    }

    

    componentDidMount = () => {
        this.updateItemCount();
    }

    handleDelete = (index) => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to delete This Team',
            [{text:'Cancel',style:'cancel'},{text:'Delete',onPress:()=> this.deleteItem(index)}],{cancelable:false}
        );
    }

    deleteItem = (item) => {
        const updatedTeams = this.state.teamData.filter((team)=>team !== item);
        this.setState({
            teamData:updatedTeams,
        },() => {
            this.updateItemCount();
        })
    }

    updateItemCount = () => {
        const itemCount = this.state.teamData.length;
        this.setState({
            itemCount
        });
    }
  render() {

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };
    return (
      <View style={styles.Container}>

<ScrollView>
    

    {/* <View style={styles.LineView}></View> */}

    <View style={styles.InnerContainer}>
        {this.state.itemCount==1 || this.state.itemCount==0?<Text style={styles.TeamsCountText}>Tournament ({`${this.state.itemCount}`})</Text>:<Text style={styles.TeamsCountText}>Tournaments ({`${this.state.itemCount}`})</Text>}
       <FlatList
       data={this.state.teamData}
       scrollEnabled={false}
       renderItem={({item,index})=>
            <View style={styles.TournamentView}>
                <View style={{flexDirection:'row'}}>
                    <Image source={item.TournamentImage} style={styles.TournamentImageStyle}></Image>
                    <View style={{marginLeft:18,marginTop:23}}>
                        <Text style={styles.TournamentNameStyle}>{item.TournamentName}</Text>
                        <Text style={styles.TournamentTypeStyle}>{item.TournamentType}</Text>
                    </View>
                </View>
                 <View style={styles.LineView}></View>
                <View style={styles.TournamentInnerView}>
                    <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'rgba(240, 240, 240, 1)',borderRadius:100,paddingVertical:13,paddingLeft:20,marginBottom:8}}>
                        <Image source={item.LeagueImage}></Image>
                        <Text style={styles.LeagueNameStyle}>{item.LeagueName}</Text>
                        <Image source={item.RightArrowImage} style={{position:'absolute',right:16.25,top:15}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'rgba(240, 240, 240, 1)',borderRadius:100,paddingVertical:13,paddingLeft:20,marginBottom:8}}>
                        <Image source={item.KnockoutImage}></Image>
                        <Text style={[styles.LeagueNameStyle,styles.KnockoutNameStyle]}>{item.KnockoutName}</Text>
                        <Image source={item.RightArrowImage} style={{position:'absolute',right:16.25,top:15}}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'rgba(240, 240, 240, 1)',borderRadius:100,paddingVertical:13,paddingLeft:20,marginBottom:8}}>
                        <Image source={item.GroupImage}></Image>
                        <Text style={[styles.LeagueNameStyle,styles.GroupNameStyle]}>{item.GroupName}</Text>
                        <Image source={item.RightArrowImage}  style={{position:'absolute',right:16.25,top:15}}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.LineView}></View>
                
                <View style={{flexDirection:'row',marginHorizontal:16,justifyContent:'space-between',marginTop:16,marginBottom:15}}>
                    <TouchableOpacity onPress={onShare}>
                        <Image source={item.ShareImage}></Image>
                    </TouchableOpacity>
                    {item.delete?
                    <TouchableOpacity onPress={()=>this.handleDelete(item)}>
                    <Image source={item.DeleteFillImage}></Image>
                </TouchableOpacity>
                    :
                <View style={{flexDirection:'row'}}>
                    <View style={styles.FollowingView}>
                        <Text style={styles.FollowingTextStyle}>Following</Text>
                    </View>
            
                    <TouchableOpacity onPress={()=>this.handleDelete(item)}>
                        <Image source={item.RemoveImage}></Image>
                    </TouchableOpacity>
                </View>
                }
                    
                </View>


            </View>
            
            
       }>
       </FlatList>
    </View>
    
    </ScrollView>
    <Image source={require('../assets/images/Plus.png')} style={{alignSelf:'center',marginTop:-30,marginBottom:20}}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'white',
        //backfaceVisibility:'hidden'
    },
    InnerContainer:{
        backgroundColor:'rgba(246, 249, 252, 1)',
        paddingBottom:67
    },
    TournamentView:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        borderRadius:15,
        shadowColor:'black',
        shadowOpacity:0.5,
        elevation:3,
        marginLeft:13,
        marginRight:12,
        marginTop:6,
        marginBottom:18
    },
    TournamentInnerView:{
        marginLeft:15.5,
        marginRight:16.5,
        marginTop:17
    },
    LineView:{
        marginTop:18,
        borderColor:'rgba(180, 180, 183, 0.2)',
        borderWidth:1
    },
    FollowingView:{
        position:'absolute',
        backgroundColor:'rgba(14, 79, 245, 0.1)',
        borderRadius:50,
        paddingVertical:6.5,
        paddingHorizontal:12.5,
        right:30
        //left:221.5,
    },
    TournamentImageStyle:{
        marginLeft:16,
        marginTop:18
    },
    TournamentNameStyle:{
        color:'rgba(0, 0, 0, 1)',
        fontWeight:'700',
        fontSize:16,
        lineHeight:19.49
    },
    TournamentTypeStyle:{
        color:'rgba(0, 0, 0, 0.5)',
        fontWeight:'600',
        fontSize:14,
        lineHeight:14,
        marginTop:8
    },
    TeamsCountText:{
        marginTop:10,
        marginBottom:8,
        marginLeft:20,
        color:'rgba(0, 0, 0, 1)',
        fontWeight:'500',
        fontSize:14,
        lineHeight:17.05
    },
    LeagueNameStyle:{
        color:'rgba(31, 53, 71, 1)',
        fontWeight:'600',
        fontSize:14,
        lineHeight:14,
        marginLeft:10,
    },
    FollowingTextStyle:{
        color:'rgba(31, 53, 71, 1)',
        fontWeight:'600',
        fontSize:13,
        lineHeight:13,
    },
    KnockoutNameStyle:{
        marginTop:5
    },
    GroupNameStyle:{
        marginTop:3
    }
})