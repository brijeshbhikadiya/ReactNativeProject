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
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';

export default class CreateNewTurnaments extends Component {
  constructor() {
    super();
    this.state = {
      ProfileImage:'',
      textInputCheck:'',
      selectedItems: [],
      selectedSports: "Select Sport",
      modalVisible: false,
      isFormatVisible:false,
      teamSelect: true,
      individualSelect: false,
      Public: true,
      Private: false,
      isFollow:false,
      isVisible: false,
      selectedImage: false,
      isPopVisible: false,
      searchQuery:'',

      SelectFormatData:[{
        LeagueImage:require('../assets/images/League.png'),
        LeagueName:"League",
        RightArrowImage:require('../assets/images/RightArrow.png'),
      },
      {
        LeagueImage:require('../assets/images/League.png'),
        LeagueName:"ICIC League",
        RightArrowImage:require('../assets/images/RightArrow.png'),
      },
      {
        LeagueImage:require('../assets/images/Knockout.png'),
        LeagueName:"Knockout",
        RightArrowImage:require('../assets/images/RightArrow.png'),
      },
      {
        LeagueImage:require('../assets/images/Group.png'),
        LeagueName:"Group",
        RightArrowImage:require('../assets/images/RightArrow.png'),
      }
    ],
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

  
   
  


  removeItem = (index) => {
    const { selectedItems } = this.state;
    selectedItems.splice(index, 1);
    this.setState({ selectedItems: [...selectedItems] });
  };

  selectFormat = (selectedItem) => {
    const { selectedItems } = this.state;
  const index = selectedItems.findIndex((item) => item.LeagueName === selectedItem.LeagueName);

  if (index === -1) {
    // Item not in selectedItems, add it
    this.setState({ selectedItems: [...selectedItems, selectedItem] });
  } else {
    // Item already in selectedItems, remove it
    selectedItems.splice(index, 1);
    this.setState({ selectedItems: [...selectedItems] });
  }

  this.setState({isFormatVisible:false}) // Close the modal after selecting an item

  }

  onSelectSports = (Sports) => {
    this.setState({ selectedSports: Sports });
    this.setState({isVisible:false})
  };

  openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      skipBack:true,
      maxHeight: 80,
      maxWidth: 80,
    };

    launchImageLibrary(options, (response) => {
      console.log('Response',response)
      if (response.didCancel) {
        this.setState({selectedImage:false});
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        this.setState({
          ProfileImage: imageUri
        });
      }
    });
  };

  handleSearch=(text)=>{
    this.setState({searchQuery:text})
  };

