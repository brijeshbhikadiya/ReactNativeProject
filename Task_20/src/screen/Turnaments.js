import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Alert,
  TouchableOpacity,
  Share,
  Modal,
  Button,
} from 'react-native';
import React, {Component} from 'react';

export default class Turnaments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      isFollow:true,
      teamData: [
        {
          TournamentImage: require('../assets/images/Turnament1.png'),
          TournamentName: 'Tournament',
          TournamentType: 'Football',
          delete: true,
          isFollow:true,
          ShareImage: require('../assets/images/Share.png'),
          DeleteFillImage: require('../assets/images/DeleteFill.png'),
          SelectFormatData: [
            {
              LeagueImage: require('../assets/images/League.png'),
              LeagueName: 'League',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
            {
              LeagueImage: require('../assets/images/Knockout.png'),
              LeagueName: 'Knockout',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
            {
              LeagueImage: require('../assets/images/Group.png'),
              LeagueName: 'Group',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
          ],
        },
        {
          TournamentImage: require('../assets/images/Tournament2.png'),
          TournamentName: 'Football World Cup',
          TournamentType: 'Football',
          isFollow:false,
          ShareImage: require('../assets/images/Share.png'),
          RemoveImage: require('../assets/images/Remove.png'),
          FollowingText: 'Following',
          delete: false,
          SelectFormatData: [
            {
              LeagueImage: require('../assets/images/League.png'),
              LeagueName: 'League',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
            {
              LeagueImage: require('../assets/images/Knockout.png'),
              LeagueName: 'Knockout',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
            {
              LeagueImage: require('../assets/images/Group.png'),
              LeagueName: 'Group',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
          ],
        },
        {
          TournamentImage: require('../assets/images/Tournament3.png'),
          TournamentName: 'Rugby World Cup ',
          TournamentType: 'Rugby',
          ShareImage: require('../assets/images/Share.png'),
          RemoveImage: require('../assets/images/Remove.png'),
          isFollow:false,
          delete: false,
          SelectFormatData: [
            {
              LeagueImage: require('../assets/images/League.png'),
              LeagueName: 'League',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
            {
              LeagueImage: require('../assets/images/Knockout.png'),
              LeagueName: 'Knockout',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
            {
              LeagueImage: require('../assets/images/Group.png'),
              LeagueName: 'Group',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
          ],
        },
        {
          TournamentImage: require('../assets/images/Turnament1.png'),
          TournamentName: 'Team 1',
          TournamentType: '10 Players',
          ShareImage: require('../assets/images/Share.png'),
          RemoveImage: require('../assets/images/Remove.png'),
          isFollow:false,
          delete: false,
          SelectFormatData: [
            {
              LeagueImage: require('../assets/images/League.png'),
              LeagueName: 'League',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
            {
              LeagueImage: require('../assets/images/Knockout.png'),
              LeagueName: 'Knockout',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
            {
              LeagueImage: require('../assets/images/Group.png'),
              LeagueName: 'Group',
              RightArrowImage: require('../assets/images/RightArrow.png'),
            },
          ],
        },
      ],
      PopUpData: [
        {
          TrophyImage: require('../assets/images/BlackTrophy.png'),
          PopUpText: 'Create new tournament',
          RightArrowImage: require('../assets/images/RightArrowBlue.png'),
        },
        {
          TrophyImage: require('../assets/images/PublicIcon.png'),
          PopUpText: 'Follow a public tournament',
          RightArrowImage: require('../assets/images/RightArrowBlue.png'),
        },
      ],
      itemCount: 0,
    };
  }

  componentDidUpdate = (prevState) => {
    const data = this.props.route.params || '';
    console.log(data);
    // if (!this.state.teamData.some(item => item.TournamentName === data.TournamentName)) {
    //     const updatedTeamData = [...this.state.teamData, data];
    //     this.setState({ teamData: updatedTeamData });
    // }
    if(data!=undefined && !this.state.teamData.includes(data)&& prevState.route.params!=data) {
      this.state.teamData.push(data);
    } 
    
};

  componentDidMount = () => {
    this.updateItemCount();
  };

  isModelVisible = visible => {
    this.setState({
      isVisible: !visible,
    });
  };
  handleDelete = index => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete This Team',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', onPress: () => this.deleteItem(index)},
      ],
      {cancelable: false},
    );
  };

  deleteItem = item => {
    const updatedTeams = this.state.teamData.filter(team => team !== item);
    this.setState(
      {
        teamData: updatedTeams,
      },
      () => {
        this.updateItemCount();
      },
    );
  };

  updateItemCount = () => {
    const itemCount = this.state.teamData.length;
    this.setState({
      itemCount,
    });
  };
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
          <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.state.isVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            {/*All views of Modal*/}
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <View style={styles.ModelContainer}>
                <Text style={styles.CreateTurnamentText}>
                  Create Tournament
                </Text>
                <Text style={styles.DescriptionPopUpText}>
                  Create new tournament or follow a{'\n'}public tournament.
                </Text>
                <FlatList
                  data={this.state.PopUpData}
                  renderItem={({item, index}) => (
                    <TouchableOpacity
                      style={styles.FlatlistPopUpView}
                      onPress={
                        index == 0
                          ? () =>
                              this.props.navigation.navigate(
                                'CreateNewTurnaments',
                              )
                          : null
                      }>
                      <Image source={item.TrophyImage}></Image>
                      <Text style={styles.PopUpTextStyle}>
                        {item.PopUpText}
                      </Text>
                      <Image
                        source={item.RightArrowImage}
                        style={styles.RightArrowImageStyle}></Image>
                    </TouchableOpacity>
                  )}></FlatList>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({isVisible: false});
                  }}
                  style={styles.CanclePopUp}>
                  <Image
                    source={require('../assets/images/CloseButton.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          {/* <View style={styles.LineView}></View> */}

          <View style={styles.InnerContainer}>
            {this.state.itemCount == 1 || this.state.itemCount == 0 ? (
              <Text style={styles.TeamsCountText}>
                Tournament ({`${this.state.itemCount}`})
              </Text>
            ) : (
              <Text style={styles.TeamsCountText}>
                Tournaments ({`${this.state.itemCount}`})
              </Text>
            )}

            <FlatList
              data={this.state.teamData}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <View style={styles.TournamentView}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={item.TournamentImage}
                      style={styles.TournamentImageStyle}></Image>
                    <View style={{marginLeft: 18, marginTop: 23}}>
                      <Text style={styles.TournamentNameStyle}>
                        {item.TournamentName}
                      </Text>
                      <Text style={styles.TournamentTypeStyle}>
                        {item.TournamentType}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.LineView}></View>

                  {item.SelectFormatData?.map((itemOpt, index) => (
                    <View style={styles.TournamentInnerView}>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          borderWidth: 1,
                          borderColor: 'rgba(240, 240, 240, 1)',
                          borderRadius: 100,
                          paddingVertical: 16,
                          paddingLeft: 20,
                          marginBottom: 8,
                        }}
                        onPress={() => this.selectFormat(item)}>
                        <Image source={itemOpt.LeagueImage}></Image>
                        <Text
                          style={
                            itemOpt.LeagueName == 'Knockout'
                              ? styles.knocourtNameStyle
                              : styles.LeagueNameStyle
                          }>
                          {itemOpt.LeagueName}
                        </Text>
                        <Image
                          source={require('../assets/images/RightArrow.png')}
                          style={{
                            position: 'absolute',
                            right: 16.25,
                            top: 15,
                          }}></Image>
                      </TouchableOpacity>
                    </View>
                  ))}
                  <View style={styles.LineView}></View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 16,
                      justifyContent: 'space-between',
                      marginTop: 16,
                      marginBottom: 15,
                    }}>
                    <TouchableOpacity onPress={onShare}>
                      <Image source={require('../assets/images/Share.png')}></Image>
                    </TouchableOpacity>
                   
                    {item.isFollow ? (
                      <TouchableOpacity onPress={() => this.handleDelete(item)}>
                        <Image source={require('../assets/images/DeleteFill.png')}></Image>
                      </TouchableOpacity>
                    ) : (
                      <View style={{flexDirection: 'row'}}>
                        <View style={styles.FollowingView}>
                          <Text style={styles.FollowingTextStyle}>
                            Following
                          </Text>
                        </View>

                        <TouchableOpacity
                          onPress={() => this.handleDelete(item)}>
                          <Image source={require('../assets/images/Remove.png')}></Image>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              )}></FlatList>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: -30, marginBottom: 20}}
          onPress={() => this.isModelVisible(this.state.isVisible)}>
          <Image source={require('../assets/images/Plus.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    //backfaceVisibility:'hidden'
  },
  InnerContainer: {
    backgroundColor: 'rgba(246, 249, 252, 1)',
    paddingBottom: 67,
  },
  TournamentView: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 3,
    marginLeft: 13,
    marginRight: 12,
    marginTop: 6,
    marginBottom: 18,
  },
  TournamentInnerView: {
    marginLeft: 15.5,
    marginRight: 16.5,
    marginTop: 17,
  },
  ModelContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: '100%',
    borderRadius: 10,
    marginTop: 260,
    paddingBottom: 33,
  },
  FlatlistPopUpView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(38, 239, 233, 1)',
    paddingHorizontal: 23,
    paddingVertical: 27,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 13,
  },
  LineView: {
    marginTop: 18,
    borderColor: 'rgba(180, 180, 183, 0.2)',
    borderWidth: 1,
  },
  FollowingView: {
    position: 'absolute',
    backgroundColor: 'rgba(14, 79, 245, 0.1)',
    borderRadius: 50,
    paddingVertical: 6.5,
    paddingHorizontal: 12.5,
    right: 30,
    //left:221.5,
  },
  TournamentImageStyle: {
    marginLeft: 16,
    marginTop: 18,
    height:50,
    width:50
  },
  RightArrowImageStyle: {
    position: 'absolute',
    right: 35,
    top: 30,
  },
  CanclePopUp: {
    marginTop: 52,
    marginHorizontal: 158,
  },
  TournamentNameStyle: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.49,
  },
  TournamentTypeStyle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    marginTop: 8,
  },
  TeamsCountText: {
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 20,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.05,
  },
  LeagueNameStyle: {
    color: 'rgba(31, 53, 71, 1)',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 10,
  },
  FollowingTextStyle: {
    color: 'rgba(31, 53, 71, 1)',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 13,
  },
  KnockoutNameStyle: {
    marginTop: 5,
  },
  GroupNameStyle: {
    marginTop: 3,
  },
  CreateTurnamentText: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 32,
    textAlign: 'center',
    marginTop: 29,
  },
  DescriptionPopUpText: {
    marginBottom: 17,
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
  },
  PopUpTextStyle: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
    position: 'absolute',
    top: 35,
    left: 60,
  },
  knocourtNameStyle: {
    marginTop: 5,
    color: 'rgba(31, 53, 71, 1)',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 10,
  },
});

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Button, Modal} from 'react-native';

// export default class App extends Component {
//   state = {
//     isVisible: false, //state of modal default false
//   }
//   render() {
//     return (
//       <View style = {styles.container}>
//         <Modal
//           animationType = {"fade"}
//           transparent = {true}
//           visible = {this.state.isVisible}
//           onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
//           {/*All views of Modal*/}
//               <View style = {styles.modal}>
//               <Text style = {styles.text}>Modal is open!</Text>
//               <Button title="Click To Close Modal" onPress = {() => {
//                   this.setState({ isVisible:!this.state.isVisible})}}/>
//           </View>
//         </Modal>
//         {/*Button will change state to true and view will re-render*/}
//         <Button
//            title="Click To Open Modal"
//            onPress = {() => {this.setState({ isVisible: true})}}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop:300,
//     backgroundColor: '#ecf0f1',
//   },
//   modal: {
// //   justifyContent: 'center',
// //   alignItems: 'center',
//   backgroundColor : "#00BCD4",
//   height: '50%' ,
//   width: '100%',
//   borderRadius:10,
//   borderWidth: 1,
//   borderColor: '#fff',
//   marginTop: 500,
//   //marginLeft: 40,

//    },
//    text: {
//       color: '#3f2949',
//       marginTop: 10
//    }
// });
