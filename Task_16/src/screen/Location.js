import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'


export default class HomeScreen extends Component {
    constructor(){
        super();
        this.state={
            teamData:[
            {
                profileImage:require('../assets/images/Venue5.png'),
                teamName:"Football Venue",
                playerCount:"San Francisco",
                deleteImage:require('../assets/images/Delete.png')
            },
            {
                profileImage:require('../assets/images/Venue6.png'),
                teamName:"Fooball Space",
                playerCount:"San Francisco",
                deleteImage:require('../assets/images/Delete.png')
            },
            {
                profileImage:require('../assets/images/Venue1.png'),
                teamName:"Football Venue",
                playerCount:"San Francisco",
                deleteImage:require('../assets/images/Delete.png')
            },
            {
                profileImage:require('../assets/images/Venue1.png'),
                teamName:"Venue 1",
                playerCount:"San Francisco",
                deleteImage:require('../assets/images/Delete.png')
            },
            {
                profileImage:require('../assets/images/Venue1.png'),
                teamName:"Venue 2",
                playerCount:"San Francisco",
                deleteImage:require('../assets/images/Delete.png')
            },
            {
                profileImage:require('../assets/images/Venue1.png'),
                teamName:"Venue 3",
                playerCount:"San Francisco",
                deleteImage:require('../assets/images/Delete.png')
            },
            {
                profileImage:require('../assets/images/Venue1.png'),
                teamName:"Venue 4",
                playerCount:"San Francisco",
                deleteImage:require('../assets/images/Delete.png')
            },
            {
                profileImage:require('../assets/images/Venue1.png'),
                teamName:"Venue 5",
                playerCount:"San Francisco",
                deleteImage:require('../assets/images/Delete.png')
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
    return (
      <View style={styles.Container}>
        <ScrollView>
      

        {/* <View style={styles.LineView}></View> */}

        <View style={styles.InnerContainer}>
            {this.state.itemCount==1 || this.state.itemCount==0?<Text style={styles.TeamsCountText}>Team ({`${this.state.itemCount}`})</Text>:<Text style={styles.TeamsCountText}>Teams ({`${this.state.itemCount}`})</Text>}
            <FlatList
            scrollEnabled={false}
            data={this.state.teamData}
            renderItem={({item,index})=>
                <View style={styles.FlatlistView}>
                    <Image source={item.profileImage}></Image>
                    <View style={{marginLeft:10,marginTop:2}}>
                        <Text style={styles.TeamNameText}>{item.teamName}</Text>
                        <Text style={styles.TeamCountText}>{item.playerCount}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.handleDelete(item)} style={styles.DeleteImage}>
                        <Image source={item.deleteImage} ></Image>
                    </TouchableOpacity>
                </View>
            }
            ></FlatList>
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
        backgroundColor:'rgba(255, 255, 255, 1)'
    },
    InnerContainer:{
        backgroundColor:'rgba(246, 249, 252, 1)',
        paddingBottom:67
    },
    TitleBarView:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    FlatlistView:{
        flexDirection:'row',
        backgroundColor:'rgba(255, 255, 255, 1)',
        marginHorizontal:20,
        marginTop:5,
        marginBottom:5,
        borderRadius:10,
        shadowColor:'black',
        shadowOpacity:0.5,
        elevation:2,
        paddingVertical:8.5,
        paddingLeft:13.05,
        paddingRight:15.5,
    },
    LineView:{
        marginTop:17,
        borderColor:'rgba(180, 180, 183, 0.5)',
        borderWidth:1
    },
    MoreImage:{
        position:'absolute',
        left:20

    },
    SearchImage:{
        position:'absolute',
        right:20
    },
    DeleteImage:{
        position:'absolute',
        right:15.5,
        top:16.91
    },
    TeamsCountText:{
        marginTop:10,
        marginBottom:8,
        marginLeft:20,
        color:'rgba(0, 0, 0, 1)',
        fontWeight:'500',
        fontSize:16,
        lineHeight:19.49
    },
    TeamNameText:{
        color:'rgba(0, 0, 0, 1)',
        fontWeight:'500',
        fontSize:14,
        lineHeight:17.05
    },
    TeamCountText:{
        color:'rgba(0, 0, 0, 0.5)',
        fontWeight:'400',
        fontSize:13,
        //lineHeight:3
    }
})