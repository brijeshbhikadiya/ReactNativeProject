import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {Component} from 'react';

export default class MyBooking extends Component {
  constructor() {
    super();
    this.state = {
      Upcoming: true,
      Past: false,
      PastArry: [
        {
          ProfileImage: require('../assets/images/ProfileImage1.png'),
          ProfileName: 'Timothy Tan',
          ProfileStatus: 'Completed',
          CalenderImage: require('../assets/images/CalenderFil.png'),
          TimeText: 'Today at 3:00 pm',
          ReplacementText: 'Aircon Replacement',
          RightArrow: require('../assets/images/RightArrow.png'),
          BookingText: 'Schedule booking',
        },
        {
          ProfileImage: require('../assets/images/ProfileImage2.png'),
          ProfileName: 'Toh Jia Yi',
          ProfileStatus: 'Completed',
          CalenderImage: require('../assets/images/CalenderFil.png'),
          TimeText: 'Today at 3:00 pm',
          ReplacementText: 'Gas Top Up',
          RightArrow: require('../assets/images/RightArrow.png'),
          BookingText: 'Immediate booking',
        },
        {
          ProfileImage: require('../assets/images/ProfileImage3.png'),
          ProfileName: 'Lauren Toh',
          ProfileStatus: 'Completed',
          CalenderImage: require('../assets/images/CalenderFil.png'),
          TimeText: 'Today at 3:00 pm',
          ReplacementText: 'Routine Servicing',
          RightArrow: require('../assets/images/RightArrow.png'),
          BookingText: 'Schedule booking',
        },
        {
          ProfileImage: require('../assets/images/ProfileImage1.png'),
          ProfileName: 'Lim Jia Jun',
          ProfileStatus: 'Completed',
          CalenderImage: require('../assets/images/CalenderFil.png'),
          TimeText: 'Today at 3:00 pm',
          ReplacementText: 'Chemical Cleaning',
          RightArrow: require('../assets/images/RightArrow.png'),
          BookingText: 'Schedule booking',
        },
      ],
      UpcomingArray: [
        {
          ProfileImage: require('../assets/images/ProfileImage1.png'),
          ProfileName: 'Timothy Tan',
          ProfileStatus: 'On Going!',
          CalenderImage: require('../assets/images/CalenderFil.png'),
          MessageImage: require('../assets/images/MessageProfile.png'),
          TimeText: 'Today at 3:00 pm',
          ReplacementText: 'Aircon Replacement',
          RightArrow: require('../assets/images/RightArrow.png'),
          BookingText: 'Schedule booking',
        },
        {
          ProfileImage: require('../assets/images/ProfileImage2.png'),
          ProfileName: 'Toh Jia Yi',
          ProfileStatus: 'Confirmed!',
          CalenderImage: require('../assets/images/CalenderFil.png'),
          TimeText: 'Today at 3:00 pm',
          ReplacementText: 'Gas Top Up',
          MessageImage: require('../assets/images/MessageProfile.png'),
          RightArrow: require('../assets/images/RightArrow.png'),
          BookingText: 'Immediate booking',
        },
        {
          ProfileImage: require('../assets/images/ProfileImage3.png'),
          ProfileName: 'Lauren Toh',
          ProfileStatus: 'On the way!',
          CalenderImage: require('../assets/images/CalenderFil.png'),
          TimeText: 'Today at 3:00 pm',
          ReplacementText: 'Routine Servicing',
          MessageImage: require('../assets/images/MessageProfile.png'),
          RightArrow: require('../assets/images/RightArrow.png'),
          BookingText: 'Schedule booking',
        },
        {
          ProfileImage: require('../assets/images/EmptyProfile.png'),
          ProfileName: 'Assigning Service provider!',
          //ProfileStatus:"Completed",
          CalenderImage: require('../assets/images/CalenderFil.png'),
          TimeText: 'Today at 3:00 pm',
          ReplacementText: 'Chemical Cleaning',
          MessageImage: require('../assets/images/MessageProfile.png'),
          RightArrow: require('../assets/images/RightArrow.png'),
          BookingText: 'Schedule booking',
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.HeaderView}>
          <Image
            source={require('../assets/images/More.png')}
            style={styles.MoreImage}></Image>
          <View style={styles.HeaderToggleView}>
            <TouchableOpacity
              style={this.state.Upcoming ? styles.UpcomingViewBefore : null}
              onPress={() => this.setState({Upcoming: true, Past: false})}>
              <Text
                style={
                  this.state.Upcoming
                    ? styles.UpcomingTextBefore
                    : styles.UpcomingTextAfter
                }>
                Upcoming
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                this.state.Past ? styles.PastViewAfter : styles.PastViewBefore
              }
              onPress={() => this.setState({Upcoming: false, Past: true})}>
              <Text
                style={
                  this.state.Past ? styles.PastTextAfter : styles.PastTextBefore
                }>
                Past
              </Text>
            </TouchableOpacity>
          </View>
        </View>

          <View style={styles.FlatlistPastView}>
            <FlatList
              data={this.state.Past?this.state.PastArry:this.state.UpcomingArray}
              renderItem={({item}) => (
                <View style={styles.ProfileView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      borderBottomWidth: 1,
                      borderBottomColor: 'rgba(0, 0, 0, 0.06)',
                      paddingBottom: 17,
                    }}>
                    <Image source={item.ProfileImage}></Image>
                    <View style={styles.ProfileNameView}>
                      <Text style={item.ProfileName=="Assigning Service provider!"?styles.ReplacementEmptyTextStyle:styles.ProfileNameText}>
                        {item.ProfileName}
                      </Text>
                      <Text style={item.ProfileStatus=="On Going!"?styles.ProfileStatusBlueText:styles.ProfileStatusText}>
                        {item.ProfileStatus}
                      </Text>
                    </View>
                    <TouchableOpacity style={{position:'absolute',right:0}}>{item.ProfileName=="Assigning Service provider!"?null:<Image source={item.MessageImage}></Image>}</TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Image source={item.CalenderImage}></Image>
                    <Text style={styles.TimeTextStyles}>{item.TimeText}</Text>
                  
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 9,
                    }}>
                    <Text style={styles.ReplacementTextStyle}>
                      {item.ReplacementText}
                    </Text>
                    <TouchableOpacity>
                      <Image source={item.RightArrow}></Image>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.BookingTextStyle}>
                    {item.BookingText}
                  </Text>
                </View>
              )}></FlatList>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  //View
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 22,
    paddingBottom: 19,
  },
  HeaderToggleView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(241, 240, 245, 0.8)',
    height: 35,
    paddingHorizontal: 4,
    marginTop: -5,
    borderRadius: 100,
  },
  UpcomingViewBefore: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 3.5,
    borderRadius: 100,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
  },
  PastViewBefore: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 36.41,
    marginRight: 39.16,
  },
  PastViewAfter: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 37,
    marginLeft: 20,
    marginVertical: 3.5,
    borderRadius: 100,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
  },
  FlatlistPastView: {
    paddingTop: 8,
    backgroundColor: 'rgba(241, 246, 249, 0.5)',
    paddingBottom: 100,
  },
  ProfileView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 11,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
    paddingLeft: 20,
    paddingRight: 24,
    paddingTop: 17,
    paddingBottom: 27,
  },
  ProfileNameView: {
    marginLeft: 15,
    marginTop: 6,
  },
  //Image
  MoreImage: {
    position: 'absolute',
    left: 20,
  },
  //Text
  UpcomingTextBefore: {
    color: 'rgba(28, 28, 28, 1)',
    fontWeight: '600',
    fontSize: 14,
  },
  PastTextBefore: {
    color: 'rgba(150, 150, 150, 1)',
    fontWeight: '500',
    fontSize: 14,
  },
  UpcomingTextAfter: {
    color: 'rgba(150, 150, 150, 1)',
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 19,
    marginTop: 7.5,
  },
  PastTextAfter: {
    color: 'rgba(28, 28, 28, 1)',
    fontWeight: '600',
    fontSize: 14,
  },
  ProfileNameText: {
    color: 'rgba(23, 46, 81, 1)',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
  },
  ProfileStatusText: {
    color: 'rgba(56, 207, 117, 1)',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    marginTop: 6,
  },
  ProfileStatusBlueText: {
    color: 'rgba(78, 151, 238, 1)',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    marginTop: 6,
  },
  TimeTextStyles: {
    color: 'rgba(62, 62, 62, 1)',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 14,
    marginLeft: 8,
  },
  ReplacementTextStyle: {
    color: 'rgba(28, 28, 28, 1)',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19.49,
  },
  BookingTextStyle: {
    color: 'rgba(150, 150, 150, 1)',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 12,
    marginTop: 9,
  },
  ReplacementEmptyTextStyle: {
    color: 'rgba(150, 150, 150, 1)',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
    marginTop: 12,
  },
});
