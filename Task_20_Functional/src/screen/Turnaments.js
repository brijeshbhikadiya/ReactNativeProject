import React, { useState, useEffect } from 'react';
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
} from 'react-native';

const Turnaments = ({ navigation }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [teamData, setTeamData] = useState([
    {
      TournamentImage: require('../assets/images/Turnament1.png'),
      TournamentName: 'Tournament',
      TournamentType: 'Football',
      LeagueImage: require('../assets/images/League.png'),
      LeagueName: 'League',
      KnockoutImage: require('../assets/images/Knockout.png'),
      KnockoutName: 'Knockout',
      delete: true,
      GroupImage: require('../assets/images/Group.png'),
      GroupName: 'Group',
      ShareImage: require('../assets/images/Share.png'),
      DeleteFillImage: require('../assets/images/DeleteFill.png'),
      RightArrowImage: require('../assets/images/RightArrow.png'),
    },
    {
      TournamentImage: require('../assets/images/Tournament2.png'),
      TournamentName: 'Football World Cup',
      TournamentType: 'Football',
      LeagueImage: require('../assets/images/League.png'),
      LeagueName: 'League',
      KnockoutImage: require('../assets/images/Knockout.png'),
      KnockoutName: 'Knockout',
      GroupImage: require('../assets/images/Group.png'),
      GroupName: 'Group',
      RightArrowImage: require('../assets/images/RightArrow.png'),
      ShareImage: require('../assets/images/Share.png'),
      RemoveImage: require('../assets/images/Remove.png'),
      FollowingText: 'Following',
      delete: false,
    },
    {
      TournamentImage: require('../assets/images/Tournament3.png'),
      TournamentName: 'Rugby World Cup ',
      TournamentType: 'Rugby',
      LeagueImage: require('../assets/images/League.png'),
      LeagueName: 'League',
      KnockoutImage: require('../assets/images/Knockout.png'),
      KnockoutName: 'Knockout',
      GroupImage: require('../assets/images/Group.png'),
      GroupName: 'Group',
      RightArrowImage: require('../assets/images/RightArrow.png'),
      ShareImage: require('../assets/images/Share.png'),
      RemoveImage: require('../assets/images/Remove.png'),
      RightArrowImage: require('../assets/images/RightArrow.png'),
      delete: false,
    },
    {
      TournamentImage: require('../assets/images/Turnament1.png'),
      TournamentName: 'Team 1',
      TournamentType: '10 Players',
      LeagueImage: require('../assets/images/League.png'),
      LeagueName: 'League',
      KnockoutImage: require('../assets/images/Knockout.png'),
      KnockoutName: 'Knockout',
      GroupImage: require('../assets/images/Group.png'),
      GroupName: 'Group',
      RightArrowImage: require('../assets/images/RightArrow.png'),
      ShareImage: require('../assets/images/Share.png'),
      RemoveImage: require('../assets/images/Remove.png'),
      RightArrowImage: require('../assets/images/RightArrow.png'),
      delete: false,
    },
  ]);
  const [popUpData] = useState([
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
  ]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    updateItemCount();
  }, [teamData]);

  const handleDelete = (index) => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete This Team',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteItem(index) },
      ],
      { cancelable: false }
    );
  };

  const deleteItem = (item) => {
    const updatedTeams = teamData.filter((team) => team !== item);
    setTeamData(updatedTeams);
    updateItemCount();
  };

  const updateItemCount = () => {
    const itemCount = teamData.length;
    setItemCount(itemCount);
  };

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
          visible={isVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <View style={styles.ModelContainer}>
              <Text style={styles.CreateTurnamentText}>Create Tournament</Text>
              <Text style={styles.DescriptionPopUpText}>
                Create new tournament or follow a{'\n'}public tournament.
              </Text>
              <FlatList
                data={popUpData}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={styles.FlatlistPopUpView}
                    onPress={
                      index == 0
                        ? () => navigation.navigate('CreateNewTurnaments')
                        : null
                    }>
                    <Image source={item.TrophyImage}></Image>
                    <Text style={styles.PopUpTextStyle}>{item.PopUpText}</Text>
                    <Image
                      source={item.RightArrowImage}
                      style={styles.RightArrowImageStyle}></Image>
                  </TouchableOpacity>
                )}></FlatList>
              <TouchableOpacity
                onPress={() => {
                  setIsVisible(false);
                }}
                style={styles.CanclePopUp}>
                <Image
                  source={require('../assets/images/CloseButton.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.InnerContainer}>
          {itemCount == 1 || itemCount == 0 ? (
            <Text style={styles.TeamsCountText}>
              Tournament ({`${itemCount}`})
            </Text>
          ) : (
            <Text style={styles.TeamsCountText}>
              Tournaments ({`${itemCount}`})
            </Text>
          )}
          <FlatList
            data={teamData}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <View style={styles.TournamentView}>
                <View style={{ flexDirection: 'row' }}>
                  <Image
                    source={item.TournamentImage}
                    style={styles.TournamentImageStyle}></Image>
                  <View style={{ marginLeft: 18, marginTop: 23 }}>
                    <Text style={styles.TournamentNameStyle}>
                      {item.TournamentName}
                    </Text>
                    <Text style={styles.TournamentTypeStyle}>
                      {item.TournamentType}
                    </Text>
                  </View>
                </View>
                <View style={styles.LineView}></View>
                <View style={styles.TournamentInnerView}>
                  <TouchableOpacity
                    style={styles.LeagueTouchableOpacity}>
                    <Image source={item.LeagueImage}></Image>
                    <Text style={styles.LeagueNameStyle}>
                      {item.LeagueName}
                    </Text>
                    <Image
                      source={item.RightArrowImage}
                      style={styles.LeagueRightArrowImageStyle}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.LeagueTouchableOpacity}>
                    <Image source={item.KnockoutImage}></Image>
                    <Text
                      style={[
                        styles.LeagueNameStyle,
                        styles.KnockoutNameStyle,
                      ]}>
                      {item.KnockoutName}
                    </Text>
                    <Image
                      source={item.RightArrowImage}
                      style={styles.LeagueRightArrowImageStyle}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.LeagueTouchableOpacity}>
                    <Image source={item.GroupImage}></Image>
                    <Text
                      style={[
                        styles.LeagueNameStyle,
                        styles.GroupNameStyle,
                      ]}>
                      {item.GroupName}
                    </Text>
                    <Image
                      source={item.RightArrowImage}
                      style={styles.LeagueRightArrowImageStyle}></Image>
                  </TouchableOpacity>
                </View>
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
                    <Image source={item.ShareImage}></Image>
                  </TouchableOpacity>
                  {item.delete ? (
                    <TouchableOpacity onPress={() => handleDelete(item)}>
                      <Image source={item.DeleteFillImage}></Image>
                    </TouchableOpacity>
                  ) : (
                    <View style={{ flexDirection: 'row' }}>
                      <View style={styles.FollowingView}>
                        <Text style={styles.FollowingTextStyle}>
                          Following
                        </Text>
                      </View>

                      <TouchableOpacity onPress={() => handleDelete(item)}>
                        <Image source={item.RemoveImage}></Image>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            )}></FlatList>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.PlusTouchableOpacity}
        onPress={() => {
          setIsVisible(true);
        }}>
        <Image source={require('../assets/images/Plus.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
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
  },
  TournamentImageStyle: {
    marginLeft: 16,
    marginTop: 18,
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
  LeagueTouchableOpacity: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(240, 240, 240, 1)',
    borderRadius: 100,
    paddingVertical: 13,
    paddingLeft: 20,
    marginBottom: 8,
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
  PlusTouchableOpacity: {
    alignSelf: 'center',
    marginTop: -30,
    marginBottom: 20,
  },
});

export default Turnaments;
