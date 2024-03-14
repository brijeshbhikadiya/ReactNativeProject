import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const [teamData, setTeamData] = useState([
    {
      profileImage: require('../assets/images/Venue5.png'),
      teamName: 'Football Venue',
      playerCount: 'San Francisco',
      deleteImage: require('../assets/images/Delete.png'),
    },
            {
          profileImage: require('../assets/images/Venue6.png'),
          teamName: 'Fooball Space',
          playerCount: 'San Francisco',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Venue1.png'),
          teamName: 'Football Venue',
          playerCount: 'San Francisco',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Venue2.png'),
          teamName: 'Venue 1',
          playerCount: 'San Francisco',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Venue3.png'),
          teamName: 'Venue 2',
          playerCount: 'San Francisco',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Venue4.png'),
          teamName: 'Venue 3',
          playerCount: 'San Francisco',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Venue5.png'),
          teamName: 'Venue 4',
          playerCount: 'San Francisco',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Venue6.png'),
          teamName: 'Venue 5',
          playerCount: 'San Francisco',
          deleteImage: require('../assets/images/Delete.png'),
        },
    // Add other team data objects here
  ]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    updateItemCount();
  }, []);

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
    setItemCount(teamData.length);
  };

  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.InnerContainer}>
          {itemCount === 1 || itemCount === 0 ? (
            <Text style={styles.TeamsCountText}>Venue ({itemCount})</Text>
          ) : (
            <Text style={styles.TeamsCountText}>Venues ({itemCount})</Text>
          )}
          <FlatList
            scrollEnabled={false}
            data={teamData}
            renderItem={({ item }) => (
              <View style={styles.FlatlistView}>
                <Image source={item.profileImage} />
                <View style={{ marginLeft: 10, marginTop: 2 }}>
                  <Text style={styles.TeamNameText}>{item.teamName}</Text>
                  <Text style={styles.TeamCountText}>{item.playerCount}</Text>
                </View>
                <TouchableOpacity onPress={() => handleDelete(item)} style={styles.DeleteImage}>
                  <Image source={item.deleteImage} />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
      <Image
        source={require('../assets/images/Plus.png')}
        style={{
          alignSelf: 'center',
          marginTop: -30,
          marginBottom: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  InnerContainer: {
    backgroundColor: 'rgba(246, 249, 252, 1)',
    paddingBottom: 67,
  },
  FlatlistView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 2,
    paddingVertical: 8.5,
    paddingLeft: 13.05,
    paddingRight: 15.5,
  },
  LineView: {
    marginTop: 17,
    borderColor: 'rgba(180, 180, 183, 0.5)',
    borderWidth: 1,
  },
  MoreImage: {
    position: 'absolute',
    left: 20,
  },
  SearchImage: {
    position: 'absolute',
    right: 20,
  },
  DeleteImage: {
    position: 'absolute',
    right: 15.5,
    top: 16.91,
  },
  TeamsCountText: {
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 20,
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19.49,
  },
  TeamNameText: {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17.05,
  },
  TeamCountText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '400',
    fontSize: 13,
    //lineHeight:3
  },
});

export default HomeScreen;