  togglePopup = () => {
    // if(!this.state.textInputCheck)
    // {
    //   Alert.alert("Alert","Enter The Turnament Name");
    // }else if(this.state.selectedSports=="Select Sport")
    // {
    //   Alert.alert("Alert","Enter The Sports Name")
    // }else if(this.state.selectedItems.length==0)
    // {
    //   Alert.alert("Alert","Select The Format")
    // }
    // else{
      this.setState({
        isPopVisible: !this.state.isPopVisible,
      });
      this.props.navigation.navigate('Turnaments',{
        TournamentName:this.state.textInputCheck,
        TournamentType:this.state.selectedSports,
        SelectFormatData:this.state.selectedItems,
        // SelectedMode: this.state.Public ? 'Public' : 'Private',
        isFollow: !this.state.isFollow,
        TournamentImage:this.state.TournamentImage?this.state.ProfileImage:require('../assets/images/ProfileImage.png')
      }
    
      )
    // }
   
  };
  toggleSelection = type => {
    if (type === 'teams') {
      this.setState({teamSelect: true, individualSelect: false});
    } else if (type === 'individuals') {
      this.setState({teamSelect: false, individualSelect: true});
    }
  };
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const {searchQuery,selectedSports,modalVisible} = this.state;
    const filterCountries=this.state.SportsData.filter((Sports)=>
      Sports.SportsName.includes(searchQuery)
    );
    return (
      <View style={styles.Container}>
        <Modal
          visible={this.state.isPopVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={this.togglePopup}>
          <TouchableOpacity
          onPress={()=>this.setState({isPopVisible:false})}
          activeOpacity={1}
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
          </TouchableOpacity>
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
                onChangeText={this.handleSearch}
                value={searchQuery}
                  placeholder="Search Sports..."
                  placeholderTextColor={'rgba(6, 5, 16, 0.3)'}
                  style={{marginTop: -14, marginLeft: 5}}></TextInput>
              </View>

              <View style={styles.LineView}></View>

              <FlatList

                data={filterCountries}
                renderItem={({item}) => (
                  <TouchableOpacity style={styles.FlatListDataView} key={item.SportsName} onPress={() => this.onSelectSports(item.SportsName)}>
                    <Text style={styles.SportsText}>{item.SportsName}</Text>
                    <Image
                      source={item.RightArrow}
                      style={{marginTop: 2}}></Image>
                  </TouchableOpacity>
                )}></FlatList>
            </View>
          </View>
        </Modal>

        <Modal
          animationType={'fade'}
          transparent={true}
          visible={this.state.isFormatVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={styles.ModelContainer}>
              <View style={styles.ModelTitlerBar}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({isFormatVisible: false});
                  }}
                  style={styles.ArrowLeft}>
                  <Image
                    source={require('../assets/images/ArrowLeft.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.SelectSportTextModel}>Select Format</Text>
                <TouchableOpacity
                  style={styles.ThreeDoatsStyle}>
                  <Image
                    source={require('../assets/images/ThreeDoats.png')}></Image>
                </TouchableOpacity>
              </View>

              <View style={styles.LineView}></View>


            {this.state.SelectFormatData.map((item,index)=>(
                  <View style={styles.TournamentInnerView}>
                  <TouchableOpacity style={{flexDirection:'row',borderWidth:1,borderColor:'rgba(240, 240, 240, 1)',borderRadius:100,paddingVertical:16,paddingLeft:20,marginBottom:8}}  onPress={() => this.selectFormat(item)}>
                      <Image source={item.LeagueImage}></Image>
                      <Text style={item.LeagueName=="Knockout"?styles.knocourtNameStyle:styles.LeagueNameStyle}>{item.LeagueName}</Text>
                      <Image source={item.RightArrowImage} style={{position:'absolute',right:16.25,top:15}}></Image>
                  </TouchableOpacity>
                  </View>
            ))}
            </View>
          </View>
        </Modal>
        

        <ScrollView>
          <View style={{backgroundColor: 'white', paddingBottom: 21}}>
            <View style={styles.TitlerBar}>
              <TouchableOpacity  style={styles.LeftArrow}  onPress={() => this.props.navigation.navigate('Turnaments')}>
              <Image
                source={require('../assets/images/ArrowLeft.png')}
               ></Image>
              </TouchableOpacity>
             
              <Text style={styles.TurnamentInfoText}>Tournament Info</Text>
            </View>

            <TouchableOpacity onPress={() => {this.openImagePicker();
            this.setState({selectedImage:true})}}>
              {this.state.selectedImage?(
                 <Image source={{uri:this.state.selectedImage}} style={{alignSelf:'center',marginTop:20,width:80,height:80,borderRadius:100}}/>
              ):(
                <Image
                source={require('../assets/images/ProfileImage.png')}
                style={{marginTop: 33, alignSelf: 'center'}}></Image>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.NameView}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.NameText}>Name</Text>
              <Text style={styles.MaxText}>Max 40</Text>
            </View>
            <View>
              <TextInput style={styles.textInputText} onChangeText={text => {
                    this.setState({textInputCheck: text});
                  }}></TextInput>
            </View>
          </View>

          <View style={styles.SportsView}>
            <View>
              <Text style={styles.NameText}>Sport</Text>
              <Text style={styles.SelectSportText} onChangeText={text => {
                    this.setState({selectedSports: text});
                  }}>{this.state.selectedSports}</Text>
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
                    onPress={() => this.toggleSelection('individuals')}>
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
                    Individuals
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.SelectFormatView}>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.NameText}>Select Format</Text>
              <TouchableOpacity style={styles.PlusBlueImage}  onPress={() => {
                  this.setState({isFormatVisible: true});
                }}>
                <Image source={require('../assets/images/PlusBlue.png')}></Image>
              </TouchableOpacity>
            </View>
            {this.state.selectedItems.map((item, index) => (
          <View key={index}  style={{flexDirection:'row',borderWidth:1,borderColor:'rgba(240, 240, 240, 1)',borderRadius:100,paddingVertical:16,paddingLeft:20,marginBottom:8,marginTop:12}}>
            <Image source={item.LeagueImage}  />
            <Text style={item.LeagueName=="Knockout"?styles.knocourtNameStyle:styles.LeagueNameStyle}>{item.LeagueName}</Text>
            <TouchableOpacity onPress={() => this.removeItem(index)} style={{position:'absolute',right:16.25,top:15}}>
              <Image source={require('../assets/images/Close.png')}/>
            </TouchableOpacity>
          </View>
        ))}
           
          </View>

          <View style={styles.PrivacyView}>
            <Text style={styles.PrivacyText}>Privacy</Text>
            <View style={styles.HeaderToggleView}>
              <TouchableOpacity
                style={
                  this.state.Public
                    ? styles.UpcomingViewBefore
                    : styles.UpcomingViewAfter
                }
                onPress={() => this.setState({Public: true, Private: false,isFollow : true})}>
                <Text
                  style={
                    this.state.Public
                      ? styles.UpcomingTextBefore
                      : styles.UpcomingTextAfter
                  }>
                  Public
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.Private ? styles.PastViewAfter : styles.PastViewBefore
                }
                onPress={() => this.setState({Public: false, Private: true,isFollow : false})}>
                <Text
                  style={
                    this.state.Private
                      ? styles.PastTextAfter
                      : styles.PastTextBefore
                  }>
                  Private
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={this.togglePopup} >
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
    //flexDirection: 'row',
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
  TournamentInnerView:{
    marginLeft:15.5,
    marginRight:16.5,
    marginTop:17
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
    right: 0,
    
  },
  ThreeDoatsStyle:{
    position:'absolute',
    right:20
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
  LeagueNameStyle:{
    color:'rgba(31, 53, 71, 1)',
    fontWeight:'600',
    fontSize:14,
    marginTop:1,
    lineHeight:14,
    marginLeft:10,
},
knocourtNameStyle:{
  marginTop:5,
  color:'rgba(31, 53, 71, 1)',
  fontWeight:'600',
  fontSize:14,
  lineHeight:14,
  marginLeft:10,
},
textInputText:{
  color:'rgba(0, 0, 0, 1)',
  fontSize:14,
  lineHeight:17.05,
  fontWeight:'500'
}

});
