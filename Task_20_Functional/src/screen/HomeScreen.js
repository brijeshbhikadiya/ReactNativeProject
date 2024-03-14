import React, { useState, useEffect } from 'react';
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = () => {
  const [teamData, setTeamData] = useState([
    {
      profileImage: require('../assets/images/Team1.png'),
      teamName: 'Team 1',
      playerCount: '10 Players',
      deleteImage: require('../assets/images/Delete.png'),
    },
    {
      profileImage: require('../assets/images/Team2.png'),
      teamName: 'Team 2',
      playerCount: '11 Players',
      deleteImage: require('../assets/images/Delete.png'),
    },
        {
          profileImage: require('../assets/images/Team3.png'),
          teamName: 'Team 3',
          playerCount: '5 Players',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Team4.png'),
          teamName: 'Team 4',
          playerCount: '6 Players',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Team5.png'),
          teamName: 'Team 5',
          playerCount: '9 Players',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Team6.png'),
          teamName: 'Team 6',
          playerCount: '12 Players',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Team7.png'),
          teamName: 'Team 7',
          playerCount: '15 Players',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Team7.png'),
          teamName: 'Team 7',
          playerCount: '15 Players',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Team7.png'),
          teamName: 'Team 7',
          playerCount: '15 Players',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Team7.png'),
          teamName: 'Team 7',
          playerCount: '15 Players',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Team7.png'),
          teamName: 'Team 7',
          playerCount: '15 Players',
          deleteImage: require('../assets/images/Delete.png'),
        },
        {
          profileImage: require('../assets/images/Team7.png'),
          teamName: 'Team 7',
          playerCount: '15 Players',
          deleteImage: require('../assets/images/Delete.png'),
        }
    // Add more team data as needed
  ]);

  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    updateItemCount();
  }, []);

  const handleDelete = (item) => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete This Team',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteItem(item) },
      ],
      { cancelable: false }
    );
  };

  const deleteItem = (itemToDelete) => {
    const updatedTeams = teamData.filter((team) => team !== itemToDelete);
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
            <Text style={styles.TeamsCountText}>Team ({itemCount})</Text>
          ) : (
            <Text style={styles.TeamsCountText}>Teams ({itemCount})</Text>
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
    color: 'rgba(255, 171, 64, 1)',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13.4,
  },
});

export default HomeScreen;
