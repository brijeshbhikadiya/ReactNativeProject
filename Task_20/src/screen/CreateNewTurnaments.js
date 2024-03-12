import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Modal,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';

export default class CreateNewTurnaments extends Component {
  constructor() {
    super();
    this.state = {
      teamSelect: true,
      individualSelect: false,
      Upcoming: true,
      Past: false,
      isVisible: false,
      isPopVisible: false,
      SportsData: [
        {
          SportsName: 'American Football',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'American Football',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Aussie Rules',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Bandy',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Basketball',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'eFootball/FIFA',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'eSports/Gaming',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Football',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Futsal',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Handball',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Hockey',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Ice Hockey',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Lacrosse',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Netball',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Rugby',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Table Soccer',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Water Polo',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
        {
          SportsName: 'Others',
          RightArrow: require('../assets/images/RightArrow.png'),
        },
      ],
    };
  }

  togglePopup = () => {
    this.setState({
      isPopVisible: !this.state.isPopVisible,
    });
  };
  toggleSelection = type => {
    if (type === 'teams') {
      this.setState({teamSelect: true, individualSelect: false});
    } else if (type === 'individual') {
      this.setState({teamSelect: false, individualSelect: true});
    }
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={styles.Container}>
        <Modal
          visible={this.state.isPopVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={this.togglePopup}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              flex: 1,
            }}>
            <View style={styles.savePopup}>
              <View style={styles.successfulView}>
                <Image source={require('../assets/images/Successful.png')} />
              </View>
              <Text style={styles.successfulTitleText}>Tournament Saved!</Text>
              <Text style={styles.subText}>
                Your tournament is successfully added to the tournament console.
              </Text>
            </View>
          </View>
        </Modal>

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
              <View style={styles.ModelTitlerBar}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({isVisible: false});
                  }}
                  style={styles.ArrowLeft}>
                  <Image
                    source={require('../assets/images/ArrowLeft.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.SelectSportTextModel}>Select Sport</Text>
              </View>

              <View style={styles.SportSearchView}>
                <Image
                  source={require('../assets/images/SearchGrey.png')}></Image>
                <TextInput
                  placeholder="Search Sports..."
                  placeholderTextColor={'rgba(6, 5, 16, 0.3)'}
                  style={{marginTop: -14, marginLeft: 5}}></TextInput>
              </View>

              <View style={styles.LineView}></View>

              <FlatList
                data={this.state.SportsData}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.FlatListDataView}>
                    <Text style={styles.SportsText}>{item.SportsName}</Text>
                    <Image
                      source={item.RightArrow}
                      style={{marginTop: 2}}></Image>
                  </TouchableOpacity>
                )}></FlatList>
            </View>
          </View>
        </Modal>

        <ScrollView>
          <View style={{backgroundColor: 'white', paddingBottom: 21}}>
            <View style={styles.TitlerBar}>
              <Image
                source={require('../assets/images/ArrowLeft.png')}
                style={styles.LeftArrow}></Image>
              <Text style={styles.TurnamentInfoText}>Tournament Info</Text>
            </View>

            <TouchableOpacity>
              <Image
                source={require('../assets/images/ProfileImage.png')}
                style={{marginTop: 33, alignSelf: 'center'}}></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.NameView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.NameText}>Name</Text>
              <Text style={styles.MaxText}>Max 40</Text>
            </View>
            <View>
              <TextInput></TextInput>
            </View>
          </View>

          <View style={styles.SportsView}>
            <View>
              <Text style={styles.NameText}>Sport</Text>
              <Text style={styles.SelectSportText}>Select Sport</Text>
            </View>
            <TouchableOpacity
              style={styles.DownArrowImage}
              onPress={() => {
                this.setState({isVisible: true});
              }}>
              <Image source={require('../assets/images/DownArrow.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.nameView2}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.TypeText}>Type</Text>
              <TouchableOpacity
                style={{marginTop: 0, marginRight: 10}}
                onPress={() => this.setModalVisible(true)}>
                <View style={styles.teamIndividualView}>
                  <TouchableOpacity
                    style={styles.teamRoundView}
                    onPress={() => this.toggleSelection('teams')}>
                    {this.state.teamSelect && (
                      <Image
                        source={require('../assets/images/TeamRadio.png')}
                      />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={
                      this.state.teamSelect
                        ? styles.individualText
                        : styles.teamText
                    }>
                    Teams
                  </Text>
                  <TouchableOpacity
                    style={styles.individualRoundView}
                    onPress={() => this.toggleSelection('individual')}>
                    {this.state.individualSelect && (
                      <Image
                        source={require('../assets/images/TeamRadio.png')}
                      />
                    )}
                  </TouchableOpacity>
                  <Text
                    style={
                      this.state.individualSelect
                        ? styles.individualText
                        : styles.teamText
                    }>
                    Individual
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.SelectFormatView}>
            <Text style={styles.NameText}>Select Format</Text>
            <TouchableOpacity style={styles.PlusBlueImage}>
              <Image source={require('../assets/images/PlusBlue.png')}></Image>
            </TouchableOpacity>
          </View>

          <View style={styles.PrivacyView}>
            <Text style={styles.PrivacyText}>Privacy</Text>
            <View style={styles.HeaderToggleView}>
              <TouchableOpacity
                style={
                  this.state.Upcoming
                    ? styles.UpcomingViewBefore
                    : styles.UpcomingViewAfter
                }
                onPress={() => this.setState({Upcoming: true, Past: false})}>
                <Text
                  style={
                    this.state.Upcoming
                      ? styles.UpcomingTextBefore
                      : styles.UpcomingTextAfter
                  }>
                  Public
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Past ? styles.PastViewAfter : styles.PastViewBefore
                }
                onPress={() => this.setState({Upcoming: false, Past: true})}>
                <Text
                  style={
                    this.state.Past
                      ? styles.PastTextAfter
                      : styles.PastTextBefore
                  }>
                  Private
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={this.togglePopup}>
            <Image
              source={require('../assets/images/Save.png')}
              style={{
                alignSelf: 'center',
                marginTop: 160,
                marginBottom: 32,
              }}></Image>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgba(246, 249, 252, 1)',
  },
  ModelContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: '100%',
    width: '100%',
    borderRadius: 10,
    //marginTop: 260,
    paddingBottom: 33,
  },
  TitlerBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  NameView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingTop: 16,
    marginTop: 20,
    marginHorizontal: 20,
    paddingBottom: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
  },
  SportsView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingTop: 8,
    marginTop: 20,
    paddingBottom: 9,
    marginHorizontal: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
    flexDirection: 'row',
  },
  TypeView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 20,
    paddingVertical: 14,
    marginHorizontal: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
    flexDirection: 'row',
  },
  SelectFormatView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 12.86,
    paddingTop: 18,
    marginTop: 20,
    paddingBottom: 18,
    marginHorizontal: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
    flexDirection: 'row',
  },
  PrivacyView: {
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 16,
    paddingRight: 12.86,
    paddingVertical: 7,
    marginTop: 20,
    marginHorizontal: 20,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
    flexDirection: 'row',
  },
  SportSearchView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(6, 5, 16, 0.3)',
    marginHorizontal: 20,
    marginTop: 20.5,
    paddingHorizontal: 21,
    paddingTop: 18,
    borderRadius: 15,
  },
  ModelTitlerBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30.5,
    marginLeft: 19,
  },
  FlatListDataView: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 14,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'rgba(224, 224, 224, 1)',
    borderRadius: 100,
    paddingLeft: 22,
    paddingRight: 18,
    paddingVertical: 14,
  },
  HeaderToggleView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(241, 240, 245, 0.8)',
    height: 38,
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  UpcomingViewBefore: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 9,
    marginVertical: 3.5,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
  },
  UpcomingViewAfter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  PastViewBefore: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 14,
  },
  PastViewAfter: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginLeft: 15,
    marginVertical: 3.5,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
  },
  LineView: {
    borderWidth: 1,
    marginTop: 18,
    borderColor: 'rgba(0, 0, 0, 0.05)',
  },
  LeftArrow: {
    position: 'absolute',
    left: 19,
  },
  ArrowLeft: {
    position: 'absolute',
    left: 0,
  },
  DownArrowImage: {
    position: 'absolute',
    right: 18,
    top: 22,
  },
  PlusBlueImage: {
    position: 'absolute',
    right: 18,
    top: 19,
  },
  TurnamentInfoText: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.49,
  },
  NameText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 15.83,
  },
  PrivacyText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 15.83,
    marginTop: 10,
  },
  MaxText: {
    color: 'rgba(6, 5, 16, 0.3)',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12.18,
  },
  SelectSportText: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.05,
    marginTop: 2,
  },
  SelectSportTextModel: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.49,
  },
  SportsText: {
    color: 'rgba(31, 53, 71, 1)',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
  },
  TypeText: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginLeft: 15,
    marginTop: 18,
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 15.83,
  },
  TeamsText: {
    color: 'rgba(6, 5, 16, 0.3)',
    fontWeight: '500',
    marginLeft: 3,
    marginTop: 3,
    fontSize: 14,
    lineHeight: 17.05,
  },
  IndivisualsText: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    marginLeft: 4,
    marginTop: 4,
    fontSize: 14,
    lineHeight: 17.05,
  },
  UpcomingTextBefore: {
    color: 'rgba(28, 28, 28, 1)',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 13,
    marginTop: 2,
  },
  PastTextBefore: {
    color: 'rgba(150, 150, 150, 1)',
    fontWeight: '500',
    fontSize: 13,
  },
  UpcomingTextAfter: {
    color: 'rgba(150, 150, 150, 1)',
    fontWeight: '500',
    fontSize: 13,
    marginLeft: 14,
  },
  PastTextAfter: {
    color: 'rgba(28, 28, 28, 1)',
    fontWeight: '600',
    fontSize: 13,
  },
  nameView2: {
    marginTop: 20,
    height: 52,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.05)',
    shadowOpacity: 0.8,
    elevation: 5,
    paddingBottom: 3,
  },
  teamIndividualView: {
    marginTop: 14,
    flexDirection: 'row',
  },
  teamRoundView: {
    height: 24,
    width: 24,
    borderRadius: 100,
    backgroundColor: 'rgba(6,5,16,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  individualRoundView: {
    height: 24,
    width: 24,
    borderRadius: 100,
    marginLeft: 22,
    backgroundColor: 'rgba(6,5,16,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamText: {
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.38,
    fontWeight: '500',
    marginLeft: 3,
    marginTop: 4,
    color: 'rgba(6,5,16,0.3)',
  },
  individualText: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.05,
    marginLeft: 3,
    marginTop: 4,
    color: 'rgba(0,0,0,1)',
  },
  savePopup: {
    height: 291,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowRadius: 0.6,
    elevation: 4,
    marginHorizontal: 9,
    marginTop: 200,
  },
  successfulView: {
    height: 94,
    width: 94,
    borderRadius: 100,
    borderColor: 'rgba(56,207,117,1)',
    borderWidth: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 59,
  },
  successfulTitleText: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 32,
    color: 'rgba(56,207,117,1)',
    marginTop: 11,
  },
  subText: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    marginTop: 2,
  },
});
